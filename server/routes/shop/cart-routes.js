const express = require('express');

const {addToCart,fetchCartItmes,updateCartItemQty,deleteCartItem} = require("../../controllers/shop/cart-controller");

const router = express.Router();


router.post('/add', addToCart);
router.get('/get/:userId', fetchCartItmes);
router.put('/update-cart', updateCartItemQty);
router.delete('/:userId/:productId', deleteCartItem);


module.exports = router