const express = require('express');
const ControllersExericios = require('../controllers/exercicios')

const router = express.Router()

router.post("/Exercicio1/", ControllersExericios.Exercicio1)

router.post('/Exercicio2/', ControllersExericios.Exercicio2)

router.post('/Exercicio3/', ControllersExericios.Exercicio3)

router.post('/Exercicio4/', ControllersExericios.Exercicio4)

router.post('/Exercicio5/', ControllersExericios.Exercicio5)

router.post("/Exercicio6/", ControllersExericios.Exercicio6)

router.post("/Exercicio7/", ControllersExericios.Exercicio7)

router.post("/Exercicio8/", ControllersExericios.Exercicio8)

module.exports = router;