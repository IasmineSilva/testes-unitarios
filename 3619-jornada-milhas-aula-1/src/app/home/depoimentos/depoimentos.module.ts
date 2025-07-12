import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepoimentosComponent } from './depoimentos.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DepoimentosComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    DepoimentosComponent
  ]
})
export class DepoimentosModule { }
