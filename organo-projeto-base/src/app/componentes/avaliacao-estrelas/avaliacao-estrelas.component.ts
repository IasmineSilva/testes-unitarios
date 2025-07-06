import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-avaliacao-estrelas',
  standalone: true,
  imports: [],
  templateUrl: './avaliacao-estrelas.component.html',
  styleUrl: './avaliacao-estrelas.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvaliacaoEstrelasComponent),
      multi: true
    }
  ]
})
export class AvaliacaoEstrelasComponent implements ControlValueAccessor {

  @Input() classificacao: number = 1;
  readOnly: boolean = true;
  estrelas: number[] = [1, 2, 3, 4, 5];
  onChange = (classificacao: number) => {};
  onTouched = () => {};


  writeValue(classificacao: number): void {
    if (this.isClassificationValid(classificacao)) {
      this.classificacao = classificacao;
    } else {
      this.classificacao = 1;
    }
  }

  private isClassificationValid(classificacao: number): boolean {
    return classificacao >= 1 && classificacao <= 5;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.readOnly = isDisabled;
  }

  classificar(classificacao: number) {
    if (!this.readOnly) {
      this.classificacao = classificacao;
      this.onChange(this.classificacao);
      this.onTouched();
    }
  }
}
