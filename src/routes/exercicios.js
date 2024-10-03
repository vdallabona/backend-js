const express = require('express');
const ControllersExericios = require('../controllers/exercicios')

const router = express.Router()

router.post("/Exercicio1/", ControllersExericios.Exercicio1)

router.post('/exercicio2/', ControllersExericios.Exercicio2)

router.post('/exercicio3/', ControllersExericios.Exercicio3)

router.post('/exercicio4/', ControllersExericios.Exercicio4)

router.post('/exercicio5/', ControllersExericios.Exercicio5)

router.post("/exercicio6/", ControllersExericios.Exercicio6)

router.post("/exercicio7/", ControllersExericios.Exercicio7)

module.exports = router;