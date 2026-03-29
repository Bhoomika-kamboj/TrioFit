import jwt from "jsonwebtoken";

export const verifyAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
      console.log("❌ No token provided");
      return res.status(401).json({ message: "No token provided" });
    }

    console.log("🔍 Verifying token...");
    console.log("Token:", token.substring(0, 30) + "...");
    console.log("JWT_SECRET exists:", !!process.env.JWT_SECRET);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token verified successfully");
    console.log("Decoded payload:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("❌ Token verification error:", error.message);
    res.status(401).json({ message: "Invalid token", error: error.message });
  }
};

export const verifySeller = (req, res, next) => {
  console.log("\n🔐 === CHECKING SELLER ROLE ===");
  console.log("req.user:", req.user);
  console.log("req.user.role:", req.user?.role);
  console.log("Is seller?:", req.user?.role === "seller");
  
  if (!req.user || req.user.role !== "seller") {
    console.log("❌ FORBIDDEN: User is not a seller");
    console.log("User role:", req.user?.role);
    return res.status(403).json({ 
      message: "Only sellers can access this",
      userRole: req.user?.role,
      user: req.user
    });
  }
  
  console.log("✅ ALLOWED: User is a seller");
  next();
};
