import React from "react";

const Profile = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (
    <div className="auth-container">
      <h2>My Profile</h2>

      {user && (
        <>
          <p>Name: {user.fullName}</p>
          <p>Role: {user.role}</p>
        </>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;