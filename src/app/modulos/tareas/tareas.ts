import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TareaService, Tarea } from '../../servicio/tareas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  imports: [CommonModule, FormsModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class tareas  {
 
  tareas: Tarea[] = [];
  nuevaTarea = '';
  errorMensaje = '';
  editandoId: number | null = null;
  editandoNombre = '';

  constructor(private tareasService: TareaService) {}

  ngOnInit() {
    this.tareasService.getTareas().subscribe(t => this.tareas = t);
  }

  agregar() {
    if (!this.nuevaTarea.trim()) {
      this.errorMensaje = '⚠️ Primero escribe una tarea antes de agregar';
      return;
    }
    this.tareasService.agregarTarea(this.nuevaTarea.trim());
    this.nuevaTarea = '';
    this.errorMensaje = '';
  }

  empezarEditar(t: Tarea) {
    this.editandoId = t.id;
    this.editandoNombre = t.nombre;
  }

  guardarEditar(t: Tarea) {
    if (!this.editandoNombre.trim()) {
      this.errorMensaje = '⚠️ El nombre no puede estar vacío';
      return;
    }
    this.tareasService.editarTarea(t.id, this.editandoNombre.trim());
    this.editandoId = null;
    this.errorMensaje = '';
  }

  cancelarEditar() {
    this.editandoId = null;
    this.errorMensaje = '';
  }

  eliminar(id: number) {
    this.tareasService.eliminarTarea(id);
  }

}
