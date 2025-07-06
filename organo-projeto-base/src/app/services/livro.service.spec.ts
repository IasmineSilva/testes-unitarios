import { LivroService } from "./livro.service";
import { Livro, GeneroLiterario } from "../componentes/livro/livro";

describe('LivroService', () => {
    let service: LivroService;
    
    beforeEach(() => {
        service = new LivroService();
    });

    it('Deveria ser criado', () => {
        expect(service).toBeTruthy();
    });

    it('deveria adicionar um novo livro', () => {
        const novoLivro: Livro = {
            titulo: 'Novo Livro',
            autoria: 'Autor Desconhecido',
            imagem: 'http://example.com/cover.jpg',
            genero: { id: 'romance', value: 'Romance' },
            dataLeitura: '2024-04-19',
            classificacao: 5
        };
        service.adicionarLivro(novoLivro);
        const livroPorGenero = service.obterLivrosPorGenero('romance');
        expect(livroPorGenero).toContain(novoLivro);
    });

    it('Deveria recuperar corretamente os livros por genero', () => {
        const livros: Livro[] = [
            {
                titulo: 'Livro 1',
                autoria: 'Autor 1',
                imagem: 'http://example.com/1.jpg',
                genero: { id: 'romance', value: 'Romance' },
                dataLeitura: '2024-01-01',
                classificacao: 4
            },
            {
                titulo: 'Livro 2',
                autoria: 'Autor 2',
                imagem: 'http://example.com/2.jpg',
                genero: { id: 'aventura', value: 'Aventura' },
                dataLeitura: '2024-02-01',
                classificacao: 5
            }
        ];
        livros.forEach(livro => service.adicionarLivro(livro));
        const livroPorGenero = service.obterLivrosPorGenero('romance');
        const livrosEsperados = livros.filter(livro => livro.genero.id === 'romance');
        expect(livroPorGenero).toEqual(livrosEsperados);
    });
});