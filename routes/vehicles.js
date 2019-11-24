const express = require('express');
const router = express.Router();

const VehiclesCtrl = require('../controllers/vehicles');
const AuthCtrl = require('../controllers/auth');

// router.get('', UsersCtrl.getUsers);
 router.get('/getVehicleById',  VehiclesCtrl.getVehicleById);

// router.post('/register', UsersCtrl.register)
// router.post('/login', UsersCtrl.login)
// router.post('/logout', UsersCtrl.logout)


module.exports = router;
