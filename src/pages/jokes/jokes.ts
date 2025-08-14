import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ChuckJokesCard } from '../../components/chuck-jokes-card/chuck-jokes-card';

@Component({
  selector: 'app-jokes',
  imports: [MatButtonModule, MatIconModule, ChuckJokesCard, MatFormFieldModule, MatInputModule],
  templateUrl: './jokes.html',
  styleUrl: './jokes.scss',
})
export class Jokes {}
