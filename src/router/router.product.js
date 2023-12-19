import express from "express";
import {postProducts, getProducts}  from '../controller/products'
const router = express.Router();

router.post("/filter", postProducts)
router.get('/', getProducts)


module.exports = router;