import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs } from '@angular/fire/firestore';
import { FirebaseJokeTableRow } from '../../../models/firebase-joke-table-row';

@Injectable({
  providedIn: 'root',
})
export class JokeDatabaseService {
  private firestore = inject(Firestore);
  private auth = inject(Auth);

  public async add(tableID: string, joke: string): Promise<void> {
    const userId = this.auth.currentUser?.uid;
    if (!userId) throw new Error('User not logged in.');
    const jokesCollection = collection(this.firestore, `users/${userId}/jokes`);
    const jokeData = { tableID: tableID, content: joke, creator: 'Chuck' };
    await addDoc(jokesCollection, jokeData);
  }

  public async remove(tableID: string): Promise<void> {
    const jokes = await this.getAll();
    const jokeToRemove = jokes.find((joke) => joke.tableID === tableID);
    if (jokeToRemove?.id == undefined) return;

    const userId = this.auth.currentUser?.uid;
    if (!userId) throw new Error('User not logged in.');
    const jokeDocRef = doc(this.firestore, `users/${userId}/jokes/${jokeToRemove.id}`);
    await deleteDoc(jokeDocRef);
  }

  public async getAll(): Promise<FirebaseJokeTableRow[]> {
    const userId = this.auth.currentUser?.uid;
    if (!userId) throw new Error('User not logged in.');
    const jokesCollection = collection(this.firestore, `users/${userId}/jokes`);
    const querySnapshot = await getDocs(jokesCollection);
    const jokes: any[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      jokes.push({ id: doc.id, ...data });
    });
    console.log(jokes);
    return jokes;
  }
}
