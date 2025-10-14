// Lista de produtos (poderia vir de uma API depois)
export const produtos = [
  { id: 1, nome: "Teclado", preco: 120.0 },
  { id: 2, nome: "Mouse", preco: 80.5 },
  { id: 3, nome: "Monitor", preco: 999.9 },
]

// Exemplo de carrinho (ids + quantidade)
export const carrinho = [
  { id: 1, qtd: 1 },
  { id: 2, qtd: 2 },
]

// Configurações de negócio
export const TAXA_DESCONTO = 10 // %
export const MOEDA = "BRL"
export const FRETE_FIXO = 25