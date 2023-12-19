const connection = require('../data')

class ServiceProduct {
    async post(body) {
        const { favorite, state } = body;
        const arrayClassifications = body.classifications;
        const classifications = this.#queryWhereClassifications(arrayClassifications);
        const pool = connection.promise();
        const [rows, fiels] = await pool.query(
            `SELECT buyPrice, detail, erp, name, price, priceRecomended, priceType, bannerResponse 
            FROM products, classifications  
            WHERE products.classification_id = classifications.id 
                AND state='${state}'
                AND favorite=${favorite}
                AND (${classifications})`);

        return rows;
    }

    async getPagination(page, classifications) {
        let query = `SELECT detail, name, price, image, nameClassification 
            FROM products, classifications 
            WHERE products.classification_id = classifications.id`;

        if (classifications) {
            query += ` AND (${this.#queryWhereClassifications(classifications)})`;
        }

        if (page) {
            const limit = (page * 10);
            const start = limit - 10;
            const end = limit - 1;

            query += ` LIMIT ${start}, ${end}`;
        }

        console.log(query);
        const pool = connection.promise();
        const [rows, fiels] = await pool.query(query);
        console.log(rows.length);

        return rows;
    }

    #queryWhereClassifications(classifications) {
        return classifications.reduce(
            (query, classification, index) => {
                const isOr = (index + 1) < classifications.length ? ' OR ' : '';
                return query + 
                    `nameClassification='${classification}'${isOr}`
            },
            '',
          );
    }
}

module.exports = ServiceProduct
