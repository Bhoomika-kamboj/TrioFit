import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiHome, 
  FiShoppingCart, 
  FiLogIn, 
  FiUserPlus, 
  FiSun, 
  FiMoon, 
  FiUser, 
  FiPackage 
} from "react-icons/fi";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const location = useLocation();

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

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header className="header">
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
        <h2>TrioFit</h2>
        
      </Link>

      {/* Hamburger Menu Toggle */}
      <div 
        className={`hamburger ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Main Navigation */}
      <nav className={isOpen ? 'nav-open' : ''}>
        <Link to="/" onClick={closeMenu}>
          <FiHome size={24} /> Home
        </Link>

        {user?.role !== "seller" && (
          <Link to="/cart" onClick={closeMenu}>
            <FiShoppingCart size={24} /> Cart
          </Link>
        )}

        {user ? (
          <>
            {user.role === "seller" ? (
              <Link to="/seller-dashboard" onClick={closeMenu}>
                <FiPackage size={24} /> Dashboard
              </Link>
            ) : (
              <Link to="/profile" onClick={closeMenu}>
                <FiUser size={24} /> My Profile
              </Link>
            )}
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={closeMenu}>
              <FiLogIn size={24} /> Login
            </Link>
            <Link to="/register" onClick={closeMenu}>
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
