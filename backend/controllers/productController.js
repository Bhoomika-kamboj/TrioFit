import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
  try {
    console.log("=== ADD PRODUCT REQUEST ===");
    console.log("User from req:", req.user);
    console.log("User role:", req.user?.role);
    console.log("User ID:", req.user?.id);
    
    const { name, price, category, subcategory, description, image, variants, sizes, colors, stock } =
      req.body;

    if (!name || !price || !category || !subcategory || !image) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "User not authenticated", user: req.user });
    }

    const product = new Product({
      sellerId: req.user.id,
      name,
      price,
      category,
      subcategory,
      description,
      image,
      variants: variants || [],
      sizes: sizes || [],
      colors: colors || [],
      stock: stock || 0,
    });

    await product.save();
    console.log("Product created:", product._id);
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getSellerProducts = async (req, res) => {
  try {
    console.log("=== GET SELLER PRODUCTS ===");
    console.log("User from req:", req.user);
    
    const products = await Product.find({ sellerId: req.user.id }).sort({ createdAt: -1 });
    res.json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, price, category, subcategory, description, image, variants, sizes, colors, stock, status } =
      req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.sellerId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    Object.assign(product, {
      name,
      price,
      category,
      subcategory,
      description,
      image,
      variants: variants || product.variants,
      sizes: sizes || product.sizes,
      colors: colors || product.colors,
      stock,
      status,
    });

    await product.save();
    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.sellerId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await Product.deleteOne({ _id: productId });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ status: "active" }).populate("sellerId", "fullName shopName");
    res.json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId).populate("sellerId", "fullName shopName");

    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
