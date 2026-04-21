import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHeader } from './registro-header';

describe('RegistroHeader', () => {
  let component: RegistroHeader;
  let fixture: ComponentFixture<RegistroHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
