const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPost = document.getElementById("link-postagem")
const linkMeusContatos = document.getElementById("link-meus-contatos")

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

document.addEventListener("keyup", (e) => {

  if (e.code == "Digit1"){
    navPerfil.style.display = "block"
  } else if (e.code == "Escape"){
    navPerfil.style.display = "none"
  }else if(e.code == "Digit2"){
    linkPost.click()
  }else if(e.code == "Digit3"){
    linkMeusContatos.click()
  }

})


