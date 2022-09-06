'use strict';

const eventData = require('../data/events');

const getCouriers = async (req, res, next) => {
    try {
        
        const courierlist = await eventData.getCouriers();
        res.send(courierlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getJobs = async (req, res, next) => {
    try {
        const courierJobs = await eventData.getJobs(req.params.id);
        res.send(courierJobs);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getOneCourier = async (req, res, next) => {
    try {
        const courier = await eventData.getOneCourier(req.params.id);
        res.send(courier);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getCouriers, getJobs, getOneCourier
}