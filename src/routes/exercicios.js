const express = require('express');
const ControllersExercicios = require('../controllers/exercicios')

const router = express.Router()

router.post("/Exercicio1/", ControllersExercicios.Exercicio1)

router.post('/Exercicio2/', ControllersExercicios.Exercicio2)

router.post('/Exercicio3/', ControllersExercicios.Exercicio3)

router.post('/Exercicio4/', ControllersExercicios.Exercicio4)

router.post('/Exercicio5/', ControllersExercicios.Exercicio5)

router.post("/Exercicio6/", ControllersExercicios.Exercicio6)

router.post("/Exercicio7/", ControllersExercicios.Exercicio7)

router.post("/Exercicioc8/", ControllersExercicios.Exercicio8)

module.exports = router;
