import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProyectoPage } from './proyecto.page';

describe('ProyectoPage', () => {
  let component: ProyectoPage;
  let fixture: ComponentFixture<ProyectoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
