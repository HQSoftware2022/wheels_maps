'use strict';

const express = require('express');
const eventControl = require('../controllers/eventController');
const router = express.Router();

router.get('/couriers', eventControl.getCouriers);
router.get('/jobs/:id', eventControl.getJobs);
router.get('/couriers/:id', eventControl.getOneCourier);



module.exports = {
    routes: router
}