import express from "express";
import mysql from "mysql2";
import mongoose from "mongoose";


const app = express();

app.use(express.json());


//conexion a mariadb
app.get("/check-mariadb-connection", (req, res) => {

  //datos de conexion
  const connection = mysql.createConnection({
    host: "mariadb",
    user: "root",
    password: "mypassword",
    port: 3306,
    database: "test",
  });


  //creando la conexion y controlando errores
  connection.connect((error) => {
    if (error) {
      console.error("Error al conectar a la base de datos:", error);
      res
        .status(500)
        .json({ error: "Error al conectar a la base de datos de MariaDB" });
    } else {
      res.json({ msg: "Conexión exitosa a la base de datos de MariaDB" });
    }
  });
});


//conexion a mongodb
app.get("/check-mongodb-connection", (req, res) => {
  //url de mongodb
  const url = "mongodb://mongodb:27017/test";


  //creando la conexion y controlando errores
  mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
    res.json({ msg: "Conexión exitosa a la base de datos de MongoDB" });
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB:", err);
    res
      .status(500)
      .json({ error: "Error al conectar a la base de datos de MongoDB" });
  });
});


//se inicializa el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor express iniciado en el puerto 3000");
});
