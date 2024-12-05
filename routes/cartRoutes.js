import express from 'express';
import { addToCart, addToWishlist, deleteCartItem, deleteWishlistItem, removeCartItem } from '../controller/cartController.js';

const router = express.Router()

router.route('/').post(addToCart)
router.route('/add-to-wishlist').post(addToWishlist)
router.route('/remove-cart-item').post(removeCartItem)
router.route('/delete-cart-item').post(deleteCartItem)
router.route('/delete-wishlist-item').post(deleteWishlistItem)


export default router;