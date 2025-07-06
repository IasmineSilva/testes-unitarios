import { RodapeComponent } from './rodape.component';

describe('RodapeComponent', () => {
    let component: RodapeComponent;

    beforeEach(() => {
        component = new RodapeComponent();
    });

    it('deveria criar o componente', () => {
        expect(component).toBeTruthy();
    });

    it('deveria definir as propriedades alt e src', () => {
        expect(component.src).toBeDefined();
        expect(component.alt).toBeDefined();
    });

    it('deveria ter valores padrão vazios para alt e src', () => {
        expect(component.alt).toBe('');
        expect(component.src).toBe('');
    });

    it('deveria permitir definir valores para src e alt', () => {
        component.src = 'https://example.com/test-image.jpg';
        component.alt = 'Imagem teste';

        expect(component.src).toBe('https://example.com/test-image.jpg');
        expect(component.alt).toBe('Imagem teste');
    });
});