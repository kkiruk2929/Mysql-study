const mysql = require("mysql");
const sql = require("./sql.js"); //sql 쿼리문이 작성되어 있는 파일

const pool = mysql.createPool({
  //pool 생성
  connectionLimit: 10,
  host: "127.0.0.1",
  port: 3306,
  user: "dev01",
  password: "1234",
  database: "dev",
});

/* 쿼리문 실행하고 결과 반환하는 파일*/
const query = async (alias, values) => {
  return new promise((resolve, reject) =>
    pool.query(sql[alias], values, (error, results) => {
      if (error) {
        console.log(error);
        reject({
          error,
        });
      } else resolve(results);
    })
  );
};

module.exports = {
  query,
};
