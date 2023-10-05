const mysql = require("mysql2/promise");

const config = {
  db: {
    host: "PcMiranha",
    user: "sa",
    password: "6966",
    database: "estudos",
  }
};

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);

  const [results] = await connection.execute(sql, params);

  connection.end();

  return results;
}

module.exports = { 
  query 
};