import React from "react";
import { FaDatabase, FaFingerprint, FaHdd, FaMicrochip, FaServer, FaShieldAlt } from "react-icons/fa";
import "./Services.css";

const hardwareArchitecture = [
  {
    icon: <FaServer />,
    title: "Institutional Datacenter",
    desc: "Centralized server architecture housing the university's core databases, academic portals, and private cloud storage with redundant power backbones.",
    metric: "99.9% Uptime"
  },
  {
    icon: <FaFingerprint />,
    title: "Biometric Governance",
    desc: "Strategic deployment of facial and fingerprint recognition grids across campus blocks for foolproof attendance tracking and zero-touch access control.",
    metric: "10+ Nodes"
  },
  {
    icon: <FaMicrochip />,
    title: "HPC Compute Cluster",
    desc: "Ubuntu-based Intel clusters providing high-performance computing (HPC) capabilities for advanced research in machine learning and data science.",
    metric: "48-Core Nodes"
  },
  {
    icon: <FaDatabase />,
    title: "Storage SAN/NAS",
    desc: "High-capacity network-attached storage (NAS) and storage area networks (SAN) ensuring rapid data retrieval and institutional backup resilience.",
    metric: "50TB+ Capacity"
  },
  {
    icon: <FaShieldAlt />,
    title: "End-Point Security",
    desc: "Hardware-level security and perimeter defense systems managing the physical integrity of the JNTUGV IT infrastructure.",
    metric: "Full Perimeter"
  },
  {
    icon: <FaHdd />,
    title: "Digital Archives",
    desc: "Specialized cold storage for long-term academic record preservation and high-fidelity institutional archiving.",
    metric: "20yr Archive"
  }
];

const Hardware = () => {
  return (
    <div className="fade-in" style={{ paddingBottom: "5rem" }}>
      
      {/* Institutional Hero */}
      <section style={{ 
        background: "linear-gradient(135deg, #0b3d91 0%, #1e293b 100%)", 
        padding: "6rem 2rem", 
        color: "#fff", 
        textAlign: "center",
        borderRadius: "0 0 4rem 4rem",
        boxShadow: "0 20px 50px rgba(11, 61, 145, 0.2)"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, marginBottom: "1.5rem" }}>
            Institutional Hardware Command
          </h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9, maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
            Architecting the physical backbone of JNTU-GV through high-performance compute clusters, secure biometric grids, and enterprise datacenter operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "-4rem auto 0", padding: "0 1.5rem" }}>
        <div className="card" style={{ padding: "4rem", background: "#fff", borderRadius: "2.5rem", boxShadow: "0 30px 60px rgba(0,0,0,0.08)" }}>
          
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0b3d91", marginBottom: "1rem" }}>System Architecture Breakdown</h2>
            <div style={{ width: "60px", height: "4px", background: "#facc15", margin: "0 auto", borderRadius: "2px" }}></div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem"
          }}>
            {hardwareArchitecture.map((feature, idx) => (
              <div key={idx} style={{
                  background: "#f8fafc",
                  borderRadius: "1.5rem",
                  padding: "3rem 2rem",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%"
              }}
              className="hardware-card"
              >
                <div style={{ 
                  width: "60px", 
                  height: "60px", 
                  background: "#fff", 
                  color: "#0b3d91", 
                  borderRadius: "12px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  fontSize: "1.8rem",
                  marginBottom: "1.5rem",
                  boxShadow: "0 10px 20px rgba(11, 61, 145, 0.1)"
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1e293b", marginBottom: "1rem" }}>{feature.title}</h3>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#64748b", margin: "0 0 2rem 0", flex: 1 }}>{feature.desc}</p>
                
                <div style={{ 
                  padding: "10px 20px", 
                  background: "rgba(11, 61, 145, 0.05)", 
                  borderRadius: "8px", 
                  color: "#0b3d91", 
                  fontWeight: 700, 
                  fontSize: "0.9rem",
                  display: "inline-block",
                  alignSelf: "flex-start"
                }}>
                  Capability: {feature.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance CTA */}
        <div style={{ 
          marginTop: "4rem", 
          padding: "4rem", 
          background: "linear-gradient(to right, #f1f5f9, #fff)", 
          borderRadius: "2.5rem", 
          textAlign: "center",
          border: "1px solid #e2e8f0"
        }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0b3d91", marginBottom: "1rem" }}>Hardware Reliability Commitment</h2>
          <p style={{ fontSize: "1.1rem", color: "#475569", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            The Digital Monitoring Cell operates an end-to-end hardware grievance system. Report any system failures or component requirements through the JNTUGV e-Ticket portal.
          </p>
          <button className="btn" style={{ background: "#0b3d91", color: "#fff", padding: "1rem 3rem", fontWeight: 700 }}>
            Access Maintenance Portal
          </button>
        </div>
      </div>

      <style>{`
        .hardware-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(11, 61, 145, 0.1) !important;
          border-color: #0b3d91 !important;
        }
      `}</style>
    </div>
  );
};

export default Hardware;
