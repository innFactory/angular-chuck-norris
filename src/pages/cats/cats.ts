import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GenerationCard } from '../../components/generation-card/generation-card';

@Component({
  selector: 'app-cats',
  imports: [MatButtonModule, MatIconModule, GenerationCard],
  templateUrl: './cats.html',
  styleUrl: './cats.scss',
})
export class Cats {
  longText = 'Chuck Norris hat einen Grizzlybären Vorleger in seinem Zimmer. Der Bär ist nicht tot, er hat nur Angst sich zu bewegen.';
}
