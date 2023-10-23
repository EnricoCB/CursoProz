let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

let buttonSubtrair = document.querySelector("#btn-subtrair-produto-01");
let buttonSoma = document.querySelector("#btn-adicionar-produto-01");
let input = document.querySelector("#quantidade-produto-01")

function soma(){
  subtotalInfo.quantidade += 1
  let valor = subtotalInfo.valor * subtotalInfo.quantidade
  input.value = subtotalInfo.quantidade
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = valor
}

function subtrair(){
  if(subtotalInfo.quantidade > 0){
    subtotalInfo.quantidade -= 1
    let valor = subtotalInfo.valor * subtotalInfo.quantidade
    input.value = subtotalInfo.quantidade
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
    valorSubtotal.innerText = valor
  }
}

buttonSoma.addEventListener("click", soma)

buttonSubtrair.addEventListener("click", subtrair)

