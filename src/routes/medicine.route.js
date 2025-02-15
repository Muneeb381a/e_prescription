import express from "express";
import {getMedicineByID, getMedicines } from "../controllers/medicine.controller.js";


const router = express.Router();

router.get("/", getMedicines);
router.get("/:id", getMedicineByID);

export default router;