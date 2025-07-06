import { CabecalhoComponent } from './cabecalho.component';

describe('CabecalhoComponent', () => {
    let component: CabecalhoComponent;

    beforeEach(() => {
        component = new CabecalhoComponent();
    });

    it('deveria ser criado', () => {
        expect(component).toBeTruthy();
    });

    it('deveria definir as propriedades alt e src', () => {
        expect(component.alt).toBeDefined();
        expect(component.src).toBeDefined();
    });

    it('deveria ter valores padrão vazios para alt e src', () => {
        expect(component.alt).toBe('');
        expect(component.src).toBe('');
    });
});