import { Component, inject, signal } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Content } from '../components/content/content';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, Content, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  events$ = signal<any[]>([]); // Signal, um die Ereignisse zu speichern
  firestore = inject(Firestore);

  ngOnInit() {
    const eventsCollection = collection(this.firestore, 'favourites');
    collectionData(eventsCollection).subscribe((data) => {
      this.events$.set(data);
      console.log(this.events$());
    });
  }
}
