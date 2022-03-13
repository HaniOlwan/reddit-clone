const { Pool } = require('pg');
const { DEV_DB_URL } = require('./../../../config');

// let dbURL = '';

// let { NODE_ENV, DEV_DB_URL, DATABASE_URL, TEST_DB_URL } = process.env;
// console.log(NODE_ENV);

// if (NODE_ENV === 'dev') dbURL = DEV_DB_URL;
// if (NODE_ENV === 'test') dbURL = TEST_DB_URL;
// if (NODE_ENV === 'production') dbURL = DATABASE_URL;
// else {
//   throw new Error('Invalid DB_URL');
// }
const database = {
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  password: 'qwerty',
  database: 'reddit',
};

// const options = {
//   connectionString: DEV_DB_URL,
//   ssl: false,
// };

module.exports = new Pool(database);
