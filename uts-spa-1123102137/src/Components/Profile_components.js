import React from "react";

const Profile = () => {
  return (
    <div className="page">
      <h1 className="page-title">Profile</h1>
      <p className="page-text">Selamat datang di halaman profil Anda. Di sini Anda dapat melihat dan mengelola pengaturan pengguna, preferensi, dan data pribadi Anda.</p>

      <div className="info-box">
        <p><strong>Name:</strong> Firman Arifianto</p>
        <p><strong>Email:</strong> firmanarif12345@gmail.com</p>
        <p><strong>NIM:</strong> 1123102137</p>
        <p><strong>Join Stikom:</strong> Sept 2023</p>
      </div>
    </div>
  );
};

export default Profile;