const { Pool } = require("pg");

const dataBase = {};

dataBase.configDB = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  password: "13759",
  database: "examen",
  port: 5432,
});

dataBase.consultDB = async (queryScript) => {
  const connect = await dataBase.configDB.connect();
  const result = await connect.query(queryScript);
  const data = result.rows;
  connect.end();
  return data;
};

module.exports = dataBase;