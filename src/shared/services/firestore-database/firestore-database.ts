import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs } from '@angular/fire/firestore';

export interface FirestoreChuckJokes {
  id: string;
  tableID: number;
  content: string;
  creator: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreDatabaseService {
  private firestore = inject(Firestore);
  private auth = inject(Auth);

  public async addJoke(joke: string): Promise<void> {
    const userId = this.auth.currentUser?.uid;
    if (!userId) throw new Error('User not logged in.');
    const jokesCollection = collection(this.firestore, `users/${userId}/jokes`);
    const jokeData = { tableID: Math.ceil(100 * Math.random()), content: joke, creator: 'Chuck' };
    await addDoc(jokesCollection, jokeData);
  }

  public async removeJoke(tableID: number): Promise<void> {
    const jokes = await this.getAllJokes();
    const jokeToRemove = jokes.find((joke) => joke.tableID === tableID);
    if (jokeToRemove?.id == undefined) return;

    const userId = this.auth.currentUser?.uid;
    if (!userId) throw new Error('User not logged in.');
    const jokeDocRef = doc(this.firestore, `users/${userId}/jokes/${jokeToRemove.id}`);
    await deleteDoc(jokeDocRef);
  }

  public async getAllJokes(): Promise<FirestoreChuckJokes[]> {
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
