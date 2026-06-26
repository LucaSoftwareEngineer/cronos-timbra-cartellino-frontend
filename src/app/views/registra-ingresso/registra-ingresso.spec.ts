import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraIngresso } from './registra-ingresso';

describe('RegistraIngresso', () => {
  let component: RegistraIngresso;
  let fixture: ComponentFixture<RegistraIngresso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistraIngresso],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistraIngresso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
