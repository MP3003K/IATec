import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Herramienta3Component } from './herramienta3.component';

describe('Herramienta3Component', () => {
  let component: Herramienta3Component;
  let fixture: ComponentFixture<Herramienta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Herramienta3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Herramienta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
