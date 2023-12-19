const connection = require('../data')

class ServiceClassifications {
    
    async get () {
        const pool = connection.promise();
        const [rows, fiels] = await pool.query(`SELECT * FROM classifications`);

        return rows;
    }

}

module.exports = ServiceClassifications
