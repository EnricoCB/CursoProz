let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let input = document.querySelector("#quantidade-produto-01");

let subtotalInfo = {

  quantidade: 1,

  valor: 11.66,

};


function updateSubtotal() {
    if (subtotalInfo.quantidade > 1){
        quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
    }else{
        quantidadeSubtotal.innerText = subtotalInfo.quantidade + " item";
    }
    valorSubtotal.innerText = (subtotalInfo.valor * subtotalInfo.quantidade).toFixed(2);

    input.value = subtotalInfo.quantidade;
}

const btn1 = document.getElementById('btn-subtrair-produto-01')

const btn2 = document.getElementById('btn-adicionar-produto-01')

function add() {

  subtotalInfo.quantidade += 1; // Incrementa a quantidade

  updateSubtotal(); // Atualiza o subtotal no DOM

}

function sub() {

  if (subtotalInfo.quantidade > 1) {

    subtotalInfo.quantidade -= 1; // Decrementa a quantidade se for maior que 1

    updateSubtotal(); // Atualiza o subtotal no DOM

  }

}

btn1.addEventListener('click', sub)
btn2.addEventListener('click', add)


// Atualize o subtotal inicial no DOM

updateSubtotal();


