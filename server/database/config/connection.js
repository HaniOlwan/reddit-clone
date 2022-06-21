require('dotenv').config();
const { Pool } = require('pg');

let dbURL = '';

const {
  NODE_ENV, DEV_DB_URL, DATABASE_URL, TEST_DB_URL,
} = process.env;

if (NODE_ENV === 'dev') { dbURL = DEV_DB_URL; } else if (NODE_ENV === 'test') { dbURL = TEST_DB_URL; } else if (NODE_ENV === 'production') { dbURL = DATABASE_URL; } else {
  throw new Error('Invalid DB_URL');
}

const options = {
  connectionString: dbURL,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool(options);
