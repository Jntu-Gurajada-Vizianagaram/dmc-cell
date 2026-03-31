import React from "react";
import { FaCloudUploadAlt, FaCode, FaLaptopCode, FaLock, FaMicrochip, FaWindowRestore } from "react-icons/fa";
import "./Services.css";

const softwarePortfolio = [
  {
    icon: <FaWindowRestore />,
    title: "Enterprise Licensing",
    desc: "Management of university-wide licensing for Windows OS, Microsoft Office 365, and specialized academic suites for all departments.",
    metric: "Institutional Tier"
  },
  {
    icon: <FaLaptopCode />,
    title: "Academic Portals",
    desc: "Architecting and maintaining the student-faculty portals, ERP systems for examinations, and digital result management archives.",
    metric: "High Traffic"
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "DMC e-Ticket Portal",
    desc: "Custom-developed grievance redressal system for streamlined reporting of technical issues across the JNTUGV campus.",
    metric: "Custom Build"
  },
  {
    icon: <FaMicrochip />,
    title: "Research Software",
    desc: "Deployment of specialized compute environments for MATLAB, Python Deep Learning stacks, and advanced simulation toolkits.",
    metric: "Researcher Ready"
  },
  {
    icon: <FaCode />,
    title: "Web Governance",
    desc: "Strategic oversight and development of the JNTUGV digital identity, ensuring cross-platform compatibility and security.",
    metric: "Full-Stack Ops"
  },
  {
    icon: <FaLock />,
    title: "Access Management",
    desc: "Centralized identity provider and single sign-on (SSO) systems for secure access to university digital resources.",
    metric: "SSO Enabled"
  }
];

const Software = () => {
  return (
    <div className="fade-in" style={{ paddingBottom: "5rem" }}>
      
      {/* Software Hero */}
      <section style={{ 
        background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)", 
        padding: "6rem 2rem", 
        color: "#fff", 
        textAlign: "center",
        borderRadius: "0 0 4rem 4rem",
        boxShadow: "0 20px 50px rgba(124, 58, 237, 0.2)"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, marginBottom: "1.5rem" }}>
            Enterprise Software Ecosystem
          </h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9, maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
             Vetting, provisioning, and maintaining the specialized software architecture that powers the university's academic and administrative operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "-4rem auto 0", padding: "0 1.5rem" }}>
        <div className="card" style={{ padding: "4rem", background: "#fff", borderRadius: "2.5rem", boxShadow: "0 30px 60px rgba(0,0,0,0.08)" }}>
          
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#4c1d95", marginBottom: "1rem" }}>Systems & Licensing</h2>
            <div style={{ width: "60px", height: "4px", background: "#facc15", margin: "0 auto", borderRadius: "2px" }}></div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem"
          }}>
            {softwarePortfolio.map((feature, idx) => (
              <div key={idx} style={{
                  background: "#ffffff",
                  borderRadius: "1.5rem",
                  padding: "3rem 2.5rem",
                  border: "1.5px solid #f3f4f6",
                  transition: "all 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.01)"
              }}
              className="software-card"
              >
                <div style={{ 
                  width: "70px", 
                  height: "70px", 
                  background: "rgba(124, 58, 237, 0.05)", 
                  color: "#7c3aed", 
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
                  background: "linear-gradient(135deg, #4c1d95, #7c3aed)", 
                  borderRadius: "10px", 
                  color: "#fff", 
                  fontWeight: 700, 
                  fontSize: "0.95rem",
                  display: "inline-block",
                  alignSelf: "flex-start",
                  boxShadow: "0 8px 15px rgba(124, 58, 237, 0.2)"
                }}>
                   {feature.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Deployment Policy */}
        <div style={{ 
          marginTop: "4rem", 
          padding: "5rem 4rem", 
          background: "linear-gradient(135deg, #fdf4ff 0%, #fff 100%)", 
          borderRadius: "2.5rem", 
          textAlign: "center",
          border: "2px solid #f3e8ff",
          boxShadow: "0 10px 30px rgba(124, 58, 237, 0.05)"
        }}>
          <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#4c1d95", marginBottom: "1.5rem" }}>University Software Policy</h2>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "#475569", maxWidth: "800px", margin: "0 auto 3.5rem" }}>
            The Digital Monitoring Cell ensures that all campus software deployments are legally compliant and security-vetted. Unauthorized software installations on university-owned hardware are strictly prohibited. For specialized application requirements, departments should raise a request via the DMC procurement portal.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn" style={{ background: "#4c1d95", color: "#fff", padding: "1.2rem 3rem", fontWeight: 700 }}>
              Request New Software
            </button>
            <button className="btn" style={{ background: "#fff", color: "#4c1d95", border: "1.5px solid #4c1d95", padding: "1.2rem 3rem", fontWeight: 700 }}>
              Download DMC e-Ticket CLI
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .software-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(124, 58, 237, 0.1) !important;
          border-color: #7c3aed !important;
        }
      `}</style>
    </div>
  );
};

export default Software;
