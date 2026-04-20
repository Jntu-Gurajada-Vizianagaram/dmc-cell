import React, { useState } from "react";
import { FaEnvelope, FaHistory, FaMedal, FaQuoteLeft } from "react-icons/fa";
import coordinatorImage from "../../DMC/Coordinator/former_coordinator.jpg";
import designerImage from "../../DMC/Secretariat/former_designer.jpg";

const formerCoordinators = [
  {
    name: "Mr. Anil Wurity",
    tenure: "Inaugural Co-ordinator (2020 - 2023)",
    designation: "Assistant Professor, Dept. of Information Technology",
    email: "anilwurity.it@jntugvcev.edu.in",
    image: coordinatorImage,
    bio: "Served as the founding head of the Digital Monitoring Cell. Instrumental in architecting the university's initial digital governance framework and the core surveillance grid.",
    qualifications: ["M.Tech in CST (GITAM)", "B.Tech in IT (JNTU-H)"]
  }
];

const formerDesigners = [
  {
    name: "Mattaparthi Niranjan",
    tenure: "Founding Lead Designer (2020 - 2024)",
    designation: "Primary Web Architect & Infrastructure Lead",
    email: "niranjan@jntugv.edu.in",
    image: designerImage,
    bio: "The vision behind JNTU-GV's digital identity. Architected 10+ departmental portals and established the university's custom design system.",
    projects: ["Main University Portal", "R&D Directorate System", "Academic Audit Grid"]
  }
];

const Former = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile] = useState(window.innerWidth < 1000);

  return (
    <div className="fade-in" style={{ maxWidth: 1200, margin: "2rem auto", width: "100%", padding: "0 1.5rem" }}>
      <div className="card" style={{ padding: isMobile ? "2rem 1.25rem" : "5.5rem", background: "#fff" }}>

        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div style={{ display: "inline-flex", padding: "0.85rem", background: "var(--bg-soft)", borderRadius: "12px", border: "1px solid var(--border-light)", color: "var(--primary-blue)", marginBottom: "1.75rem" }}>
            <FaHistory size={32} />
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "var(--primary-blue)", margin: 0, letterSpacing: "-1px" }}>
            Institutional Roll of Honor
          </h1>
          <p style={{ color: "var(--text-muted)", margin: "8px 0 0 0", fontSize: "1.05rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
            Honoring the Architects and Leaders of the JNTU-GV Digital Legacy
          </p>
        </div>

        {/* Institutional Switcher */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "6rem" }}>
          <div style={{ display: "flex", background: "var(--bg-soft)", padding: "10px", borderRadius: "1rem", border: "1px solid var(--border-light)" }}>
            <button
              onClick={() => setActiveTab(0)}
              style={{
                padding: "0.85rem 2rem",
                borderRadius: "12px",
                border: "none",
                background: activeTab === 0 ? "var(--primary-blue)" : "transparent",
                color: activeTab === 0 ? "#fff" : "var(--text-muted)",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              Leadership Archive
            </button>
            <button
              onClick={() => setActiveTab(1)}
              style={{
                padding: "0.85rem 2rem",
                borderRadius: "12px",
                border: "none",
                background: activeTab === 1 ? "var(--primary-blue)" : "transparent",
                color: activeTab === 1 ? "#fff" : "var(--text-muted)",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              Technical Contributors
            </button>
          </div>
        </div>

        {/* Honor Grid Content */}
        <div className="fade-in">
          {(activeTab === 0 ? formerCoordinators : formerDesigners).map((person, idx) => (
            <div key={idx} style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "330px 1fr",
              gap: "4.5rem",
              alignItems: "start",
              background: "var(--bg-soft)",
              padding: "4.5rem",
              borderRadius: "1rem",
              border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-sm)"
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <img src={person.image} alt={person.name} style={{ width: "100%", maxWidth: "300px", borderRadius: "1rem", border: "8px solid #fff", boxShadow: "var(--shadow-md)" }} />
                  <div style={{ position: "absolute", top: "-15px", right: "-15px", background: "var(--accent-gold)", width: "54px", height: "54px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-blue)", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}>
                    <FaMedal size={24} />
                  </div>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: "2.4rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.5rem", letterSpacing: "-1px" }}>{person.name}</h2>
                <div style={{ color: "var(--accent-gold)", fontWeight: 700, fontSize: "0.95rem", textTransform: "uppercase", marginBottom: "1.5rem", letterSpacing: "1.5px" }}>{person.tenure}</div>
                <p style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "2.5rem", lineHeight: 1.6 }}>{person.designation}</p>

                <div style={{ background: "#fff", padding: "2.5rem", borderRadius: "12px", border: "1px solid var(--border-light)", marginBottom: "2.5rem", position: "relative" }}>
                  <FaQuoteLeft style={{ position: "absolute", top: "-12px", left: "20px", fontSize: "1.8rem", color: "var(--accent-gold)", opacity: 0.2 }} />
                  <h5 style={{ color: "var(--primary-blue)", margin: "0 0 12px 0", fontSize: "1rem", fontWeight: 700, textTransform: "uppercase" }}>Executive Legacy</h5>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "justify", fontWeight: 400 }}>{person.bio}</p>
                </div>

                {person.projects ? (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {person.projects.map(p => (
                      <span key={p} style={{ background: "#fff", color: "var(--primary-blue)", padding: "10px 20px", borderRadius: "8px", fontWeight: 600, fontSize: "0.85rem", border: "1px solid var(--border-light)" }}>{p}</span>
                    ))}
                  </div>
                ) : (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {person.qualifications.map(q => (
                      <span key={q} style={{ background: "var(--accent-gold)", color: "var(--primary-blue)", padding: "10px 20px", borderRadius: "8px", fontWeight: 600, fontSize: "0.85rem" }}>{q}</span>
                    ))}
                  </div>
                )}

                <a href={`mailto:${person.email}`} style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginTop: "3rem", color: "var(--primary-blue)", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
                  <FaEnvelope /> {person.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Archive Note */}
        <div style={{ marginTop: "5rem", textAlign: "center", borderTop: "1px solid var(--border-light)", paddingTop: "4rem" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7, fontWeight: 500 }}>
            The DMC Legacy Archive preserves the technical and creative contributions of our core founding team. These professionals established the bedrock of the university's digital transformation.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Former;
