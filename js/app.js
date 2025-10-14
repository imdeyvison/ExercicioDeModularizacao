// Orquestra tudo: importa dados e funções, calcula e exibe
import { produtos, carrinho, TAXA_DESCONTO } from "./dados.js"
import { totalCarrinho, aplicarDesconto, formatarBRL, valorDoFrete } from "./funcoes.js"

// 1) Calcula total bruto
const totalBruto = totalCarrinho(produtos, carrinho)

// 2) Aplica desconto
const totalComDesconto = aplicarDesconto(totalBruto, TAXA_DESCONTO)

// 3) Mostra no console (útil em aula)
console.log("Total bruto:", formatarBRL(totalBruto))
console.log(
  `Desconto (${TAXA_DESCONTO}%):`,
  formatarBRL(totalBruto - totalComDesconto)
)
console.log("Total final:", formatarBRL(totalComDesconto))

// 4) (Opcional) Atualiza a página, se existir HTML com esses IDs
const elBruto = document.getElementById("total-bruto")
const elFinal = document.getElementById("total-final")
const elDesconto = document.getElementById("total-desconto")
const elFrete = document.getElementById("total-frete")

if (elBruto && elFinal && elDesconto && elFrete) {
  elBruto.textContent = formatarBRL(totalBruto)
  elFinal.textContent = formatarBRL(totalComDesconto)
  elDesconto.textContent = formatarBRL(totalBruto - totalComDesconto)
  elFrete.textContent = formatarBRL(totalComDesconto)
}

// 4) Calcular o valor do frete
const frete =  valorDoFrete(totalComDesconto)