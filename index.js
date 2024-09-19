const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.post("/exercicio1/", (req, res) => {
  const num1 = req.body.num1
  const num2 = req.body.num2
  const resultado = Number(num1) + Number(num2)

  //muda o status, pesquisar mais sobre 👍
  res.status(201).json({ resultado: resultado })
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