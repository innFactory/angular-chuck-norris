import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  /*
    Angular lifecycle method ngOnInit.
    Always called on component creation. All angular components have various lifecycle methods.
  */
  public ngOnInit() {
    console.log('Willkommen aus der Konsole!');
  }
}
