class ServicesExericios {

    Exercicio1(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('não é um número')
        }
        const resultado = Number((Number(num1) + Number(num2)).toFixed(2))
        return resultado
    }

    Exercicio2(valor, horas) {
        const resultado = Number(valor) * Number(horas)
        return resultado
    }

    Exercicio3(peso1, peso2, peso3, peso4, peso5) {
        const resultado = ((Number(peso1) + Number(peso2) + Number(peso3) + Number(peso4) + Number(peso5)) / 5)
        return resultado
    }

    Exercicio4(temperatura) {
        const resultado = (9 * temperatura + 160) / 5
        return resultado
    }

    Exercicio5(distancia) {
        const resultado = (distancia * 1.60934)
        return resultado
    }

    Exercicio6(num1) {
        var horas = Math.floor((num1 / 60) / 60)
        var minutos = Math.floor((num1 - horas * 3600) / 60)
        var segundos = num1 - ((minutos * 60) + (horas * 3600))
        var resultado = "O tempo convertido é de " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos."
        return resultado
    }

    Exercicio7(num1) {
        var metros = Math.floor(num1 * 1000)
        var centimetros = Math.floor(num1 * 100000) - metros * 100
        var resultado = [];
        resultado[0] = metros
        resultado[1] = centimetros
        return resultado
    }
}

module.exports = new ServicesExericios()