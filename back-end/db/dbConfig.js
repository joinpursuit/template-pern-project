// http://vitaly-t.github.io/pg-promise/module-pg-promise.html
const pgp = require("pg-promise")();
require("dotenv").config();

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } =
  process.env;
// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
 // this key value is only required for heroku deployment
//       ssl: {
//         rejectUnauthorized: false,
//       },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
      // password: PG_PASSWORD,
    };

const db = pgp(cn);

console.log('Postgres connection', cn);
module.exports = db;
