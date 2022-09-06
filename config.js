'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    //port: 1444,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: '82.141.200.201',
        //server: '169.254.255.92',
        database: 'hqSameDay-Wheels',
        user: 'HQSoftware',
        password: 'zebra',
        //port: 54108,
        port:1433,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        },
    },
};