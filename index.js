const Funcoes = require('./Exercicios/Exercicio1')

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

app.get('/exercicio5/', (req, res) => {
  const distancia = req.query.distancia
  const resultado = (distancia * 1.60934)
  res.json({ resultado })
})

app.post("/exercicio6/", (req, res) => {
  const num1 = req.body.num1

  var horas = Math.floor((num1 / 60)/60)
  var minutos = Math.floor((num1 - horas * 3600) / 60)
  var segundos = num1 - ((minutos * 60) + (horas * 3600))

  res.status(201).json({ horas: horas, minutos, segundos })
})

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`)
})