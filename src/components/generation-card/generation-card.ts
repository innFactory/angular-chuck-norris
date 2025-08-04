import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-generation-card',
  imports: [MatCardModule, MatChipsModule, MatButtonModule, MatProgressBarModule, MatIconModule],
  templateUrl: './generation-card.html',
  styleUrl: './generation-card.scss',
})
export class GenerationCard {
  public cardTitle = input<string>('');
}
