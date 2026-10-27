import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logo } from './logo/logo';
import { Buscador } from './buscador/buscador';
import { Contenido } from './contenido/contenido';
import { Bizquierda } from './bizquierda/bizquierda';

import { Footer1 } from './footer1/footer1';
import { Footer2 } from './footer2/footer2';
import { Footer3 } from './footer3/footer3';


@Component({
  imports: [RouterOutlet, Logo, Buscador, Contenido, Bizquierda, Footer1, Footer2, Footer3],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('primer-proyecto');
}
