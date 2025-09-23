const express = require('express');
const { getALlOrdersOfUsers, getOrderDetailsForAdmin } = require('../../controllers/admin/order-controller');
const router = express.Router();

router.get("/orders", getALlOrdersOfUsers)
router.get("/details/:id", getOrderDetailsForAdmin)

module.exports = router;