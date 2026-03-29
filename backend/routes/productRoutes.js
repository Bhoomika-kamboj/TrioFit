import express from "express";
import { verifyAuth, verifySeller } from "../middleware/authMiddleware.js";
import {
  addProduct,
  getSellerProducts,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/debug/token-info", verifyAuth, (req, res) => {
  console.log("\n🔍 === TOKEN DEBUG INFO ===");
  console.log("Full req.user:", req.user);
  console.log("Role:", req.user.role);
  console.log("ID:", req.user.id);
  
  res.json({ 
    message: "Token info",
    user: req.user,
    isSeller: req.user.role === "seller"
  });
});

router.get("/debug/test-auth", verifyAuth, (req, res) => {
  res.json({ message: "Auth works", user: req.user });
});

router.post("/add", verifyAuth, verifySeller, addProduct);
router.get("/my-products", verifyAuth, verifySeller, getSellerProducts);
router.put("/:productId", verifyAuth, verifySeller, updateProduct);
router.delete("/:productId", verifyAuth, verifySeller, deleteProduct);
router.get("/all", getAllProducts);
router.get("/:productId", getProductById);

export default router;
