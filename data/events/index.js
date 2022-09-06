'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getCouriers = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const eventsList = await pool.request().query(sqlQueries.courierList);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getJobs = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        //console.log(sqlQueries.courierJobs+ id);
        const eventsList = await pool.request().query(sqlQueries.courierJobs+ id);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getOneCourier = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        //console.log(sqlQueries.courierJobs+ id);
        const eventsList = await pool.request().query(sqlQueries.courierLocation + `'` + id + `'` );
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getCouriers, getJobs, getOneCourier
}