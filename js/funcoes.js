// Funções puras e reutilizáveis

export function encontrarProdutoPorId(lista, id) {
  return lista.find((p) => p.id === id) ?? null
}

export function totalItem(preco, qtd) {
  return preco * qtd
}

export function aplicarDesconto(valor, taxaPercentual) {
  return valor - valor * (taxaPercentual / 100)
}

export function totalCarrinho(produtos, carrinho) {
  return carrinho.reduce((acc, item) => {
    const prod = encontrarProdutoPorId(produtos, item.id)
    if (!prod) return acc
    return acc + totalItem(prod.preco, item.qtd)
  }, 0)
}

export function formatarBRL(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

export function valorDoFrete(totalCompra) {
  const FRETE_FIXO = 25 
    if (totalCompra > 200) {return 0 
  } else {
    return FRETE_FIXO
  }
}