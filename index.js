const Funcoes = require('./Services/Exercicios') //javascript faz dessa variável em array
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.post("/Exercicio1/", (req, res) => {
  const num1 = req.body.num1
  const num2 = req.body.num2
  const resultado = Funcoes.Exercicio1(num1, num2)
  res.status(201).json({ resultado: resultado })
})

app.post('/exercicio2/', (req, res) => {
  const valor = req.body.valor
  const horas = req.body.horas
  const resultado = Funcoes.Exercicio2(valor, horas)
  res.status(201).json({ resultado: resultado })
})

app.post('/exercicio3/', (req, res) => {
  const peso1 = req.body.peso1
  const peso2 = req.body.peso2
  const peso3 = req.body.peso3
  const peso4 = req.body.peso4
  const peso5 = req.body.peso5
  const resultado = Funcoes.Exercicio3(peso1, peso2, peso3, peso4, peso5)
  res.status(201).json({ resultado: resultado })
})

app.post('/exercicio4/', (req, res) => {
  const temperatura = req.body.temperatura
  const resultado = Funcoes.Exercicio4(temperatura)
  res.status(201).json({ resultado: resultado })
})

app.post('/exercicio5/', (req, res) => {
  const distancia = req.body.distancia
  const resultado = Funcoes.Exercicio5(distancia)
  res.status(201).json({ resultado: resultado })
})

app.post("/exercicio6/", (req, res) => {
  const num1 = req.body.num1
  const resultado = Funcoes.Exercicio6(num1)
  res.status(201).json({ resultado: resultado })
})

app.post("/exercicio7/", (req, res) => {
  const num1 = req.body.num1
  const resultado = Funcoes.Exercicio7(num1)
  res.status(201).json({
    metros: resultado[0] ,
    centimetros: resultado[1]
  })
})

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`)
})