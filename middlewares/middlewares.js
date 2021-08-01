const checkNombre = (req, res, next) => {
  const { nombre } = req.body;
  if (!nombre) {
    return res.status(403).send('Nombre es requerido');
  }
  next();
};

module.exports = {
  checkNombre
};