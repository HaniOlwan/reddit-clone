require('dotenv').config();
const { Pool } = require('pg');

const {
  NODE_ENV, DEV_DB_URL, TEST_DB_URL, DATABASE_URL,
} = process.env;

let dbUrl = '';
let sslConnection = false;

if (NODE_ENV === 'test') {
  dbUrl = TEST_DB_URL;
  sslConnection = false;
} else if (NODE_ENV === 'production') {
  dbUrl = DATABASE_URL;
  sslConnection = { rejectUnauthorized: true };
} else if (NODE_ENV === 'dev') {
  dbUrl = DEV_DB_URL;
  sslConnection = false;
} else {
  throw new Error('No environment found');
}
if (!dbUrl) throw new Error('Invalid db url');

const options = {
  connectionString: dbUrl,
  ssl: sslConnection,
};

module.exports = new Pool(options);
