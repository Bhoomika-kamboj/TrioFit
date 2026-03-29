import React from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import bgVideo from "../assets/images/Video bg/background.mp4";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (
    <div className="profile-page">
      <div className="profile-card-container">
        {user ? (
          <div className="profile-card">
            <video autoPlay loop muted className="profile-card-bg">
              <source src={bgVideo} type="video/mp4" />
            </video>

            {/* Profile Avatar */}
            <div className="profile-avatar">
              <FiUser size={80} />
            </div>

            {/* Profile Header */}
            <div className="profile-header">
              <h1>{user.fullName}</h1>
              <p className={`profile-role ${user.role}`}>{user.role.toUpperCase()}</p>
            </div>

            {/* Profile Body */}
            <div className="profile-body">
              <div className="profile-item">
                <span className="profile-label">Email</span>
                <span className="profile-value">{user.email}</span>
              </div>

              <div className="profile-item">
                <span className="profile-label">Account ID</span>
                <span className="profile-value">{user.id || "N/A"}</span>
              </div>

              <div className="profile-item">
                <span className="profile-label">Member Since</span>
                <span className="profile-value">2026</span>
              </div>
            </div>

            {/* Profile Footer */}
            <div className="profile-footer">
              <button onClick={handleLogout} className="profile-logout-btn">
                <FiLogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="profile-card loading">
            <p>Loading profile...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;