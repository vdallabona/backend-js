const ServicesExericios = require('../Services/Exercicios')

class ControllersExericios {

    Exercicio1(req, res) {
        try {
            const resultado = ServicesExericios.Exercicio1(req.body.num1, req.body.num2)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }

    Exercicio2(req, res){
        const resultado = Funcoes.Exercicio2(req.body.valor, req.body.horas)
        res.status(201).json({ resultado: resultado })
    }

    Exercicio3(req, res){
        const resultado = Funcoes.Exercicio3(req.body.peso1, req.body.peso2, req.body.peso3, req.body.peso4, req.body.peso5)
        res.status(201).json({ resultado: resultado })
    }

    Exercicio4(req, res){
        const resultado = Funcoes.Exercicio4(req.body.temperatura)
        res.status(201).json({ resultado: resultado })
    }

    Exercicio5(req, res){
        const resultado = Funcoes.Exercicio5(req.body.distancia)
        res.status(201).json({ resultado: resultado })
    }

    Exercicio6(req, res){
        const resultado = Funcoes.Exercicio6(req.body.num1)
        res.status(201).json({ resultado: resultado })
    }

    Exercicio7(req, res){
        const resultado = Funcoes.Exercicio7(req.body.num1)
        res.status(201).json({
            metros: resultado[0],
            centimetros: resultado[1]
        })
    }

}

module.exports = new ControllersExericios()