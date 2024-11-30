import express from 'express';
import { addToCart, addToWishlist } from '../controller/cartController.js';

const router = express.Router()

router.route('/').post(addToCart)
router.route('/add-to-wishlist').post(addToWishlist)


export default router;