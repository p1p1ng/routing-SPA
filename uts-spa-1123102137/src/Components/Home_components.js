import React from "react";

const Home = () => {
  return (
    <div className="page">
      <h1 className="page-title">Welcome to My Single Pages Application (SPA)</h1>
      <p className="page-text">
      Ini adalah Aplikasi Halaman Tunggal modern yang dibuat dengan <b>React dan React Router</b>.
Anda dapat menavigasi antar halaman tanpa memuat ulang seluruh situs. <b>Cepat,
responsif, dan mudah digunakan!</b>
      </p>
      <div className="hero-box">
      <h2>Mengapa memilih SPA ?</h2>
        <ul>
        <li>Navigasi cepat</li>
        <li>Pengalaman pengguna yang ditingkatkan</li>
        <li>Kinerja yang efisien</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;