const{Cars}= require("../models/cars")
const{validationResult}= require("express-validator")
const axios = require("axios")

module.exports= {
    async verCars (req, res) {
        const car = await Cars.find();
        res.status(200).json({car})
    },

    async guardarCars (req, res) {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const carnew = new Cars (req.body)
                await carnew.save()
            res.status(201).json({carnew})
            } else {
                res.status(501).json(err)
            }
            
        } catch (error) {
            res.status(501).json(error)
        }
        
},

async busquedaCars (req, res){
    const car =await Cars.findOne({marca:req.params.marca})
    res.status(200).json({car})
},

async editarCars (req, res){
    try {
        const err= validationResult(req)
        if (err.isEmpty()) {
            await Cars.findOneAndUpdate(req.params.marca,req.body)
            res.status(201).json(req.body)
        } else {
            res.status(501).json(err)
        }
    } catch (error) {
        res.status(501).json(error)
    }
    
},
async eliminarCars(req, res){
    const car= await Cars.findOneAndDelete(req.params.marca)
    res.status(200).json({msg:"auto eliminado",car})
},

async consultaAxios(req, res){
   try {
    const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    res.json({response: respuesta.data, status: respuesta.status})
   } catch (error) {
    res.json({response: error.response.data, status: error.response.status})
   }
    
}

}