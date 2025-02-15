import express from "express";
import {createmedicine, getMedicineByID, getMedicines } from "../controllers/medicine.controller.js";


const router = express.Router();

router.get("/", getMedicines);
router.get("/:id", getMedicineByID);
router.post("/", createmedicine);

export default router;