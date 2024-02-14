const { createProduct, getProducts, getProductById, updateProductById, deleteById } = require('../controllers/productController');

const router = require('express').Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProductById);
router.delete('/:id', deleteById);


module.exports = router