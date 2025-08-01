import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-header',
  imports: [Menu, Navigation],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
