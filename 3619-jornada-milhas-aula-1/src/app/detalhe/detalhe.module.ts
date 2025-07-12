import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheComponent } from './detalhe.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DetalheComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
  ]
})
export class DetalheModule { }
