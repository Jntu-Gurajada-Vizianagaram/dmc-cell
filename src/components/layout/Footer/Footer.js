import React from "react";
import { FaFacebook, FaHeart, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  Administration_Wing,
} from "./FooterData.js";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-v3" style={{ background: "linear-gradient(to bottom, #0b3d91, #051937)", color: "#fff", paddingTop: "5rem", paddingBottom: "2rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        
        {/* Main Footer Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", marginBottom: "4rem" }}>
          
          {/* Column 1: Identity & Social */}
          <div>
            <h2 style={{ color: "#facc15", fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.5rem" }}>JNTU-GV DMC</h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, opacity: 0.8, marginBottom: "2rem", textAlign: "justify" }}>
              The Digital Monitoring Cell (DMC) is the specialized IT directorate of Jawaharlal Nehru Technological University-Gurajada, Vizianagaram. We architect, secure, and maintain the university's mission-critical digital infrastructure.
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              {[
                { icon: <FaFacebook />, link: "https://www.facebook.com/JNTUGurajada" },
                { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/jntugurajada/" },
                { icon: <FaTwitter />, link: "https://twitter.com/JNTU_Gurajada" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/jntu_gurajada/" },
                { icon: <FaYoutube />, link: "https://www.youtube.com/@JNTUGV" }
              ].map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noreferrer" style={{ 
                  width: "40px", height: "40px", background: "rgba(255,255,255,0.1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1.1rem", transition: "all 0.3s ease" 
                }} className="social-icon">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Digital Ecosystem */}
          <div>
            <h4 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "1px" }}>Infrastructure</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link to="/hardware" className="footer-link">Institutional Hardware</Link>
              <Link to="/network" className="footer-link">Campus Connectivity</Link>
              <Link to="/software" className="footer-link">Enterprise Systems</Link>
              <Link to="/operations/surveillance" className="footer-link">Security Command</Link>
              <Link to="/governance/dmc/infrastructure" className="footer-link">Facilities & Labs</Link>
            </div>
          </div>

          {/* Column 3: University Links */}
          <div>
            <h4 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "1px" }}>Governance</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {Administration_Wing.slice(0, 4).map((item, i) => (
                <a key={i} href={item.link} className="footer-link" target="_blank" rel="noreferrer">{item.title}</a>
              ))}
              <Link to="/development/technical-team" className="footer-link">Technical Team (WDT)</Link>
            </div>
          </div>

          {/* Column 4: Support & Contact */}
          <div>
            <h4 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "1px" }}>Contact Helpdesk</h4>
            <div style={{ fontSize: "0.95rem", lineHeight: 1.8, opacity: 0.8 }}>
              <p style={{ marginBottom: "1rem" }}>
                Digital Monitoring Cell, <br/>
                Administrative Block, JNTU-GV, <br/>
                Vizianagaram, AP - 535003
              </p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Email:</strong> dmc@jntugv.edu.in</p>
              <p><strong>Hours:</strong> Mon - Sat | 10:00 AM - 5:00 PM</p>
            </div>
          </div>

        </div>

        <hr style={{ border: "none", height: "1px", background: "rgba(255,255,255,0.1)", margin: "3rem 0" }} />

        {/* Bottom Bar */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "2rem", fontSize: "0.9rem", opacity: 0.7 }}>
          <p>© {currentYear} JNTU-GV Digital Monitoring Cell. All Rights Reserved.</p>
          <div style={{ display: "flex", gap: "2rem" }}>
            <Link to="/governance/disclosures/ugc" style={{ color: "#fff" }}>UGC Disclosures</Link>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              Designed with <FaHeart style={{ color: "#ef4444" }} /> by <Link to="/development/technical-team" style={{ color: "#facc15", fontWeight: 700 }}>Web Development Team</Link>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: all 0.2s ease;
          font-size: 0.95rem;
        }
        .footer-link:hover {
          color: #facc15;
          transform: translateX(5px);
        }
        .social-icon:hover {
          background: #facc15 !important;
          color: #0b3d91 !important;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
