import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit {
  /*
    Angular lifecycle method ngOnInit.
    Always called on component creation. All angular components have various lifecycle methods.
  */
  public ngOnInit() {
    console.log('Willkommen in den DevTools!');
  }
}
