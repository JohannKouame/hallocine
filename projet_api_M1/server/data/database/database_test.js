// // const mysql = require('mysql')
 
// // // const UserConnection = mysql.createConnection('D:/Work/school/l3/web/exo/projet/projet1/JoKeys_final/server/data/database/db_jokeys_users.sql')
// // // const ArticleConnection = mysql.createConnection('D:/Work/school/l3/web/exo/projet/projet1/JoKeys_final/server/data/database/db_jokeys_articles.sql')

// // const UserConnection = mysql.createConnection({
// //   host: "localhost",
// //   user: "root",
// //   password: "PasswordMySQL1!",
// //   database: "db_jokeys_users.sql",
// //   port:"3000",
// // })


// // // UserConnection.connect()
// // // ArticleConnection.connect()

// // console.log(">>>>UserConnection :"+UserConnection.connect())
// // // console.log(ArticleConnection.connect())

// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "PasswordMySQL1!",
//     database: "db_jokeys",
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

const express = require("express");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const notesRoutes = require("./routes/notesRoutes");

const optionBd = {
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "db_jokeys",
};

const app = express();

//Extration des données du formulaire
app.use(express.urlencoded({ extended: false }));

//Définition du middleware pur connexion avec la bd
app.use(myConnection(mysql, optionBd, "pool"))