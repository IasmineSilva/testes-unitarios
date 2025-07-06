import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Livro } from './livro';
import { AvaliacaoEstrelasComponent } from '../avaliacao-estrelas/avaliacao-estrelas.component';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [
    CommonModule,
    AvaliacaoEstrelasComponent
  ],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  @Input() livro!: Livro;
}
