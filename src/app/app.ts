import { Component } from '@angular/core';
import { Content } from '../components/content/content';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, Content, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
