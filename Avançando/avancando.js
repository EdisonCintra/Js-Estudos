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


//manipulação de string
const frase = " Hello, world! "


const palavras = frase.trim().split(" ")
console.log(frase)
console.log(palavras)

const frase2 = "JavaScrpit é bom!"
console.log(frase2.startsWith("Java"))
console.log(frase2.endsWith("!"))

console.log("        ")


//exceções e tratamentos de erros
const idade = 15;

// if (idade < 18){
//     throw  new Error("Você deve ter pelo menos 18 anos!")
// }


//try catch
try{

    const idade = 20
    if (idade < 18){
        throw new Error("Você deve ter pelo menos 18 anos!")
    }
}catch (error){
    console.log(error.message)
}

console.log("Continuando o programa...")


//callback => funcao

function cumprimentar(nome, callback){
    console.log("Hello, "+nome)
    callback()
}


function mostrarSaudacao(){
    console.log("How are you?")
}


cumprimentar("Edison",mostrarSaudacao)

//Finalmente, a função cumprimentar é chamada com os argumentos "Edison" e mostrarSaudacao.
// Isso significa que a saudação "Hello, Edison" será exibida, e em seguida,
// a função mostrarSaudacao será chamada, exibindo "How are you?" no console.

//Resumindo => função passa como parametro

// settimeout => dps de um tempo executa algo

function mostrarMensagem(){
    console.log("Essa mensagem será exibida após 3 segundos.")
}

//1000ms = 1s
//setTimeout(mostrarMensagem,3000)

// setTimeout(function (){
//     console.log("Oi")
// },1000)


console.log("        ")


//Promises
const promessa = new Promise((resolve, reject) => {

    const condicao = true //true ou false muda o resultado


    if (condicao){
        resolve("A condição é verdadeira")
    }
    else{
        reject("A condição é falsa")
    }

})

promessa.then((mensagem) => {
    console.log(mensagem)
})//then -> executa a promessa
    .catch((erro) => {
        console.log(erro)
    })

//erro se não rodar a promisse


//all promisses

const promise1 = Promise.resolve(3) //para resolver a promise1 imediatamente com o 3 como parametro
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, "Testando")
})

Promise.all([promise1,promise2]).then((valores)=> console.log(valores))


//Async Await
//função que ocorre com o andar do código
//não precisar ser executada para o código continuar

async function obterValor(){

    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Valor obtido"), 2000)

    })

    const valor = await promessa //esperar a resolução da promisse


    // Utilização da palavra-chave await para esperar a resolução da Promise antes de prosseguir.
    // O código fica em espera durante esses 2 segundos.

    console.log(valor)

}

obterValor()


//try and catch com Async Await
async function obterValorComErro(){
    try {
        const promessa = new Promise((resolve, reject) => {
            setTimeout(() => reject("Valor com erro"), 2000)

        })

        const valor = await promessa //esperar a resolução da promisse

        console.log(valor)
    }
    catch (error){
        console.log(error.message)
    }

}

obterValorComErro()

//JSON (JavaScript Object Notation)

console.log("2;05;32")


