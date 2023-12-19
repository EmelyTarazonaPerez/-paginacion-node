const mysql = require('mysql2');

import config from './../config'

const connection = mysql.createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
});

module.exports = connection;