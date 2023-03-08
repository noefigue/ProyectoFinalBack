const apiController = require("../controllers/apiController")

const validarVersion=(req,res,next) => {
    if (req.body.version>=1886) {
        next()
    } else {
        res.status(501).json({msg:"no se puede ingresar un año anterior a 1886"})
    }
}

module.exports={validarVersion}