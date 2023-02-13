const h1 = document.querySelector("h1")
const input1 = document.getElementById("calculo1")
const input2 = document.getElementById("calculo2")
const btn = document.querySelector("#btnCalcular")
const result = document.querySelector(".resultado")

Math.floor(input1, input2)

function btnOnclick(){
   var resultado = Number(input1.value) + Number(input2.value)
   result.innerHTML = "Tu resultado es " +resultado
}