const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Lee variables de entorno del archivo .env

const DB = require('../database/conexion.js')

class Servidor {
  constructor() {
    this.app = express();
    this.puerto = process.env.EXPRESS_PORT;
    this.rutaApi = '/api';

    this.middlewares();
    this.routes();
    this.conection()
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public')); // Crea una ruta en la carp. Public p/server web.
  }
  routes() {
    this.app.use(this.rutaApi, require('../routes/api.routes.js'));
  }
  conection(){
    DB.connect(error => {
      if (error) {
        console.log(error);
      } else {
        console.log('Conectado a base de datos');
      }
    })
  }
  listen() {
    this.app.listen(this.puerto, () => {
      console.log(`Servidor Web en: http://localhost:${this.puerto}`);
      console.log(`Api en: http://localhost:${this.puerto}${this.rutaApi}`);
    });
  }
}

module.exports = Servidor;