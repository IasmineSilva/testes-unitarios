import { LivroService } from '../../services/livro.service';

describe('ListaLivrosComponent', () => {
    let service: LivroService;

    beforeEach(() => {
        service = new LivroService();
    });

    it('deveria ter gêneros literários disponíveis', () => {
        const generosEsperados = [
            { id: 'romance', value: 'Romance' },
            { id: 'misterio', value: 'Mistério' },
            { id: 'fantasia', value: 'Fantasia' },
            { id: 'ficcao-cientifica', value: 'Ficção Científica' },
            { id: 'tecnicos', value: 'Técnicos' }
        ];

        expect(service.generos).toEqual(generosEsperados);
    });

    it('deveria obter livros por gênero', () => {
        const livrosRomance = service.obterLivrosPorGenero('romance');
        expect(Array.isArray(livrosRomance)).toBe(true);
    });

    it('deveria ter estrutura de dados correta para livros', () => {
        const livros = service.obterLivrosPorGenero('romance');

        if (livros.length > 0) {
            const livro = livros[0];
            expect(livro.titulo).toBeDefined();
            expect(livro.autoria).toBeDefined();
            expect(livro.imagem).toBeDefined();
            expect(livro.genero).toBeDefined();
            expect(livro.dataLeitura).toBeDefined();
            expect(livro.classificacao).toBeDefined();
        }
    });

    it('deveria validar estrutura de gêneros', () => {
        service.generos.forEach(genero => {
            expect(genero.id).toBeDefined();
            expect(genero.value).toBeDefined();
            expect(typeof genero.id).toBe('string');
            expect(typeof genero.value).toBe('string');
        });
    });
});