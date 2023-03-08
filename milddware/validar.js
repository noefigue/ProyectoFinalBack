const {Cars} = require("../models/cars")
const validar = async (req, res, next)=>{
    try {
        const machine = await Cars.findOne({marca: req.params.marca});
        if (machine !== null) {
            next();
        } else {
            res.status(404).json({msg:"marca invalida"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
    
}

module.exports= {validar}