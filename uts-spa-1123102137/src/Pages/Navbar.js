import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logika logout (hapus token, dll)
    alert("Logged out!");
    setShowDropdown(false);
    navigate("/");
  };

  // Menutup dropdown saat klik di luar elemen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <h2 className="logo">UTS-SPA-1123102137</h2>
      <div className="nav-right">
        <ul className="nav-links">
            <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            </li>
            <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            </li>
            <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
            </li>
        </ul>
        <div className="user-nav" ref={dropdownRef}>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="User Profile"
            className="avatar"
            onClick={() => setShowDropdown(!showDropdown)}
            style={{ cursor: "pointer" }}
          />
          {showDropdown && (
            <div className="dropdown-menu">
              <NavLink to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>Profile</NavLink>
              <button className="dropdown-item logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
    </div>
    </nav>
  );
};

export default Navbar;