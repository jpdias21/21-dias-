let entredaDoUsuarioNome= prompt("Insira seu nome")

console.log(entredaDoUsuarioNome)

let entredaDoUsuarioIdade = prompt("Insira sua idade")

let anoAtual = 2023
let idade = anoAtual - parseInt(entredaDoUsuarioIdade);

console.log( entredaDoUsuarioIdade)


let entredaDoUsuarioAltura = prompt("Insira sua Altura sem virgula")

console.log(entredaDoUsuarioAltura)

let entredaDoUsuarioPeso = prompt("Insira seu Peso")
let entradaDoUsuariaPesoEmInt = parseInt(entredaDoUsuarioPeso)

console.log(entredaDoUsuarioPeso)

//Calculo de imc
let imc = entredaDoUsuarioAltura / (parseFloat(entredaDoUsuarioPeso) * parseFloat(entredaDoUsuarioPeso)) 


// mensagem 

console.log(`Olá ${entredaDoUsuarioNome}, você tem ${entredaDoUsuarioIdade} anos de idade, nasceu em ${entredaDoUsuarioIdade - anoAtual}, 
você tem ${entredaDoUsuarioAltura} de altura, e pesa ${entredaDoUsuarioPeso}kg e seuIMC é ${imc.toFixed(2)} Kg/m2 `)


