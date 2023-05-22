// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2
// }

// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
// function calculaAreaRetangulo(altura, largura) {
//     let areaRetangulo = altura * largura
//     return areaRetangulo

// }

// let altura = Number(prompt("Digite a altura do retângulo"))
// let largura = Number(prompt("Digite a largura do retângulo"))
// console.log(calculaAreaRetangulo(altura, largura))


// EXERCÍCIO 02
// function imprimeIdade(anoAtual, anoNascimento) {
//   let idade = anoAtual - anoNascimento  
//   return idade
  
// }

// let anoAtual = Number(prompt("Digite o ano atual"))
// let anoNascimento = Number(prompt("Digite o ano do seu nascimento"))
// console.log(imprimeIdade(anoAtual, anoNascimento))



// EXERCÍCIO 03
// function calculaIMC(peso, altura) {
//   let imc = peso / (altura * altura)
//   return imc

// }

// let peso = Number(prompt("Digite seu peso"))
// let altura = Number(prompt("Digite seu peso"))
// console.log(calculaIMC(peso, altura))


// EXERCÍCIO 04
// function imprimeInformacoesUsuario(nome, idade, email) {
//   let informacoes = (`Meu nome é ${nome}, tenho ${idade} e o meu email é ${email}`)
//   return informacoes
 
// }

// let nome = prompt("Qual seu nome?")
// let idade = prompt("Qual sua idade?")
// let email = prompt("Qual seu email?")
// console.log(imprimeInformacoesUsuario(nome, idade, email))
// console.log(informacoes)

// EXERCÍCIO 05
// function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
// let cores = [cor1, cor2, cor3]
// return cores
// } 

//   const cor1 = prompt("Qual a sua cor preferida")
//   const cor2 = prompt("Qual sua segunda cor favorita")
//   const cor3 = prompt("Qual sua terceira cor favorita")
//   console.log(imprimeTresCoresFavoritas(cor1, cor2, cor3)) 
//   console.log(cores)
 

// EXERCÍCIO 06
// function retornaStringEmMaiuscula(string) {
//   const retornaStringEmMaiuscula = string.toUpperCase()
//   return retornaStringEmMaiuscula

// }

// const string = prompt("digite uma palavra em letra minuscula")
// console.log(retornaStringEmMaiuscula(string))

// EXERCÍCIO 07
// function calculaIngressosEspetaculo(custo, valorIngresso) {
//   const quantidadeIngressos = custo / valorIngresso
//   return `Para pagar o espetáculo no valor de ${custo} será necessária 
//   a venda de ${quantidadeIngressos} valor de ${valorIngresso}`

// }

// console.log(calculaIngressosEspetaculo(3000, 100))

// EXERCÍCIO 08
// function checaStringsMesmoTamanho(string1, string2) {
//   let check = string1.length === string2.length
//   return check

// }

// console.log(checaStringsMesmoTamanho("oi", "ola"))


// EXERCÍCIO 09
// function retornaPrimeiroElemento(array) {
//   return array[0]
// }

// console.log(retornaPrimeiroElemento([3, 2, 5]))


// EXERCÍCIO 10
// function retornaUltimoElemento(array) {
//   return array[2]
// }

// console.log(retornaUltimoElemento([1, 2, 3]))



// EXERCÍCIO 11
// function trocaPrimeiroEUltimo(array) {
//   const primeiroElemento = array[0]
//   const ultimoElemento = array[4]
//   array[0] = ultimoElemento
//   array[4] = primeiroElemento
 
//   return array

// }

// console.log(trocaPrimeiroEUltimo([1, 2, 3, 4, 5]))


// EXERCÍCIO 12
// function checaIgualdadeDesconsiderandoCase(string1, string2) {
//   let check = string1.toLowerCase() === string2.toLowerCase()
//   return check

// }

// let string1 = prompt("Digite uma palavra")
// let string2 = prompt("Digite outra palavra")

// console.log(checaIgualdadeDesconsiderandoCase(string1, string2))


// EXERCÍCIO 13
// function checaRenovacaoRG() {
//   const idade = anoAtual - anoNascimento
//   const tempoRG = anoAtual - carteiraDeIdentidade

//   if (idade <= 20 || idade === 20)
//     if (tempoRG >= 5 || tempoRG === 5) 
//       console.log(true)
//    else 
//     console.log(false)
  
//     else if(( idade > 20 && idade <= 50) || idade ===50)
//     if (tempoRG >= 10 || tempoRG === 10)
//     console.log(true)
//     else
//     console.log(false)

//     else
//     if(tempoRG >=15)
//     console.log(true)
//     else 
//     console.log(false)


// }

//   const anoAtual = Number(prompt(" Ano atual"))
//   const anoNascimento = Number(prompt("Ano nascimento"))
//   const carteiraDeIdentidade = Number(prompt("Data emissão de identidade"))

// EXERCÍCIO 14
// function checaAnoBissexto(ano) {
//   if (( ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !==0))
//  return true
//  else return false

// }

// console.log(checaAnoBissexto(2023))

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(idade, ensinoMedio, disponibilidade) {
  const maioridade = idade === "sim"
  const medioCompleto = ensinoMedio === "sim"
  const disponibilidadeSim = disponibilidade === "sim"
  const inscricaoOK = maioridade && medioCompleto && disponibilidadeSim
  return inscricaoOK 


}

  const idade = prompt("Você tem mais de 18 anos? ")
  const ensinoMedio = prompt("Possui ensino médio completo? ")
  const disponibilidade = prompt("Disponibilidade para o horário do curso")

  console.log(checaValidadeInscricaoLabenu(idade, ensinoMedio, disponibilidade))
