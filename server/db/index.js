const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'Hf5Oi7Bnvb',
    user: 'WWS7Tcr3BK',
    passwd: 's3kreee7',
    database: 'WWS7Tcr3BK',
    host: 'remotemysql.com',
    port: '3306'
})

let productsdb = {};

productsdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM products_tbl INNER JOIN price_tbl WHERE price_tbl.id = products_tbl.id', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })

    })
}

module.exports = productsdb;