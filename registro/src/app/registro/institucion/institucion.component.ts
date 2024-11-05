import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.component.html',
})
export class InstitucionComponent {
  @Output() formStatus = new EventEmitter<{ valid: boolean; value: any }>();

  instituciones: string[] = [
    'Institución A',
    'Institución B',
    'Institución C'
  ];

  institucionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.institucionForm = this.fb.group({
      institucion: ['', [Validators.required]] 
    });

    this.institucionForm.valueChanges.subscribe(() => {
      this.emitirEstadoFormulario();
    });
  }

  emitirEstadoFormulario() {
    this.formStatus.emit({
      valid: this.institucionForm.valid,
      value: this.institucionForm.value
    });
  }

  resetFormulario() {
    this.institucionForm.reset();
  }
}

