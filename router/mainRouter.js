const express = require('express');
const router = express.Router();

const mainControllers = require('../controllers/mainControllers')


router.get('/', mainControllers.index)
router.get('/product', mainControllers.product)
router.get('/product-create-form', mainControllers.contact)
router.post('/product-create-form', mainControllers.contactProcess)




module.exports = router;