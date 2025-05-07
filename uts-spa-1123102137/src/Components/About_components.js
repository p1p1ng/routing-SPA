import React from "react";

const About = () => {
  return (
    <div className="page">
      <h1 className="page-title">About This Project</h1>
      <p className="page-text">
      Proyek SPA ini dibuat menggunakan <b>React dan React Router DOM</b>. Tujuan dari proyek ini adalah untuk menunjukkan pe-rute-an, struktur komponen, dan gaya dalam aplikasi React modern.
      </p>
      <div className="info-box">
        <p><strong>Teknologi yang Digunakan:</strong></p>
        <ul>
            <li>React JS</li>
            <li>React Router DOM</li>
            <li>CSS Flexbox & Desain Responsif</li>
        </ul>
      </div>
    </div>
  );
};

export default About;