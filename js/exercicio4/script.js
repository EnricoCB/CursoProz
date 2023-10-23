const h2element = document.querySelector("h2");
h2element.style.color = "blue"
h2element.style.fontSize = "24px"

const input = document.querySelectorAll("input")
input[0].classList.toggle("correct")
input[1].classList.toggle("error")


const button = document.querySelector("button")
button.style.margin = "0 auto"

const paragrafo = document.querySelectorAll(".error-text")
console.log(paragrafo)
paragrafo[1].classList.toggle("visible")
