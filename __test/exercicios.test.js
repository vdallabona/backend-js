const Funcoes = require('../Services/Exercicios')
const { describe, it, expect } = require('@jest/globals')

describe('testando a função somar: ', () => {

    it('Somar dois números positivos', () => {
        const resultado = Funcoes.Exercicio1(1, 2)
        expect(resultado).toBe(3)
    })

    it('Somar um número positivo e um negativo', () => {
        const resultado = Funcoes.Exercicio1(3, -2)
        expect(resultado).toBe(1)
    })

    it('Somar um número negativo e um  positivo', () => {
        const resultado = Funcoes.Exercicio1(-1, 2)
        expect(resultado).toBe(1)
    })
    
    it('Somar um número com resultado negativo', () => {
        const resultado = Funcoes.Exercicio1(-4, 2)
        expect(resultado).toBe(-2)
    })

    
    it('Somar um número e um 0', () => {
        const resultado = Funcoes.Exercicio1(0 , 2)
        expect(resultado).toBe(2)
    })
    
    it('Somar um 0 e um número', () => {
        const resultado = Funcoes.Exercicio1(2 , 0)
        expect(resultado).toBe(2)
    })

    it('Somar um número letra', () => {
        const resultado = Funcoes.Exercicio1('a' , 2)
        expect(resultado).toBe('não é um número')
    })
    
})