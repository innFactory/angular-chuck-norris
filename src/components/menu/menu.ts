import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {}
