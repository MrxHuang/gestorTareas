import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Nav } from "./estructura/nav/nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('listas');
}
