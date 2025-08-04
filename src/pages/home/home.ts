import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GenerationCard } from '../../components/generation-card/generation-card';
@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatProgressBarModule, MatIconModule, GenerationCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  longText = 'Chuck Norris hat einen Grizzlybären Vorleger in seinem Zimmer. Der Bär ist nicht tot, er hat nur Angst sich zu bewegen.';
}
