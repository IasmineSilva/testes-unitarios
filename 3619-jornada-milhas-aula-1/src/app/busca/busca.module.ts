import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { CompanhiasComponent } from "./filtros-complementares/companhias/companhias.component";
import { LabelComponent } from "./filtros-complementares/label/label.component";
import { ParadasComponent } from "./filtros-complementares/paradas/paradas.component";
import { PrecosComponent } from "./filtros-complementares/precos/precos.component";
import { MaterialModule } from "../core/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { FiltrosComplementaresComponent } from "./filtros-complementares/filtros-complementares.component";
import { PassagemDestaqueComponent } from "./passagem-destaque/passagem-destaque.component";
import { PassagemComponent } from "./passagem/passagem.component";
import { BuscaComponent } from "./busca.component";

@NgModule({
  declarations: [
    BuscaComponent,
    ParadasComponent,
    CompanhiasComponent,
    PrecosComponent,
    LabelComponent,
    FiltrosComplementaresComponent,
    PassagemComponent,
    PassagemDestaqueComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    BuscaComponent,
    ParadasComponent,
    CompanhiasComponent,
    PrecosComponent,
    LabelComponent,
    FiltrosComplementaresComponent,
    PassagemComponent,
    PassagemDestaqueComponent
  ]
})
export class BuscaModule { }
