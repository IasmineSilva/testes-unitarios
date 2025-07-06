export interface Livro {
  titulo: string,
  autoria: string,
  imagem: string,
  genero: GeneroLiterario,
  dataLeitura: string,
  classificacao: number
}


export interface GeneroLiterario {
  id: string
  value: string
}
