import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarComponentePage } from './buscar-componente.page';

describe('BuscarComponentePage', () => {
  let component: BuscarComponentePage;
  let fixture: ComponentFixture<BuscarComponentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarComponentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
