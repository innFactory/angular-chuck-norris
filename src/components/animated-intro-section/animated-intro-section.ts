import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { URL_WIKIMEDIA_CHUCK_PICTURE_1 } from '../../app/app.constants';

const ANIMATION_TAG_CLASSES: string[][] = [
  ['animate-intro-headline', 'animate-intro-1'],
  ['animate-presentation-headline', 'animate-presentation-1'],
  ['animate-lets-go-headline', 'animate-lets-go-1', 'animate-lets-go-2'],
];
const LETTER_ANIMATION_SPEED = 80;

@Component({
  selector: 'app-animated-intro-section',
  imports: [MatButtonModule],
  templateUrl: './animated-intro-section.html',
  styleUrl: './animated-intro-section.scss',
})
export class AnimatedIntroSection {
  protected introCounter = signal<number | undefined>(undefined);
  protected refHTMLAnimationTagClasses = ANIMATION_TAG_CLASSES;
  protected URL_WIKIMEDIA_CHUCK_PICTURE_1 = URL_WIKIMEDIA_CHUCK_PICTURE_1;

  public async ngAfterViewInit() {
    this.nextIntroAnimation(ANIMATION_TAG_CLASSES[0]);
  }

  protected async nextIntroAnimation(sectionClasses: string[]) {
    if (!sectionClasses.length) return;
    this.introCounter.update((num) => {
      if (num === undefined || num === 2) {
        return 0;
      } else {
        return num + 1;
      }
    });
    await this.waitABit(100);
    const animateLetters = () => {
      const getLettersForSection = (tagClass: string) => {
        const textWrapper: HTMLElement | null = document.querySelector(`.${tagClass}`);
        if (!textWrapper || !textWrapper.textContent) return;
        textWrapper.style.opacity = '1';
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        const letters: NodeListOf<HTMLElement> = textWrapper.querySelectorAll('.letter');
        return letters;
      };
      const startAnimation = (letters: NodeListOf<HTMLElement>) => {
        letters.forEach((letter, index) => {
          letter.style.opacity = '0';
          letter.style.transform = 'translateY(20px)';
          const transitionDuration = '0.1s';
          const transitionTimingFunction = 'ease-in-out';
          const delay = index * 25;
          letter.style.transition = `opacity ${transitionDuration} ${transitionTimingFunction} ${delay}ms, transform ${transitionDuration} ${transitionTimingFunction} ${delay}ms`;
          setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';
          }, delay);
        });
      };
      const animateSectionBySection = async () => {
        for (const section of sectionClasses) {
          const letters = getLettersForSection(section);
          if (!letters || !(letters instanceof NodeList)) return;
          startAnimation(letters);
          const calculatedDelayFromLetters = letters.length * LETTER_ANIMATION_SPEED + 500;
          await this.waitABit(calculatedDelayFromLetters ?? 0);
        }
      };
      animateSectionBySection();
    };
    animateLetters();
  }

  private async waitABit(milliseconds: number) {
    await new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
}
