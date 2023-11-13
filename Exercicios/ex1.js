//ex Olá mundo
console.log("Hello World!")
console.log("   ")


//conversao de string em int
const string = "123"
Number(string)
console.log(string)
console.log("   ")

//array e for
const frase = "Hello World"
console.log(frase.length) //caracteres
console.log("   ")

const arraynome = ["Teste0", "Teste1", "Teste2", "Teste3", "Teste4"]
for (let i =0; i < 5 ; i++){
    console.log(arraynome[i])
}
console.log("   ")


//function, string e math
function converterHorario(horario24){
    const hora = horario24.split(":")[0]
    const minuto = horario24.split(":")[1]

    //false 12%12 = 0 => 12
    const hora12 = hora%12 || 12

    let periodo = "AM"

    if (hora > 12 ){
        periodo = "PM"
    }

    console.log(`${hora12}:${minuto} ${periodo}`)
}

converterHorario("15:16")