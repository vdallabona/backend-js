const express = require('express')
const app = express()
const port = 3000

app.get('/exercicio1/', (req, res) => {
  const num1 = req.query.num1
  const num2 = req.query.num2
  const resultado = Number(num1) + Number(num2)
  res.json({ resultado })
})

app.get('/exercicio2/', (req, res) => {
  const valor = req.query.valor
  const horas = req.query.horas
  const resultado = valor * horas
  res.json({ resultado })
})

app.get('/exercicio3/', (req, res) => {
  const peso1 = req.query.peso1
  const peso2 = req.query.peso2
  const peso3 = req.query.peso3
  const peso4 = req.query.peso4
  const peso5 = req.query.peso5
  const resultado = ((Number(peso1) + Number(peso2) + Number(peso3) + Number(peso4) + Number(peso5))/5)
  res.json({ resultado })
})

app.get('/exercicio4/', (req, res) => {
  const temperatura = req.query.temperatura
  const resultado = (9*temperatura+160)/5
  res.json({ resultado })
})

app.get('/exercicio5/', (req, res) => {
  const distancia = req.query.distancia
  const resultado = (distancia * 1.60934)
  res.json({ resultado })
})

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`)
})