const express = require('express');
const { getALlOrdersOfUsers, getOrderDetailsForAdmin, updateOrderStatus } = require('../../controllers/admin/order-controller');
const router = express.Router();

router.get("/get", getALlOrdersOfUsers);
router.get("/details/:id", getOrderDetailsForAdmin);
router.put("/update/:id", updateOrderStatus)


module.exports = router;