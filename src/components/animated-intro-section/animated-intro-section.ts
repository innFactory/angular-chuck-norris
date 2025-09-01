import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

type TextAnimation = {
  name: string;
  delay?: number;
};

@Component({
  selector: 'app-animated-intro-section',
  imports: [MatButtonModule],
  templateUrl: './animated-intro-section.html',
  styleUrl: './animated-intro-section.scss',
})
export class AnimatedIntroSection {
  protected introStep = signal(-1);

  public ngAfterViewInit() {
    this.nextStep([
      { name: 'animate-intro-1', delay: 1000 },
      { name: 'animate-intro-2', delay: 2000 },
    ]);
  }

  protected async nextStep(tagClasses: TextAnimation[]) {
    this.introStep.update((num) => (num += 1));
    if (this.introStep() > 2) {
      this.introStep.set(0);
    }
    await this.delay(50);
    this.hideTexts(tagClasses);
    await this.animateText(tagClasses);
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private animateText(tagClasses: TextAnimation[]) {
    if (!tagClasses.length) return;
    const startAnimation = (tagClass: string) => {
      const textWrapper: HTMLElement | null = document.querySelector(`.${tagClass}`);
      if (!textWrapper || !textWrapper.textContent) return;
      textWrapper.style.opacity = '1';
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      const letters: NodeListOf<HTMLElement> = textWrapper.querySelectorAll('.letter');
      letters.forEach((letter, index) => {
        letter.style.opacity = '0';
        letter.style.transform = 'translateY(20px)';
        const transitionDuration = '0.1s';
        const transitionTimingFunction = 'ease-in-out';
        const delay = index * 50;
        letter.style.transition = `opacity ${transitionDuration} ${transitionTimingFunction} ${delay}ms, transform ${transitionDuration} ${transitionTimingFunction} ${delay}ms`;
        setTimeout(() => {
          letter.style.opacity = '1';
          letter.style.transform = 'translateY(0)';
        }, 0);
      });
    };

    tagClasses.forEach((tag, index) => {
      const tagDelay = tag.delay ?? 1000;
      setTimeout(() => {
        startAnimation(tag.name);
      }, tagDelay);
    });
  }

  private hideTexts(tagClasses: TextAnimation[]) {
    tagClasses.forEach((tag) => {
      const textWrapper: HTMLElement | null = document.querySelector(`.${tag.name}`);
      if (textWrapper) {
        textWrapper.style.opacity = '0';
      }
    });
  }
}
