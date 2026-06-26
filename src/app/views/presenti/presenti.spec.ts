import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Presenti } from './presenti';

describe('Presenti', () => {
  let component: Presenti;
  let fixture: ComponentFixture<Presenti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Presenti],
    }).compileComponents();

    fixture = TestBed.createComponent(Presenti);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
