import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collection, deleteDoc, doc, Firestore, getDocs, setDoc } from '@angular/fire/firestore';
import { CREATOR_CHUCK } from '../../../app/app.constants';
import { FirebaseJokeTableRow } from '../../../models/firebase-joke-table-row';
import { AuthService } from '../../../security/auth/auth-service';

const firebaseTableName = 'jokes';

@Injectable({
  providedIn: 'root',
})
export class JokeDatabaseService {
  private authService = inject(AuthService);
  private firestore = inject(Firestore);
  private auth = inject(Auth);

  public async add(jokeID: string, joke: string): Promise<void> {
    if (!this.authService.checkAuthenticated()) return;
    if (this.auth.currentUser === null) return;
    const userTableDocumentID = this.auth.currentUser.email;
    const jokesCollection = collection(this.firestore, `users/${userTableDocumentID}/${firebaseTableName}`);
    const jokeData = { content: joke, creator: CREATOR_CHUCK };
    const jokeDocRef = doc(jokesCollection, jokeID);
    await setDoc(jokeDocRef, jokeData);
  }

  public async remove(jokeID: string): Promise<void> {
    if (!this.authService.checkAuthenticated()) return;
    if (this.auth.currentUser === null) return;
    const userTableDocumentID = this.auth.currentUser.email;
    const jokeDocRef = doc(this.firestore, `users/${userTableDocumentID}/${firebaseTableName}/${jokeID}`);
    await deleteDoc(jokeDocRef);
  }

  public async getAll(): Promise<FirebaseJokeTableRow[]> {
    if (!this.authService.checkAuthenticated()) return [];
    if (this.auth.currentUser === null) return [];
    const userTableDocumentID = this.auth.currentUser.email;
    const jokesCollection = collection(this.firestore, `users/${userTableDocumentID}/${firebaseTableName}`);
    const querySnapshot = await getDocs(jokesCollection);
    const jokes: FirebaseJokeTableRow[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      jokes.push({ id: doc.id, content: data['content'], creator: data['creator'] });
    });
    return jokes;
  }
}
