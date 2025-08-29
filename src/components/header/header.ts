import { Component } from '@angular/core';
import { ChatBubble } from '../chat-bubble/chat-bubble';
import { Menu } from '../menu/menu';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-header',
  imports: [Menu, Navigation, ChatBubble],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
