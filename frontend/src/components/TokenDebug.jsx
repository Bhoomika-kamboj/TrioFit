import axios from "axios";

const TokenDebug = () => {
  const handleCheckToken = async () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    console.log("\n🔍 === TOKEN DEBUG ===");
    console.log("Token exists:", !!token);
    console.log("User stored:", user);

    if (token) {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products/debug/token-info",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Backend sees:", response.data);
        alert(
          "✅ Token Info:\n" +
            JSON.stringify(response.data, null, 2)
        );
      } catch (error) {
        console.error("Error:", error.response?.data);
        alert(
          "❌ Error: " +
            (error.response?.data?.message || error.message)
        );
      }
    } else {
      alert("❌ No token found. Please login first.");
    }
  };

  return (
    <div style={{ padding: "20px", background: "#f0f0f0", borderRadius: "8px", margin: "20px" }}>
      <h3>🔧 Debug Tool</h3>
      <button
        onClick={handleCheckToken}
        style={{
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Check Token Info
      </button>
      <p style={{ fontSize: "12px", marginTop: "10px" }}>
        Click above to see what the backend sees in your token
      </p>
    </div>
  );
};

export default TokenDebug;
