function Exercicio1(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        return 'não é um número'
    }
    const resultado = Number(num1) + Number(num2)
    return resultado
}

function Exercicio2(valor, horas){
    const resultado = Number(valor) * Number(horas)
    return resultado
}

function Exercicio3(peso1, peso2, peso3, peso4, peso5){
    const resultado = ((Number(peso1) + Number(peso2) + Number(peso3) + Number(peso4) + Number(peso5))/5)
    return resultado
}

function Exercicio4(temperatura){
    const resultado = (9*temperatura+160)/5
    return resultado
}

function Exercicio5(distancia){
    const resultado = (distancia * 1.60934)
    return resultado
}

function Exercicio6(num1){
    var horas = Math.floor((num1 / 60)/60)
    var minutos = Math.floor((num1 - horas * 3600) / 60)
    var segundos = num1 - ((minutos * 60) + (horas * 3600))
    var resultado = "O tempo convertido é de " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos."
    return resultado
}

function Exercicio7(num1){
    var metros = Math.floor(num1 * 1000)
    var centimetros = Math.floor(num1 * 100000) - metros * 100
    var resultado = [];
    resultado[0] = metros
    resultado[1] = centimetros
    return resultado
}

module.exports = { Exercicio1, Exercicio2, Exercicio3, Exercicio4, Exercicio5, Exercicio6, Exercicio7 }