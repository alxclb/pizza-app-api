const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'WWS7',
    passwd: '',
    database: 'WWS7',
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