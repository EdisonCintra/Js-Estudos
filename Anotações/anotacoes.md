

-----
Exemplo de arrow function ( const testeArrow = () => console.log("Isso é um função também") )

push -> adicionar elemento em array pop -> retirar elemento do array

Interpolação const minhaString4 = ' ${minhaStringNova}how are you? `

Math Biblioteca de calculos matemáticos

(15:16)
const hora = horario24.split(":")[0]
const minuto = horario24.split(":")[1]

Separando hora utilizando o comando split, que separa por um parametro e o
atribui a uma variável

unshift -> adicionar em um array

const frutas = ["banana", "kiwi"]
frutas.unshift("uva")

shift -> retirar o que foi adicionado

find -> retorna o primeiro elemento que atender a condição
const numeroPar = numeros.find((numPar) => numPar % 2 === 0 )

filter -> retorna todos os elementos que atendem a condição
const numerosPares = numeros.filter((num) => num % 2 === 0 )



-----------
DOM - Document Object Model

--> Selecionando por ID e Classe

const elemento = document.querySelector("#id")

const elemento = document.querySelector(".classe")

const elemento2 = documento.getElementById("id")

const elemento2 = documento.getElementsByClassName("classe")


--> Manipulando elementos de Texto

const elemento = document.querySelector("#id")

console.log(elemento.textContent) --> verificar texto dentro da variavel criada

elemento.textContent = "Texto mudado"


--> Utilizando um array function e settimeOut

setTimeout(() => {
	elemento.textContent = "Mudei o texto"
},1000)



--> Utilizando Atributos

const link = document.querySelector("a")

link.setAttribute("href", "www.youtube.com")

console.log(link.getAttribute("href"))

console.log(link.hasAttribute("target")) --> verificando se o atributo existe na variavel

link.removeAttribute("target") --> removendo atributo da variavel



--> Manipulação de classes no css

const teste = document.querySelector("#meuId")

teste.classList.add("minhaClasse") --> adicionando uma classe ao elemento

teste.classList.remove("minhaClasse") --> removendo uma classe ao elemento

teste.classList.toggle("minhaClasse") --> se existe ele adiciona a classe, se não ele remove


--> Manipulando o próprio Css

const elemento3 = document.querySelector("#meuId")

elemento3.styles.color = "blue"


--> Navegando entre nós

const elemento4 = document.querySelector("#meuId")

const pai = elemento4.parentNode --> pegando o pai, ou seja elemento pai ou elemento geral que tem outros elementos dentro

console.log(pai)

const primeiroFilho = pai.firstChild; --> pegando o primeiro elemento filho

const ultimoFilho = pai.lastChild; --> pegando o ultimo elemento filho

<img src="../resources/Captura%20de%20tela%202024-01-02%20190234.png" alt="Child">

--> Manipulação de Estrutura do DOM




