//manipulacao de array

const frutas = ["banana", "kiwi"]

frutas.unshift("uva")
console.log(frutas)
console.log("     ")


frutas.shift()
console.log(frutas)
console.log("      ")


//map, filter, reduce -> arrow function

const numeros = [1,2,3,4,5,6]

//const numeroPar = numeros.find((numPar) => console.log(numPar))

//find so retorna o primeiro numero do criterio
const numeroPar = numeros.find((numPar) => numPar % 2 === 0 )

console.log(numeroPar)
console.log("       ")

//const numeroPar = numeros.find((numPar) => numPar % 2 === 0 )
//numPar armazena cada numero do array que passar na condição da função
//find pega apenas o primeiro item


//pegando todos os valores que correspondem a condição do arrow function
const numerosPares = numeros.filter((num) => num % 2 === 0 )
console.log(numerosPares)

console.log("        ")
console.log("Parei em 1:41:17 no video!")