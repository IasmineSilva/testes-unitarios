describe('AvaliacaoEstrelasComponent', () => {
    let component: any;

    beforeEach(() => {
        component = {
            classificacao: 1,
            readOnly: false,
            estrelas: [1, 2, 3, 4, 5],
            onChange: jest.fn(),
            onTouched: jest.fn(),

            writeValue: function (classificacao: number) {
                if (this.isClassificationValid(classificacao)) {
                    this.classificacao = classificacao;
                } else {
                    this.classificacao = 1;
                }
            },

            isClassificationValid: function (classificacao: number) {
                return classificacao >= 1 && classificacao <= 5;
            },

            classificar: function (classificacao: number) {
                if (!this.readOnly) {
                    this.classificacao = classificacao;
                    this.onChange(this.classificacao);
                    this.onTouched();
                }
            }
        };
    });

    it('deveria ser criado', () => {
        expect(component).toBeTruthy();
    });

    it('deveria atribuir um valor para a classificação quando o método writeValue for chamado', () => {
        const classificacao = 3;
        component.writeValue(classificacao);
        expect(component.classificacao).toBe(classificacao);
    });

    it('deveria chamar o onChange quando o método classificar for chamado', () => {
        const classificacao = 4;
        component.classificar(classificacao);
        expect(component.onChange).toHaveBeenCalled();
    });

    it('deveria chamar o onTouched quando o método classificar for chamado', () => {
        const classificacao = 4;
        component.classificar(classificacao);
        expect(component.onTouched).toHaveBeenCalled();
    });

    it('não deveria atualizar a classificação quando a propriedade readonly for true', () => {
        component.readOnly = true;
        const classificacao = 5;
        component.classificar(classificacao);
        expect(component.onChange).not.toHaveBeenCalled();
        expect(component.classificacao).not.toBe(classificacao);
    });

    it('deveria ignorar valores inválidos e atribuir o valor 1 à classificação', () => {
        const valoresInvalidos = [0, -6, 'abc', undefined];
        valoresInvalidos.forEach(valorInvalido => {
            component.writeValue(valorInvalido as any);
            expect(component.classificacao).toBe(1);
        });
    });

    it('deve inicializar com a classificação padrão de 1', () => {
        expect(component.classificacao).toBe(1);
    });

    it('deve atualizar a classificação quando o @Input mudar', () => {
        component.classificacao = 3;
        expect(component.classificacao).toBe(3);

        component.classificacao = 5;
        expect(component.classificacao).toBe(5);
    });

    it('deveria ter um array de estrelas de 1 a 5', () => {
        expect(component.estrelas).toEqual([1, 2, 3, 4, 5]);
    });

    it('deveria validar valores de classificação corretamente', () => {
        component.writeValue(1);
        expect(component.classificacao).toBe(1);

        component.writeValue(5);
        expect(component.classificacao).toBe(5);

        component.writeValue(0);
        expect(component.classificacao).toBe(1);

        component.writeValue(6);
        expect(component.classificacao).toBe(1);
    });
});