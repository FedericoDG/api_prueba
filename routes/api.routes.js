const { Router } = require('express');
const { getArticulos, postArticulos, putArticulo, deleteArticulo } = require('../controllers/api.controllers.js');
const { checkNombre } = require('../middlewares/middlewares.js');

const router = Router();

router.get('/', getArticulos);

router.post('/',
  checkNombre, // Esto es un middleware
  postArticulos);

router.put('/:id',
  checkNombre,
  putArticulo);

router.delete('/:id',
  deleteArticulo);

module.exports = router;