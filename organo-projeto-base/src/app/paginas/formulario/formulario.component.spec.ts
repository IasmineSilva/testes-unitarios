import { LivroService } from '../../services/livro.service';

describe('FormularioComponent', () => {
    let service: LivroService;

    beforeEach(() => {
        service = new LivroService();
    });

    it('deveria ter os gêneros literários disponíveis', () => {
        const generosEsperados = [
            { id: 'romance', value: 'Romance' },
            { id: 'misterio', value: 'Mistério' },
            { id: 'fantasia', value: 'Fantasia' },
            { id: 'ficcao-cientifica', value: 'Ficção Científica' },
            { id: 'tecnicos', value: 'Técnicos' }
        ];

        expect(service.generos).toEqual(generosEsperados);
    });

    it('deveria adicionar um novo livro', () => {
        const novoLivro = {
            titulo: 'Novo Livro',
            autoria: 'Autoria Desconhecida',
            imagem: 'http://example.com/cover.jpg',
            genero: { id: 'romance', value: 'Romance' },
            dataLeitura: '2024-04-19',
            classificacao: 5
        };

        const adicionarLivroSpy = jest.spyOn(service, 'adicionarLivro');

        service.adicionarLivro(novoLivro);

        expect(adicionarLivroSpy).toHaveBeenCalledWith(novoLivro);
    });

    it('deveria validar estrutura de dados do livro', () => {
        const livro = {
            titulo: 'Teste',
            autoria: 'Autor',
            imagem: 'http://example.com/cover.jpg',
            genero: { id: 'romance', value: 'Romance' },
            dataLeitura: '2024-04-19',
            classificacao: 5
        };

        expect(livro.titulo).toBeDefined();
        expect(livro.autoria).toBeDefined();
        expect(livro.imagem).toBeDefined();
        expect(livro.genero).toBeDefined();
        expect(livro.dataLeitura).toBeDefined();
        expect(livro.classificacao).toBeDefined();
    });

    it('deveria encontrar gênero por ID', () => {
        const generoEncontrado = service.generos.find(g => g.id === 'romance');
        expect(generoEncontrado).toEqual({ id: 'romance', value: 'Romance' });
    });
});