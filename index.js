const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connection");
const response = require("./response");

// Routes / URL / Endpoint
app.use(bodyParser.json());

// Get Mahasiswa All
app.get("/mahasiswa", (req, res) => {
  const sql = "SELECT * FROM mahasiswa";
  db.query(sql, (err, fields) => {
    if (err) throw err;
    response(200, fields, "Success Get", res);
  });
});

// Get Mahasiswa By Params
app.get("/mahasiswa/:nim", (req, res) => {
  const params = req.params;
  const sql = `SELECT * FROM mahasiswa WHERE nim = ${params.nim}`;
  db.query(sql, (err, fields) => {
    if (err) throw err;
    response(200, fields, "Success Get", res);
  });
});

app.post("/mahasiswa", (req, res) => {
  const { nim, fullname, grade, address } = req.body;
  const sql = `INSERT INTO mahasiswa (nim, fullname, grade, address) VALUES (${nim}, '${fullname}', '${grade}', '${address}')`;
  db.query(sql, (err, fields) => {
    if (err) response(500, "Invalid", "Error", res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        id: fields.insertId,
      };
      response(200, data, "Success Add", res);
    }
  });
});

app.put("/mahasiswa", (req, res) => {
  const { nim, fullname, grade, address } = req.body;
  const sql = `UPDATE mahasiswa SET fullname = '${fullname}', grade = '${grade}', address = '${address}' WHERE nim = ${nim}`;
  db.query(sql, (err, fields) => {
    if (err) response(500, "Invalid", "Error", res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        message: fields.message,
      };
      response(200, data, "Success Update", res);
    } else {
      response(404, "User Not Found", "Error", res);
    }
  });
});
app.delete("/mahasiswa", (req, res) => {
  const { nim } = req.body;
  const sql = `DELETE FROM mahasiswa WHERE nim = ${nim}`;
  db.query(sql, (err, fields) => {
    if (err) response(500, "Invalid", "Error", res);
    if (fields?.affectedRows) {
      const data = {
        isDeleted: fields.affectedRows,
      };
      response(200, data, "Success Delete", res);
    } else {
      response(404, "User Not Found", "Error", res);
    }
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
