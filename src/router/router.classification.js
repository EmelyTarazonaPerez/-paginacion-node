import express from "express";
import { getClassifications }  from '../controller/classification'
const router = express.Router();

router.get('/', getClassifications)

module.exports = router;
