const { query } = require('../database/conexion.js');
const DB = require('../database/conexion.js');

const getArticulos = (req, res) => {
  const sentenciaSQL = 'SELECT * FROM articulos';
  DB.query(sentenciaSQL, (error, resultado) => {
    if (error) {
      console.log(error);
    } else {
      res.json({
        resultado
      });
    }
  });
};

const postArticulos = (req, res) => {
  const { nombre, precio } = req.body;
  const sentenciaSQL = 'INSERT INTO articulos SET ?';
  const objeto = {
    nombre: nombre,
    precio: precio
  };
  DB.query(sentenciaSQL, [objeto], (error, resultado) => {
    if (error) {
      console.log(error);
    } else {
      res.json({
        resultado
      });
    }
  });
};

const putArticulo = (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  const sentenciaSQL = 'UPDATE articulos SET nombre = ?, precio = ? WHERE id = ?';
  DB.query(sentenciaSQL, [nombre, precio, id], (error, resultado) => {
    if (error) {
      console.log(error);
    } else {
      res.json({
        mensaje: 'Se modifico',
        resultado
      });
    }
  });
};

const deleteArticulo = (req, res) => {
  const { id } = req.params;

  const sentenciaSQL1 = 'SELECT * FROM articulos WHERE id = ?';
  DB.query(sentenciaSQL1, [id], (error, respuesta) => {
    if (error) { // Error no es que no existe, es que cagó la conexion
      console.log(error);
    } else {
      if (respuesta.length < 1) {
        return res.status(404).send('No existe');
      }
      const sentenciaSQL = 'DELETE FROM articulos WHERE id= ?';
      DB.query(sentenciaSQL, [id], (error, resultado) => {
        if (error) {
          console.log(error);
        } else {
          res.json({
            mensaje: 'Se modifico',
            resultado
          });
        }
      });
    }
  });
};

module.exports = {
  getArticulos,
  postArticulos,
  putArticulo,
  deleteArticulo
};