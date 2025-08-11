import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChuckJokesCard } from '../../components/chuck-jokes-card/chuck-jokes-card';

@Component({
  selector: 'app-jokes',
  imports: [MatButtonModule, MatIconModule, ChuckJokesCard],
  templateUrl: './jokes.html',
  styleUrl: './jokes.scss',
})
export class Jokes {}
