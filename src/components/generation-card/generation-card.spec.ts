import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationCard } from './generation-card';

describe('GenerationCard', () => {
  let component: GenerationCard;
  let fixture: ComponentFixture<GenerationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerationCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
