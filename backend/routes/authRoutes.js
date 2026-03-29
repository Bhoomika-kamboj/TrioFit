import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      role,
      accountHolderName,
      accountNumber,
      ifscCode,
      shopName,
      gstNumber,
    } = req.body;

    console.log("\n📝 === REGISTRATION ATTEMPT ===");
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Role:", role);
    console.log("Shop Name (if seller):", shopName);

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("❌ User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("✅ Password hashed");

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      role,
      accountHolderName,
      accountNumber,
      ifscCode,
      shopName: role === "seller" ? shopName : undefined,
      gstNumber: role === "seller" ? gstNumber : undefined,
    });

    await newUser.save();

    console.log("✅ User created successfully");
    console.log("Saved user:", {
      id: newUser._id,
      role: newUser.role,
      email: newUser.email,
      shopName: newUser.shopName
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("❌ Registration error:", error);
    res.status(500).json({ message: error.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password, role } = req.body;

    console.log("\n🔑 === LOGIN ATTEMPT ===");
    console.log("Email:", email);
    console.log("Role requested:", role);

    // Check user - must match both email AND role
    const user = await User.findOne({ email, role });
    if (!user) {
      console.log("❌ User not found with that email and role");
      return res.status(400).json({ message: "Invalid email or role" });
    }

    console.log("✅ User found");
    console.log("User details:", {
      id: user._id,
      email: user.email,
      role: user.role,
      fullName: user.fullName
    });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Invalid credentials");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    console.log("✅ Password matched");

    // JWT Token
    const tokenPayload = { id: user._id, role: user.role };
    console.log("JWT Payload:", tokenPayload);

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log("✅ JWT token created");
    console.log("Token preview:", token.substring(0, 30) + "...");

    const response = { 
      token, 
      user: { id: user._id, fullName: user.fullName, role: user.role } 
    };
    
    console.log("📤 Sending response:", response.user);
    res.json(response);
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;