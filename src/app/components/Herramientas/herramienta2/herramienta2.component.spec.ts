import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Herramienta2Component } from './herramienta2.component';

describe('Herramienta2Component', () => {
  let component: Herramienta2Component;
  let fixture: ComponentFixture<Herramienta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Herramienta2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Herramienta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
