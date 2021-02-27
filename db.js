const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "J.mwasho0399",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;