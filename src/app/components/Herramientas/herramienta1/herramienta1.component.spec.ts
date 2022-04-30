import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Herramienta1Component } from './herramienta1.component';

describe('Herramienta1Component', () => {
  let component: Herramienta1Component;
  let fixture: ComponentFixture<Herramienta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Herramienta1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Herramienta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
