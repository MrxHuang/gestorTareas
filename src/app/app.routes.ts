import { Routes } from '@angular/router';
import { Inicio } from './modulos/inicio/inicio';
import { About } from './modulos/about/about';
import { tareas } from './modulos/tareas/tareas';

export const routes: Routes = [
    { path: '', component: Inicio},
    { path: 'tareas', component: tareas},
    { path: 'about', component: About},
    { path: '**', redirectTo: '' }
];
