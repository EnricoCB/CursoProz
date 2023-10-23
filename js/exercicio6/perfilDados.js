const voltar = document.getElementById("voltar")

document.addEventListener("keyup",(e) =>{
    console.log(e.code)
    if (e.code == "Backspace"){
        voltar.click()
    }

})