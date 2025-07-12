import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent {
  @Input() promocao!: Promocao;

  constructor(
    private router: Router
  ) {}

  onDetalheClick(): void {
    this.router.navigate(['detalhe']);
  }
}
