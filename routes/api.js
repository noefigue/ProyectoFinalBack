const express= require('express');
const apiController = require('../controllers/apiController');
const router= express.Router();
const {validar}= require ('../milddware/validar')
const {check}= require("express-validator")
const {validarVersion}= require("../milddware/validarVersion")


router.get("/ver", apiController.verCars)
router.get("/buscar/:marca",validar,apiController.busquedaCars)
router.post("/crear",validarVersion,[
    check("marca").not().isEmpty().withMessage("el campo nombre es obligatorio"),
    check("color").not().isEmpty().withMessage("el campo color es obligatorio"),
    check("version").not().isEmpty().withMessage("el campo version es obligatorio"),
    check("precio").not().isEmpty().withMessage("el campo precio es obligatorio")
],apiController.guardarCars)
router.put("/editar/:marca",validar,validarVersion,[
    check("marca").not().isEmpty().withMessage("el campo nombre es obligatorio para modificar"),
    check("color").not().isEmpty().withMessage("el campo color es obligatorio para modificar"),
    check("version").not().isEmpty().withMessage("el campo version es obligatorio para modificar"),
    check("precio").not().isEmpty().withMessage("el campo precio es obligatorio para modificar")
],apiController.editarCars)
router.delete("/eliminar/:marca", apiController.eliminarCars)
router.get("/poke",apiController.consultaAxios)



module.exports = router