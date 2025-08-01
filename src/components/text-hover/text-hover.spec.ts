import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHover } from './text-hover';

describe('TextHover', () => {
  let component: TextHover;
  let fixture: ComponentFixture<TextHover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextHover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextHover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
