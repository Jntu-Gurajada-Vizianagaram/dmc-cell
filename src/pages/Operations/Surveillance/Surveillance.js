import React from "react";
import { FaEye, FaMicrochip, FaShieldAlt, FaTerminal, FaUserShield, FaVideo } from "react-icons/fa";
import Image1 from "./1.jpeg";
import "./Surveillance.css";

const surveillanceArchitecture = [
  {
    icon: <FaVideo />,
    title: "High-Density IP Grid",
    desc: "A massive network of industrial-grade IP cameras providing high-fidelity coverage across all university blocks and campus boundaries.",
    metric: "24/7 Recording"
  },
  {
    icon: <FaUserShield />,
    title: "Central Command Center",
    desc: "A high-security localized monitoring unit reporting directly to the University Administration for rapid situational awareness.",
    metric: "Centralized Ops"
  },
  {
    icon: <FaMicrochip />,
    title: "Intelligent Analytics",
    desc: "Deployment of edge-based motion analytics and intrusion detection protocols to ensure proactive security management.",
    metric: "AI-Enhanced"
  },
  {
    icon: <FaTerminal />,
    title: "Digital Archiving",
    desc: "Encrypted, high-capacity storage servers maintaining historical footage data under strict institutional privacy compliance.",
    metric: "30-Day Retention"
  },
  {
    icon: <FaEye />,
    title: "Thermal Monitoring",
    desc: "Strategic thermal imaging systems deployed in critical sensitive zones for advanced environmental and perimeter safety.",
    metric: "Critical Zones"
  },
  {
    icon: <FaShieldAlt />,
    title: "Privacy Governance",
    desc: "Rigid adherence to UGC digital security guidelines and institutional privacy frameworks for all surveillance operations.",
    metric: "UGC Compliant"
  }
];

const Surveillance = () => {
  return (
    <div className="fade-in" style={{ paddingBottom: "5rem" }}>
      
      {/* Surveillance Hero */}
      <section style={{ 
        background: "linear-gradient(135deg, #059669 0%, #065f46 100%)", 
        padding: "6rem 2rem", 
        color: "#fff", 
        textAlign: "center",
        borderRadius: "0 0 4rem 4rem",
        boxShadow: "0 20px 50px rgba(5, 150, 105, 0.2)"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, marginBottom: "1.5rem" }}>
            Institutional Security Command
          </h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9, maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
            Orchestrating high-density IP surveillance grids and AI-driven monitoring infrastructure under a strategic institutional safety mandate.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "-4rem auto 0", padding: "0 1.5rem" }}>
        <div className="card" style={{ padding: "4rem", background: "#fff", borderRadius: "2.5rem", boxShadow: "0 30px 60px rgba(0,0,0,0.08)" }}>
          
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#065f46", marginBottom: "1rem" }}>Surveillance Ecosystem</h2>
            <div style={{ width: "60px", height: "4px", background: "#facc15", margin: "0 auto", borderRadius: "2px" }}></div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem"
          }}>
            {surveillanceArchitecture.map((feature, idx) => (
              <div key={idx} style={{
                  background: "#ffffff",
                  borderRadius: "1.5rem",
                  padding: "3rem 2.5rem",
                  border: "1.5px solid #f0fdf4",
                  transition: "all 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 4px 6px rgba(5, 150, 105, 0.02)"
              }}
              className="surveillance-card"
              >
                <div style={{ 
                  width: "70px", 
                  height: "70px", 
                  background: "rgba(5, 150, 105, 0.05)", 
                  color: "#059669", 
                  borderRadius: "20px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  fontSize: "2rem",
                  marginBottom: "2rem"
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1e293b", marginBottom: "1.2rem" }}>{feature.title}</h3>
                <p style={{ fontSize: "1.08rem", lineHeight: 1.8, color: "#4a5568", margin: "0 0 2rem 0", flex: 1 }}>{feature.desc}</p>
                
                <div style={{ 
                  padding: "12px 24px", 
                  background: "linear-gradient(135deg, #059669, #065f46)", 
                  borderRadius: "10px", 
                  color: "#fff", 
                  fontWeight: 700, 
                  fontSize: "0.95rem",
                  display: "inline-block",
                  alignSelf: "flex-start",
                  boxShadow: "0 8px 15px rgba(5, 150, 105, 0.2)"
                }}>
                   Status: {feature.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Reference Section */}
        <div style={{ marginTop: "4rem" }}>
          <div className="card" style={{ padding: "0", overflow: "hidden", borderRadius: "2.5rem", border: "1px solid #e2e8f0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", alignItems: "stretch" }}>
              <div style={{ padding: "4rem", background: "#f8fafc" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#065f46", marginBottom: "1.5rem" }}>Strategic Grid Coverage</h2>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#475569", marginBottom: "2rem" }}>
                  The JNTUGV campus security is orchestrated through the Digital Monitoring Cell's localized command center. We utilize multi-spectral imaging and high-density IP grids to provide a 360-degree digital safety umbrella for all academic and residential facilities.
                </p>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", color: "#059669", fontWeight: 700 }}>
                  <FaShieldAlt /> 100% Perimeter Integrity
                </div>
              </div>
              <div style={{ position: "relative", minHeight: "350px" }}>
                <img src={Image1} alt="Command Center" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ 
                  position: "absolute", 
                  top: 0, 
                  left: 0, 
                  width: "100%", 
                  height: "100%", 
                  background: "linear-gradient(to right, #f8fafc 0%, transparent 20%)" 
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .surveillance-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(5, 150, 105, 0.1) !important;
          border-color: #059669 !important;
        }
      `}</style>
    </div>
  );
};

export default Surveillance;
