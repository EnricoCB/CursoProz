// - O link dentro do texto do primeiro post

// - A palavra em negrito dentro do texto do segundo post

// - O input de nome do formulário

// - Os links da lista de redes no final da página

// - Os links da navegação (só os links, não os elementos de lista)

// - Os 4 "Autor:" e "Data:" em negrito nos dois posts

document.addEventListener("DOMContentLoaded", (event) => {
    let linkTexto = document.querySelector("#post01 .post-texto a")
    let negritoTexto = document.querySelector("#post02 .post-texto strong")
    let nomeInput = document.querySelector("#nome")
    let listaRedesFinal = document.querySelector("footer .lista_redes")
    let linksNavegacao = document.querySelectorAll("elementos_nav a")
    console.log(linkTexto.innerText)
    console.log(negritoTexto.innerText)
    console.log(nomeInput)
    console.log(listaRedesFinal.innerText)
    console.log(linksNavegacao)
  });
