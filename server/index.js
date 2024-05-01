import express from "express";

import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.listen(3002, () => {
  console.log("server is running on port 3002");
});

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "app",
});

app.post("/register", (req, res) => {
  const sentEmail = req.body.Email;
  const sentUserName = req.body.sentUserName;
  const sentPassword = req.body.Password;

  //sql statement to insert user to database

  const SQL = "INSERT INTO Users (email, username, password) VALUES (?,?,?)";

  const Values = [sentEmail, sentUserName, sentPassword];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log("User inserted successfully!");
      res.send({ message: "User added" });
    }
  });
});

app.post("/login", (req, res) => {
  const sentLoginUserName = req.body.LoginUserName;
  const sentLoginPassword = req.body.LoginPassword;

  //sql statement to insert user to database

  const SQL = "SELECT * FROM users WHERE username = ? && password =?";
  const Values = [sentLoginUserName, sentLoginPassword];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send({ error: err });
    }
    if (results.length > 0) {
      res.send(results);
    } else {
      res.send({ message: `Credentials Don't match!` });
    }
  });
});
