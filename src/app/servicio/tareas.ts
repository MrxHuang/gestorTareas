import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Tarea {
  id: number;
  nombre: string;
  completada: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  
  private tareas: Tarea[] = [];
  private tareasSubject = new BehaviorSubject<Tarea[]>([]);
  tareas$ = this.tareasSubject.asObservable();

  private idCounter = 1;

  constructor() {}

  getTareas() {
    return this.tareas$;
  }

  agregarTarea(nombre: string) {
    const nueva: Tarea = {
      id: this.idCounter++,
      nombre,
      completada: false
    };
    this.tareas.push(nueva);
    this.tareasSubject.next([...this.tareas]);
  }

  editarTarea(id: number, nuevoNombre: string) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.nombre = nuevoNombre;
      this.tareasSubject.next([...this.tareas]);
    }
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.tareasSubject.next([...this.tareas]);
  }

}
