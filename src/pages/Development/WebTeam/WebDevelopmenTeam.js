import React, { useEffect, useRef, useState } from "react";
import { FaCode, FaMicrochip, FaRocket, FaTerminal, FaUsers } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import InnovationLabImage from "../../../Assets/Institutional/university_innovation_lab_collaboration_1774876747795.png";

const menuItems = [
  { to: "/development/technical-team", label: "Technical Coordinators", icon: <FaTerminal /> },
  { to: "/development/projects/website", label: "University Website", icon: <FaCode /> },
  { to: "/development/projects/admin", label: "Administrative Portals", icon: <FaUsers /> },
  { to: "/development/cells/iqac", label: "IQAC Dashboard" },
  { to: "/development/cells/placement", label: "Placement Portal" },
  { to: "/development/cells/dmc", label: "DMC Systems" },
  { to: "/development/cells/rnd", label: "R&D Infrastructure" },
  { to: "/development/cells/examination", label: "Examination Section" },
  { to: "/development/cells/nss", label: "NSS & Extension" },
  { to: "/development/cells/sports", label: "Sports Management" },
];

const WebDevelopmenTeam = () => {
  const location = useLocation();
  const menuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fade-in" style={{ width: "100%", maxWidth: "1600px", margin: "2rem auto", padding: isMobile ? "1rem" : "3rem" }}>
      
      {/* Professional Academic Hero Hub */}
      <section className="institutional-hero" style={{ padding: "6rem 2rem", background: "var(--bg-soft)", borderRadius: "1rem", marginBottom: "4rem", border: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: "1.25rem", color: "var(--primary-blue)" }}>
            Digital Research & Contributions Hub
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "850px", margin: "0 auto", lineHeight: 1.7, fontWeight: 500 }}>
             Orchestrating the university's digital lifecycle through a dedicated collective of student visionaries and technical architects under the DMC mandate.
          </p>
        </div>
      </section>

      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "4rem",
        width: "100%",
        alignItems: "flex-start"
      }}>
        
        {/* Navigation Sidebar */}
        <nav
          ref={menuRef}
          style={{
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            overflowX: isMobile ? "auto" : "visible",
            gap: "0.5rem",
            minWidth: isMobile ? "100%" : "350px",
            padding: "2rem",
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "var(--shadow-sm)",
            border: "1px solid var(--border-light)",
            position: isMobile ? "static" : "sticky",
            top: "120px",
            maxHeight: isMobile ? "auto" : "calc(100vh - 200px)",
            overflowY: isMobile ? "visible" : "auto",
            scrollbarWidth: "none"
          }}
        >
          <div style={{ padding: "0 1rem 1.5rem", borderBottom: "1px solid var(--border-light)", marginBottom: "1rem", display: isMobile ? "none" : "block" }}>
            <h4 style={{ margin: 0, color: "var(--accent-gold)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 700 }}>Institutional Wings</h4>
          </div>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "1rem 1.5rem",
                  borderRadius: "12px",
                  background: isActive ? "var(--primary-blue)" : "transparent",
                  color: isActive ? "#ffffff" : "var(--text-muted)",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                  boxShadow: isActive ? "var(--shadow-sm)" : "none",
                }}
              >
                {item.icon ? <span style={{ fontSize: "1.1rem" }}>{item.icon}</span> : <FaMicrochip />}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Dynamic Content Area */}
        <div style={{ flex: 1, width: "100%" }}>
          {location.pathname === "/development" && (
            <div className="card fade-in" style={{ padding: "0", background: "#fff", border: "1px solid var(--border-light)", overflow: "hidden" }}>
              <div style={{ height: "400px", width: "100%", overflow: "hidden" }}>
                 <img src={InnovationLabImage} alt="Innovation Lab" style={{ width: "100%", height: "100%", objectFit: "cover", borderBottom: "1px solid var(--border-light)" }} />
              </div>
              <div style={{ padding: "5rem" }}>
                <div style={{ 
                  width: "100px", 
                  height: "100px", 
                  background: "var(--bg-soft)", 
                  color: "var(--primary-blue)", 
                  borderRadius: "1rem", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  fontSize: "3rem", 
                  margin: "0 auto 3rem",
                  border: "1px solid var(--border-light)"
                }}>
                  <FaRocket />
                </div>
                <h2 style={{ fontSize: "2.4rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--primary-blue)", textAlign: "center", letterSpacing: "-1px" }}>Institutional Development Charter</h2>
                <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "var(--text-muted)", maxWidth: "850px", margin: "0 auto", textAlign: "justify", fontWeight: 400 }}>
                  The Digital Monitoring Cell facilitates a **"Collaborative Technical Mentorship"** model where students and faculty from various departments contribute to the university's technical development. This hub documents the persistent efforts of those who have developed, maintained, and secured JNTU-GV's institutional digital ecosystem.
                </p>
                
                <div style={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem" }}>
                  <div style={{ padding: "3rem", background: "var(--bg-soft)", borderRadius: "1rem", border: "1px solid var(--border-light)", textAlign: "center" }}>
                    <h3 style={{ margin: "0 0 10px 0", fontSize: "2.8rem", color: "var(--primary-blue)", fontWeight: 700 }}>15+</h3>
                    <p style={{ margin: 0, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>Systems Engineered</p>
                  </div>
                  <div style={{ padding: "3rem", background: "var(--bg-soft)", borderRadius: "1rem", border: "1px solid var(--border-light)", textAlign: "center" }}>
                    <h3 style={{ margin: "0 0 10px 0", fontSize: "2.8rem", color: "var(--primary-blue)", fontWeight: 700 }}>50+</h3>
                    <p style={{ margin: 0, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>Contributing Architects</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div style={{
              background: "transparent",
              width: "100%"
          }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmenTeam;
