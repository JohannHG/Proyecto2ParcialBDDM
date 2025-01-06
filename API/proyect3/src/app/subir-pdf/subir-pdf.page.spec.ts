import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubirPdfPage } from './subir-pdf.page';

describe('SubirPdfPage', () => {
  let component: SubirPdfPage;
  let fixture: ComponentFixture<SubirPdfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
