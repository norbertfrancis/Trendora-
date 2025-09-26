const express = require('express');
const { searchPrducts } = require('../../controllers/shop/search-controller');

const router = express.Router()

router.get("/:keyword", searchPrducts)

module.exports = router