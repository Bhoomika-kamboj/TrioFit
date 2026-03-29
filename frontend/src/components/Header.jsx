import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiShoppingCart, FiLogIn, FiUserPlus, FiSun, FiMoon, FiUser, FiPackage } from "react-icons/fi";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const newDark = !prev;
      document.documentElement.setAttribute("data-theme", newDark ? "dark" : "light");
      return newDark;
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header className="header">
      <h2 className="logo">TrioFit</h2>

      <nav>
        <input type="text" placeholder="Search item here..." />

        <Link to="/">
          <FiHome size={24} /> Home
        </Link>

        {user?.role !== "seller" && (
          <Link to="/cart">
            <FiShoppingCart size={24} /> Cart
          </Link>
        )}

        {user ? (
          <>
            {user.role === "seller" ? (
              <Link to="/seller-dashboard">
                <FiPackage size={24} /> Dashboard
              </Link>
            ) : (
              <Link to="/profile">
                <FiUser size={24} /> My Profile
              </Link>
            )}
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <FiLogIn size={24} /> Login
            </Link>
            <Link to="/register">
              <FiUserPlus size={24} /> Register
            </Link>
          </>
        )}

        <button className="theme-btn" onClick={toggleTheme}>
          {dark ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;