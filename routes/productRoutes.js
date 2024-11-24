import express from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controller/productController.js';

const routes = express.Router();


routes.route('/').get(getProducts).post(createProduct)
routes.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct)

export default routes