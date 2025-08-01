import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { TextHover } from '../text-hover/text-hover';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, MatRippleModule, TextHover],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {}
