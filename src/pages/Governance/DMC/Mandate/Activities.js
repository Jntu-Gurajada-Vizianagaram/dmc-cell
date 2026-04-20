import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CodeIcon from "@mui/icons-material/Code";
import GavelIcon from "@mui/icons-material/Gavel";
import LanIcon from "@mui/icons-material/Lan";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import SecurityIcon from "@mui/icons-material/Security";
import ShieldIcon from "@mui/icons-material/Shield";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WebIcon from "@mui/icons-material/Web";
import { Fade } from "@mui/material";
import React, { useState } from "react";

const domainData = [
  {
    domain: "I. Administrative & Governance Domain",
    icon: <AdminPanelSettingsIcon style={{ fontSize: "2.5rem" }} />,
    color: "#0b3d91",
    activities: [
      {
        title: "Compliance & Policy Audits",
        icon: <GavelIcon />,
        points: [
          "Ensuring institutional compliance with UGC and State-level IT governance mandates and data privacy regulations.",
          "Enforcing University IT security policies, procedures, and usage guidelines to promote institutional accountability.",
        ],
      },
      {
        title: "Surveillance & Security Intelligence",
        icon: <SecurityIcon />,
        points: [
          "Strategic monitoring of the University's digital infrastructure to detect and preempt unauthorized access or cyber threats.",
          "Management of institutional IP surveillance arrays across academic and residential zones to enhance campus safety.",
        ],
      },
    ]
  },
  {
    domain: "II. Technical Infrastructure Domain",
    icon: <LanIcon style={{ fontSize: "2.5rem" }} />,
    color: "#f59e0b",
    activities: [
      {
        title: "Network & Core Administration",
        icon: <LanIcon />,
        points: [
          "Managing the Campus Wide Network (CWN), including enterprise routers, managed switches, and centralized firewalls.",
          "Executing mission-critical maintenance: software orchestration, security patch management, and automated system backups.",
        ],
      },
      {
        title: "Cyber-Defense Frameworks",
        icon: <ShieldIcon />,
        points: [
          "Deployment of multi-layered cybersecurity defense mechanisms, including enterprise encryption and IDS/IPS systems.",
          "Conducting comprehensive technical audits and vulnerability risk assessments (VAPT) for institutional digital assets.",
        ],
      },
      {
        title: "Incident Response Protocols",
        icon: <ReportProblemIcon />,
        points: [
          "Rapid execution of incident response protocols for system outages, data breaches, or hardware failures.",
          "Performing root-cause analysis and digital forensics to fortify post-incident institutional resilience.",
        ],
      },
    ]
  },
  {
    domain: "III. Developmental & Support Domain",
    icon: <CodeIcon style={{ fontSize: "2.5rem" }} />,
    color: "#1e293b",
    activities: [
      {
        title: "Institutional Portal Management",
        icon: <WebIcon />,
        points: [
          "Full-stack management of the University's portal, department websites, and centralized institutional communication channels.",
          "Implementing Content Management Systems (CMS) guidelines to ensure accessibility and quality control.",
        ],
      },
      {
        title: "Academic Technical Services",
        icon: <SupportAgentIcon />,
        points: [
          "Providing Tier-2 technical support for faculty and staff on specialized academic software and institutional digital tools.",
          "Organizing workshops on cybersecurity awareness and modern IT best practices for university stakeholders.",
        ],
      },
    ]
  }
];

function Activities() {
  const [isMobile] = useState(window.innerWidth < 1000);

  return (
    <div className="fade-in" style={{ maxWidth: 1200, margin: "2rem auto", width: "100%", padding: "0 1.5rem" }}>
      <div className="card" style={{ padding: isMobile ? "2rem 1.25rem" : "5rem", background: "#fff" }}>
        
        {/* Professional Academic Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "4.5rem" }}>
          <div style={{ padding: "0.85rem", background: "var(--bg-soft)", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
             <AdminPanelSettingsIcon style={{ fontSize: "2.8rem", color: "var(--primary-blue)" }} />
          </div>
          <div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontWeight: 700, color: "var(--primary-blue)", margin: 0 }}>
              Operational Mandates
            </h1>
            <p style={{ color: "var(--text-muted)", margin: "4px 0 0 0", fontSize: "1rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
              Digital Monitoring Cell • Institutional Governance Framework
            </p>
          </div>
        </div>
        
        <div style={{ 
          background: "var(--bg-soft)", 
          borderRadius: "1rem", 
          padding: "3rem", 
          marginBottom: "6rem", 
          fontSize: "1.15rem", 
          lineHeight: 1.7, 
          color: "var(--text-main)",
          border: "1px solid var(--border-light)",
          textAlign: "justify"
        }}>
          The <strong>Digital Monitoring Cell (DMC)</strong> serves as the technological backbone of JNTU-GV, executing a multi-faceted range of mandates categorized into three primary institutional domains. These activities ensure the operational excellence, security, and digital empowerment of the University ecosystem.
        </div>

        {domainData.map((domain, domainIdx) => (
          <div key={domainIdx} style={{ marginBottom: "6rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "3rem" }}>
              <div style={{ color: domain.color }}>{domain.icon}</div>
              <h3 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 700, color: "var(--text-main)" }}>{domain.domain}</h3>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
              {domain.activities.map((activity, idx) => (
                <Fade in timeout={500 + idx * 200} key={idx}>
                  <div style={{
                    background: "#ffffff",
                    borderRadius: "1rem",
                    padding: "2.5rem",
                    border: "1px solid var(--border-light)",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition: "transform 0.3s ease"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                      <div style={{ padding: "0.75rem", background: "var(--bg-soft)", color: "var(--primary-blue)", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
                        {activity.icon}
                      </div>
                      <h4 style={{ fontWeight: 700, margin: 0, color: "var(--primary-blue)", fontSize: "1.2rem" }}>{activity.title}</h4>
                    </div>

                    <div style={{ flex: 1 }}>
                      {activity.points.map((point, i) => (
                        <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "1.25rem" }}>
                          <span style={{ width: "8px", height: "8px", background: "var(--accent-gold)", borderRadius: "50%", marginTop: "8px", flexShrink: 0 }}></span>
                          <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, fontWeight: 500 }}>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        ))}

        {/* Accountability Footer */}
        <div style={{ 
          marginTop: "4rem", 
          padding: "4rem", 
          background: "var(--bg-soft)", 
          border: "1px solid var(--border-light)",
          borderRadius: "1rem", 
          textAlign: "center",
          color: "var(--text-main)",
          borderTop: "6px solid var(--primary-blue)"
        }}>
           <h3 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "1.25rem", color: "var(--primary-blue)" }}>Quality Assurance & Accountability</h3>
           <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7, fontWeight: 500 }}>
              All activities of the DMC are audited quarterly to ensure strict adherence to institutional quality standards and data privacy mandates. For technical facilitation, please submit a formal request via the administrative portal.
           </p>
        </div>

      </div>
    </div>
  );
}

export default Activities;
