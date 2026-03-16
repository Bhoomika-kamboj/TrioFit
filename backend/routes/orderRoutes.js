import express from "express";
import { createOrder, getOrderById } from "../controllers/orderController.js";

const router = express.Router();

router.post("/create", createOrder);
router.get("/:id", getOrderById);

export default router;
