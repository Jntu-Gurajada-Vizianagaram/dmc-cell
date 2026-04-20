import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LanIcon from "@mui/icons-material/Lan";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SecurityIcon from "@mui/icons-material/Security";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";

function Dmc() {
  const [isMobile] = React.useState(window.innerWidth < 1000);

  const strategicBenchmarks = [
    { text: "Establishing a secure and resilient digital infrastructure for the University." },
    { text: "Expansion of campus-wide high-speed connectivity through redundant fiber-optic ring infrastructure." },
    { text: "Ensuring compliance with UGC-mandated digital transparency and institutional disclosures." },
    { text: "Enhancing university administrative efficiency through integrated digital workflows and e-governance." },
  ];

  const functionalMandates = [
    {
      icon: <SecurityIcon style={{ color: "var(--primary-blue)", fontSize: 28 }} />,
      title: "Digital Defense & Security Ops",
      text: "Orchestrating state-of-the-art perimeter firewalls and centralized IP surveillance matrices to safeguard the University's high-value digital assets."
    },
    {
      icon: <LanIcon style={{ color: "var(--primary-blue)", fontSize: 28 }} />,
      title: "Connectivity Lifecycle Management",
      text: "Strategic oversight of the Campus Wide Network (CWN), ensuring zero-latency data transport for critical academic and examination workflows."
    },
    {
      icon: <ConfirmationNumberIcon style={{ color: "var(--primary-blue)", fontSize: 28 }} />,
      title: "Technical Procurement & Audits",
      text: "Technical vetting and procurement management of institutional hardware, software licenses, and specialized academic digital resources."
    }
  ];

  return (
    <div className="fade-in" style={{ maxWidth: 1200, margin: "2rem auto", width: "100%", padding: "0 1.5rem" }}>
      <div className="card" style={{ padding: isMobile ? "2rem 1.25rem" : "5rem", background: "#fff" }}>
        
        {/* Professional Academic Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "4rem" }}>
          <div style={{ padding: "0.75rem", background: "var(--bg-soft)", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
            <InfoOutlinedIcon style={{ fontSize: "2.5rem", color: "var(--primary-blue)" }} />
          </div>
          <div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--primary-blue)", margin: 0 }}>
              Strategic Digital Mandate
            </h1>
            <p style={{ color: "var(--text-muted)", margin: "4px 0 0 0", fontSize: "1rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
              Digital Monitoring Cell • Strategic Plan 2026-2030
            </p>
          </div>
        </div>

        {/* Executive Summary - Professional Light Tint */}
        <div style={{ 
          background: "var(--bg-soft)", 
          borderRadius: "1rem", 
          padding: "3rem", 
          marginBottom: "5rem",
          border: "1px solid var(--border-light)",
          borderLeft: "6px solid var(--primary-blue)"
        }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.25rem", color: "var(--primary-blue)" }}>Institutional Executive Summary</h3>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.7, margin: 0, color: "var(--text-main)", textAlign: "justify", fontWeight: 400 }}>
            The <strong>Digital Monitoring Cell (DMC)</strong> serves as the autonomous technological directorate of JNTU-GV. Our mission is to architect and secure the university's digital backbone, ensuring that every instructional, administrative, and research workflow is supported by high-availability infrastructure and next-gen security protocols.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "2rem", marginBottom: "6rem" }}>
          <div style={{ padding: "2.5rem", background: "#fff", borderRadius: "1rem", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem", color: "var(--primary-blue)" }}>
              <VisibilityIcon style={{ fontSize: "1.6rem" }} />
              <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700, textTransform: "uppercase" }}>Strategic Vision</h3>
            </div>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
              "To establish JNTU-GV as a leading ICT-enabled institution through consistent technological maturity and strategic digital governance."
            </p>
          </div>
          <div style={{ padding: "2.5rem", background: "#fff", borderRadius: "1rem", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem", color: "var(--primary-blue)" }}>
              <RocketLaunchIcon style={{ fontSize: "1.6rem" }} />
              <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700, textTransform: "uppercase" }}>Institutional Mission</h3>
            </div>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
              "Dedicated to providing reliable digital infrastructure uptime, executing institutional security audits, and fostering a digital-proficient instructional environment."
            </p>
          </div>
        </div>

        {/* Strategic Benchmarks */}
        <div style={{ marginBottom: "6rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "3rem" }}>
            <div style={{ width: "32px", height: "4px", background: "var(--accent-gold)", borderRadius: "2px" }}></div>
            <h3 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 700, color: "var(--text-main)" }}>Strategic Benchmarks</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
            {strategicBenchmarks.map((obj, i) => (
              <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "center", padding: "1.75rem", borderRadius: "12px", background: "var(--bg-soft)", border: "1px solid var(--border-light)" }}>
                <span style={{ height: "32px", width: "32px", minWidth: "32px", background: "var(--primary-blue)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 700, color: "#fff" }}>{i+1}</span>
                <p style={{ margin: 0, color: "var(--text-main)", fontSize: "1rem", fontWeight: 500, lineHeight: 1.4 }}>{obj.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Functional Mandates */}
        <div>
           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "3rem" }}>
            <div style={{ width: "32px", height: "4px", background: "var(--accent-gold)", borderRadius: "2px" }}></div>
            <h3 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 700, color: "var(--text-main)" }}>Functional Mandates</h3>
          </div>
          <div style={{ display: "grid", gap: "1.25rem" }}>
            {functionalMandates.map((item, idx) => (
              <div key={idx} style={{ 
                  display: "flex", 
                  alignItems: "flex-start", 
                  gap: "2rem", 
                  padding: "2.5rem", 
                  background: "#fff", 
                  borderRadius: "1rem", 
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-sm)"
              }}>
                <div style={{ padding: "1.25rem", background: "var(--bg-soft)", borderRadius: "12px", color: "var(--primary-blue)", border: "1px solid var(--border-light)" }}>{item.icon}</div>
                <div>
                  <h4 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "0.75rem" }}>
                    {item.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dmc;
