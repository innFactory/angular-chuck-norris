import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cats } from './cats';

describe('Cats', () => {
  let component: Cats;
  let fixture: ComponentFixture<Cats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
