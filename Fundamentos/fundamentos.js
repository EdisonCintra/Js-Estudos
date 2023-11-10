//string
var letra = "Hello World";
console.log("//////")


//number
var numero = 10;
console.log("//////")


//booleano
var bool = true;
var booll = false;
console.log("//////")


//print
console.log(letra);
console.log(numero);
console.log(bool);
console.log(booll);
console.log("//////")


//saber o tipo de variavel
console.log(typeof numero)
console.log("//////")


//variavel nula
var meuNull= null;
console.log(meuNull)
console.log("//////")


//array
var meuArray = [numero];
console.log(meuArray)
console.log("//////")


//variavel undefined
var meuUndefined = undefined;
console.log(meuUndefined)
console.log("//////")


//variavel objeto
var objeto = {}
console.log("//////")


//definições
console.log("//////")
console.log(typeof meuUndefined)
console.log(typeof meuArray)
console.log(typeof objeto)
console.log("//////")



//redeclaracao de variaveis
var numeroVar = 5;
numeroVar = 10; // reatribuição permitida
var numeroVar = 15; // redeclaração permitida

let numeroLet = 5;
numeroLet = 10; // reatribuição permitida
// let numeroLet = 15; // erro, redeclaração não permitida
console.log("//////")




//escopo bloco
function exemploVarLet() {
    if (true) {
        var x = 10; // visível em toda a função
        let y = 20; // visível apenas dentro deste bloco
    }
    console.log(x); // 10
    // console.log(y); // erro, y não está definido aqui
}
console.log("//////")


//bloco aninhado
function exemploBlocoAninhado() {
    let externa = 5;

    if (true) {
        let interna = 10;
        console.log(externa); // 5
        console.log(interna); // 10
    }

    // console.log(interna); // erro, interna não está definida aqui
}
console.log("//////")



//const
const l = 13;
console.log(l)
console.log("//////")



//comparacao de tipo de dado
console.log(5 === "5")
console.log(5 !== "5")
console.log("//////")


//operado logicos
//AND &&
//OR ||
console.log(5>4 && 3>2)
console.log(9>10 && 3>2)
console.log(5>4 && 3>2)
console.log(6<4 && 3>2)
console.log("//////")


//conversao de tipos
const meuNumero = "1"
console.log(meuNumero)
console.log(typeof meuNumero)

const meuNumeroConvertido = Number(meuNumero)
console.log(meuNumeroConvertido)
console.log(typeof meuNumeroConvertido)
console.log("//////")


//Switch

const fruta = "Banana"

switch (fruta){
    case "Banana":
        console.log("Banana é a fruta!");
        break;
    case "Maça":
        console.log("Maça é a fruta!");
        break;
    default:
        console.log("Não é nenhuma das opções");
}


//Laços de Repetição
//contador, condição de limite, incremento

for (let i = 0; i<5 ; i++){

    console.log(i+1)

}


console.log("//////////")

let i = 0

while(i<5){
    i++
    console.log(i)
}


console.log("//////////")


let j = 0

do {
    j++
    console.log("O valor de j é "+j)
}while (j<5)


console.log("//////////")
