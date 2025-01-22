let Bicicleta = require("../../models/Bicicleta");

exports.bicicleta_list = function (req, res) {
    // Responde con un código de estado 200 (OK) y un objeto JSON que contiene todas las bicicletas
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
};