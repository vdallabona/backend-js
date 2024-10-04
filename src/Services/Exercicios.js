class ServicesExericios {

    Exercicio1(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Ambos os valores devem ser números')
        }
        const resultado = Number((Number(num1) + Number(num2)).toFixed(2))
        return resultado
    }

    Exercicio2(valor, horas) {
        if (isNaN(valor) || isNaN(horas)) {
            throw new Error('Ambos os valores devem ser números')
        }
        const resultado = Number(valor) * Number(horas)
        return resultado
    }

    Exercicio3(peso1, peso2, peso3, peso4, peso5) {
        if (isNaN(peso1) || isNaN(peso2) || isNaN(peso3) || isNaN(peso4) || isNaN(peso5)) {
            throw new Error('Todos os valores devem ser números')
        }
        const resultado = ((Number(peso1) + Number(peso2) + Number(peso3) + Number(peso4) + Number(peso5)) / 5)
        return resultado
    }

    Exercicio4(temperatura) {
        if (isNaN(temperatura)) {
            throw new Error('A temperatura deve estar escrita de maneira numérica. Lembre de usar o . para serapar decimais')
        }
        const resultado = (9 * temperatura + 160) / 5
        return resultado
    }

    Exercicio5(distancia) {
        if (isNaN(distancia)) {
            throw new Error('A distância deve estar escrita de maneira numérica. Lembre de usar o . para serapar decimais')
        }
        const resultado = (distancia * 1.60934)
        return resultado
    }

    Exercicio6(num1) {
        if (isNaN(num1)) {
            throw new Error('Os segundos devem estar escrito de maneira numérica.')
        }
        var horas = Math.floor(num1 / 3600)
        var minutos = Math.floor((num1 % 3600) / 60)
        var segundos = num1 % 60
        var resultado = num1 + " segundos equivalem à " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos."
        return resultado
    }

    Exercicio7(num1) {
        if (isNaN(num1)) {
            throw new Error('Os kilômetros devem estar escrito de maneira numérica.')
        }
        var km = Math.floor(num1 * 1)
        var metros = Math.floor((num1 - km) * 1000)
        var centimetros = Math.ceil(((num1 - km) * 1000 - metros) * 100)
        var resultado = [];
        resultado[0] = km
        resultado[1] = metros
        resultado[2] = centimetros
        return resultado
    }

    Exercicio8(num1) {
        if (isNaN(num1)) {
            throw new Error('O número devem estar escrito de maneira numérica.')
        }
        var tabuada = [];
        for (var i = 0; i < 11; i++) {
            tabuada[i - 1] = num1 * i;
        }
        var resultado = "| Vezes 1: " + tabuada[0] + " | Vezes 2: " + tabuada[1] + " | Vezes 3: " + tabuada[2] + " | Vezes 4: " + tabuada[3] + " | Vezes 5: " + tabuada[4] + " | Vezes 6: " + tabuada[5] + " | Vezes 7: " + tabuada[6] + " | Vezes 8: " + tabuada[7] + " | Vezes 9: " + tabuada[8] + " | Vezes 10: " + tabuada[9]
        return resultado;
    }
}

module.exports = new ServicesExericios()