import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormbuilderPage } from './formbuilder.page';

describe('FormbuilderPage', () => {
  let component: FormbuilderPage;
  let fixture: ComponentFixture<FormbuilderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
