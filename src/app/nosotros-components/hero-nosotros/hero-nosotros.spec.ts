import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNosotros } from './hero-nosotros';

describe('HeroNosotros', () => {
  let component: HeroNosotros;
  let fixture: ComponentFixture<HeroNosotros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroNosotros],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroNosotros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
