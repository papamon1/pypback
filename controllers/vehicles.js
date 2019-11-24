const Vehicle = require('../models/vehicles');
const passport=require('passport');

exports.getVehicleById = function(req, res) {
    const id = req.body.id;

    Vehicle.findById(id)                        
            .populate('user')      
            .populate('transporte')                          
            .exec((errors, vehicle) => {
                if (errors) {
                return res.status(422).send({errors});
                }

                return res.json(vehicle);
            });
}