import React from "react";
import { FaBrain, FaLeaf, FaProjectDiagram, FaRocket, FaShieldAlt, FaUsersCog } from "react-icons/fa";

const roadmapMilestones = [
  {
    icon: <FaBrain />,
    title: "Automated Academic Governance",
    desc: "Integrating digital workflows into institutional processes to automate attendance reconciliation, infrastructure monitoring, and smart resource allocation.",
    timeline: "2026 - 2027"
  },
  {
    icon: <FaProjectDiagram />,
    title: "University Data Infrastructure",
    desc: "Deployment of a centralized University Data Center to provide secure storage and compute resources for departments and research scholars.",
    timeline: "2027 - 2028"
  },
  {
    icon: <FaUsersCog />,
    title: "Digital Classroom Integration",
    desc: "Modernizing the university instructional infrastructure with persistent digital smart boards and hybrid classroom connectivity.",
    timeline: "2026 - 2029"
  },
  {
    icon: <FaShieldAlt />,
    title: "Advanced Network Security",
    desc: "Establishing a specialized Network Monitoring Hub to safeguard the university's digital footprint against emerging cybersecurity threats.",
    timeline: "2028 - 2030"
  },
  {
    icon: <FaLeaf />,
    title: "Energy-Efficient ICT",
    desc: "Transitioning the DMC infrastructure to high-efficiency cooling and power management systems for a sustainable digital campus.",
    timeline: "Ongoing"
  },
  {
    icon: <FaRocket />,
    title: "Next-Gen Network Grid",
    desc: "Upgrading the campus fiber backbone to support ultra-high-speed specialized research tunnels and enterprise-grade connectivity.",
    timeline: "2029 - 2030"
  }
];

const Futureplans = () => {
  const [isMobile] = React.useState(window.innerWidth < 1000);

  return (
    <div className="fade-in" style={{ paddingBottom: "5rem", width: "100%" }}>
      
      {/* Professional Academic Roadmap Hero */}
      <section className="institutional-hero" style={{ padding: "6rem 2rem", background: "var(--bg-soft)", borderBottom: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: "1.25rem", color: "var(--primary-blue)" }}>
            Digital Roadmap 2030
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7, fontWeight: 500 }}>
            Charting the technological trajectory of JNTU-GV toward 2030, focusing on AI governance, hybrid instructional models, and mission-critical cyber defense.
          </p>
        </div>
      </section>

      {/* Roadmap Grid */}
      <div style={{ maxWidth: "1250px", margin: "4rem auto 0", padding: "0 1.5rem" }}>
        <div className="card" style={{ padding: isMobile ? "2rem 1.25rem" : "5rem", background: "#fff" }}>
          
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "0.75rem" }}>Strategic Benchmarks</h2>
            <div style={{ width: "64px", height: "4px", background: "var(--accent-gold)", margin: "0 auto", borderRadius: "2px" }}></div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem"
          }}>
            {roadmapMilestones.map((milestone, idx) => (
              <div key={idx} style={{
                  position: "relative",
                  background: "#ffffff",
                  borderRadius: "1rem",
                  padding: "3rem 2.5rem",
                  border: "1px solid var(--border-light)",
                  transition: "all 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "var(--shadow-sm)"
              }}
              className="roadmap-card"
              >
                <div style={{ 
                  width: "70px", 
                  height: "70px", 
                  background: "var(--bg-soft)", 
                  color: "var(--primary-blue)", 
                  borderRadius: "12px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  fontSize: "1.8rem",
                  marginBottom: "2rem",
                  border: "1px solid var(--border-light)"
                }}>
                  {milestone.icon}
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "1rem" }}>{milestone.title}</h3>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.6, color: "var(--text-muted)", margin: "0 0 2.5rem 0", flex: 1, textAlign: "justify" }}>{milestone.desc}</p>
                
                <div style={{ 
                  color: "var(--primary-blue)", 
                  fontWeight: 700, 
                  fontSize: "0.9rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 16px",
                  background: "var(--bg-soft)",
                  borderRadius: "8px",
                  border: "1px solid var(--border-light)"
                }}>
                   <span style={{ width: "8px", height: "8px", background: "var(--accent-gold)", borderRadius: "50%" }}></span>
                   Mandate Target: {milestone.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Mandate Vision */}
        <div style={{ 
          marginTop: "4rem", 
          padding: "5rem 3rem", 
          background: "var(--bg-soft)", 
          border: "1px solid var(--border-light)",
          borderRadius: "1rem", 
          textAlign: "center",
          color: "var(--text-main)",
          borderTop: "6px solid var(--primary-blue)"
        }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--primary-blue)" }}>Institutional Vision Mandate</h2>
          <p style={{ fontSize: "1.25rem", lineHeight: 1.8, maxWidth: "900px", margin: "0 auto", color: "var(--text-muted)", fontWeight: 400 }}>
             To establish JNTU-GV as a digitally-empowered institution where the Digital Monitoring Cell coordinates every instructional and administrative workflow with high efficiency and technical stability.
          </p>
        </div>
      </div>

      <style>{`
        .roadmap-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-md) !important;
          border-color: var(--primary-blue) !important;
        }
      `}</style>
    </div>
  );
};

export default Futureplans;
