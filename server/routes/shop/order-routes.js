const express = require('express')
const router = express.Router()

const {createOrder, capturePayment, getAllOrdersByUser, getOrderDetail} = require('../../controllers/shop/order-controller')

router.post("/create", createOrder);
router.post("/capture", capturePayment );
router.get("/list/:userId", getAllOrdersByUser);
router.get("/details/:id", getOrderDetail);


module.exports = router;