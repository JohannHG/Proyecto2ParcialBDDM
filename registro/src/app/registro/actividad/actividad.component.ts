import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
})
export class ActividadComponent {
  @Output() formStatus = new EventEmitter<{ valid: boolean; value: any }>();
  actividadMap: { [key: number]: string } = {
    101: 'Taller',
    102: 'Conferencia',
    103: 'Concurso'
  };
  actividades: string[] = Object.values(this.actividadMap);
  actividadForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.actividadForm = this.fb.group({
      actividad: ['', [Validators.required]]  
    });
    
    this.actividadForm.valueChanges.subscribe(() => {
      this.emitirEstadoFormulario();
    });
  }

  emitirEstadoFormulario() {
    this.formStatus.emit({
      valid: this.actividadForm.valid,
      value: this.actividadForm.value
    });
  }

  resetFormulario() {
    this.actividadForm.reset();
  }
}
