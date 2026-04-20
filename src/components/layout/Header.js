import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.b33bb43b07b2037ab043.jpg";
import dmcLogo from "../../Assets/dmc-logo.2da3359114a0f2905c6d.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header className="academic-header">
      <div className="header-container">
        <Link to="/" className="header-brand">
          <div className="logo-group" style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <img src={logo} alt="JNTU-GV Logo" className="university-logo" />
            <img src={dmcLogo} alt="DMC Logo" className="university-logo dmc-header-logo" />
          </div>
          <div className="brand-text">
            <h1 className="university-name">Jawaharlal Nehru Technological University Gurajada Vizianagaram</h1>
            <h2 className="cell-name">Digital Monitoring Cell (DMC)</h2>
          </div>
        </Link>
        <div className="header-meta">
          <div className="meta-item">
            <span className="meta-label">Institutional Portal</span>
            <span className="meta-value">UGC / GIGW 3.0 Compliant</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
