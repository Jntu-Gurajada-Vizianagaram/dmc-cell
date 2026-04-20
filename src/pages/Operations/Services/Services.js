import React from "react";
import { FaBookOpen, FaBriefcase, FaCloud, FaShieldAlt, FaTerminal, FaUsersCog } from "react-icons/fa";

const serviceMandates = [
  {
    icon: <FaBriefcase />,
    title: "Administrative Governance",
    description: "Orchestrating the university's transition to a paperless environment through persistent e-Office deployments and secure administrative portals.",
    deliverables: ["e-Office Implementation", "Digital File Monitoring", "Administrative ERP Hub"]
  },
  {
    icon: <FaShieldAlt />,
    title: "Institutional Cyber-Defense",
    description: "Strategic monitoring of the university's digital perimeter, ensuring institutional data integrity and unauthorized-access prevention.",
    deliverables: ["IP Surveillance Command", "24/7 Traffic Analysis", "Threat Mitigation Grid"]
  },
  {
    icon: <FaCloud />,
    title: "University Cloud Ecosystem",
    description: "Provisioning and managing localized and public cloud resources for departmental research and student academic workflows.",
    deliverables: ["Azure/Azure Arc Management", "Institutional Workspace Hub", "Provisioned Student Storage"]
  },
  {
    icon: <FaTerminal />,
    title: "Digital Lifecycle Management",
    description: "End-to-end technical oversight of university portals, result processing infrastructures, and alumni digital registries.",
    deliverables: ["Web Portal Architecture", "Secure Results Processing", "Technical Asset Audits"]
  },
  {
    icon: <FaUsersCog />,
    title: "Academic Collaboration Tools",
    description: "Empowering faculty and students through centralized collaboration suites and specialized instructional software licensing.",
    deliverables: ["Microsoft 365 Academic Grid", "Institutional Zoom/Team Hub", "Software Access Portals"]
  },
  {
    icon: <FaBookOpen />,
    title: "Library Information Systems",
    description: "Technical support for the university's digital library initiatives, including E-resource access and archival digitization.",
    deliverables: ["D-Space Implementation", "E-Journal Remote Access", "Digital Repository Audit"]
  }
];

const Services = () => {
  return (
    <div className="fade-in">
      
      {/* Institutional Hero */}
      <div className="institutional-hero" style={{ background: "linear-gradient(135deg, #0b3d91 0%, #1e3a8a 100%)" }}>
        <h1 className="gradient-text" style={{ background: "linear-gradient(to right, #fff, var(--accent-gold))", WebkitBackgroundClip: "text" }}>
            Institutional Digital Services Charter
        </h1>
        <p>
            The Digital Monitoring Cell (DMC) provides a specialized range of technological mandates to support JNTU-GV's academic, research, and administrative supremacy in the digital age.
        </p>
      </div>

      <div style={{ maxWidth: "1400px", margin: "-4rem auto 0", padding: "0 2rem" }}>
        
        {/* Mandate Cards Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", 
          gap: "2.5rem",
          paddingBottom: "5rem"
        }}>
          {serviceMandates.map((mandate, idx) => (
            <div key={idx} className="card" style={{ 
              display: "flex", 
              flexDirection: "column", 
              padding: "4rem", 
              background: "#fff",
              position: "relative"
            }}>
              
              <div style={{ 
                width: "80px", 
                height: "80px", 
                background: "rgba(11, 61, 145, 0.05)", 
                color: "var(--primary-blue)", 
                borderRadius: "2.5rem", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                fontSize: "2.5rem",
                marginBottom: "2.5rem"
              }}>
                {mandate.icon}
              </div>

              <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--primary-blue)" }}>{mandate.title}</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "1.15rem", marginBottom: "3rem", flex: 1, textAlign: "justify" }}>
                {mandate.description}
              </p>

              <div style={{ 
                background: "rgba(11, 61, 145, 0.02)", 
                padding: "2.5rem", 
                borderRadius: "2rem", 
                border: "1px dashed rgba(11, 61, 145, 0.1)" 
              }}>
                <h4 style={{ fontSize: "0.9rem", color: "var(--primary-blue)", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "1px" }}>Core Mandates</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {mandate.deliverables.map((item, i) => (
                    <span key={i} style={{ 
                      padding: "10px 20px", 
                      background: "#fff", 
                      borderRadius: "50px", 
                      color: "var(--primary-blue)", 
                      fontWeight: 700, 
                      fontSize: "0.85rem",
                      border: "1px solid #f1f5f9",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="card glass-dark" style={{ border: "2px solid rgba(11, 61, 145, 0.1)", textAlign: "center", padding: "6rem 4rem" }}>
           <h2 className="section-title">Technical Support & Escalation</h2>
           <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "var(--text-muted)" }}>
              The Digital Monitoring Cell operates as the centralized technical backbone for JNTU-GV. For specialized project support or administrative portal access, please contact the DMC office directly.
           </p>
           <button className="btn" style={{ marginTop: "3.5rem" }}>
              Submit Institutional Service Request
           </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
