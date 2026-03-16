import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [role, setRole] = useState("customer");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [shopName, setShopName] = useState("");
  const [gstNumber, setGstNumber] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register", // ✅ correct route
        {
          fullName,
          email,
          password,
          role,
          accountHolderName,
          accountNumber,
          ifscCode,
          shopName: role === "seller" ? shopName : undefined,
          gstNumber: role === "seller" ? gstNumber : undefined,
        },
        { withCredentials: true }
      );

      console.log("Registered successfully:", data);
     alert("Account created successfully!");
window.location.href = "/login";
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="seller">Seller</option>
      </select>

      <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      <h4>Bank Details</h4>
      <input type="text" placeholder="Account Holder Name" value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} />
      <input type="text" placeholder="Account Number" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
      <input type="text" placeholder="IFSC Code" value={ifscCode} onChange={(e) => setIfscCode(e.target.value)} />

      {role === "seller" && (
        <>
          <h4>Seller Details</h4>
          <input type="text" placeholder="Shop / Brand Name" value={shopName} onChange={(e) => setShopName(e.target.value)} />
          <input type="text" placeholder="GST Number" value={gstNumber} onChange={(e) => setGstNumber(e.target.value)} />
        </>
      )}

      <button onClick={handleRegister}>Create Account</button>
    </div>
  );
};

export default Register;