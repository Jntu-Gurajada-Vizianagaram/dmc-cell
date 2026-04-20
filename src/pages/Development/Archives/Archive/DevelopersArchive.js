import React from 'react';
import { FaCode, FaProjectDiagram, FaTerminal, FaUsersCog } from 'react-icons/fa';
import BlueprintImage from "../../../../Assets/Institutional/institutional_digital_blueprint_archive_1774876831503.png";
import dmcLogo from "../../../../Assets/dmc-logo.2da3359114a0f2905c6d.jpg";

const DevelopersArchive = () => {
  return (
    <div className="fade-in" style={{ paddingBottom: "5rem", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Archive Hero */}
      <section className="institutional-hero" style={{ padding: "8rem 2rem", background: "linear-gradient(135deg, #051937 0%, #0b3d91 100%)", borderRadius: "2rem", position: "relative" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ position: "absolute", top: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
             <img src={dmcLogo} alt="DMC" style={{ width: "100px", borderRadius: "1.5rem", border: "4px solid rgba(255,255,255,0.1)", boxShadow: "var(--shadow-lg)" }} />
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, marginBottom: "1.5rem", color: "var(--accent-gold)", marginTop: "4rem" }}>
            Technical Roll of Honor
          </h1>
          <p style={{ fontSize: "1.25rem", opacity: 0.9, maxWidth: "800px", margin: "0 auto", lineHeight: 1.8, color: "#fff", fontWeight: 300 }}>
             Honoring the architects, developers, and technical visionaries who have persistently engineered the JNTU-GV digital ecosystem.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "1200px", margin: "-5rem auto 0", padding: "0 1.5rem" }}>
        
        {/* Archive Overview with Blueprint */}
        <div className="card" style={{ padding: "0", background: "#fff", borderRadius: "3rem", border: "1px solid #e0e7ef", overflow: "hidden", marginBottom: "4rem" }}>
           <div style={{ height: "350px", width: "100%", overflow: "hidden" }}>
              <img src={BlueprintImage} alt="Digital Blueprint" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) saturate(1.2)" }} />
           </div>
           <div style={{ padding: "5rem", textAlign: "center" }}>
              <h2 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#0b3d91", marginBottom: "2rem" }}>Engineering the University Core</h2>
              <p style={{ fontSize: "1.25rem", lineHeight: 2, color: "#475569", maxWidth: "850px", margin: "0 auto", fontWeight: 300, textAlign: "justify" }}>
                 The development of JNTU-GV's digital infrastructure is a perpetual endeavor. From the initial V1 architecture to the current V3.0 Academic Premium framework, this archive catalogs the technical leadership and multi-generational contributions of our senior engineering teams.
              </p>
           </div>
        </div>

        {/* Timeline of Contribution */}
        <div style={{ display: "grid", gap: "2.5rem" }}>
          {[
            { 
              title: "Institutional Leadership", 
              icon: <FaUsersCog />, 
              color: "#0b3d91", 
              desc: "The coordination and strategic oversight that ensures every digital project aligns with the university's overarching governance mandates." 
            },
            { 
              title: "Full-Stack Engineering", 
              icon: <FaCode />, 
              color: "#facc15", 
              desc: "The core architects who engineered the high-availability portals, results processing grids, and administrative ERP systems." 
            },
            { 
              title: "Infrastructure & Networking", 
              icon: <FaProjectDiagram />, 
              color: "#3b82f6", 
              desc: "Professionals dedicated to the physical and logical integrity of the campus fiber ring and unified wireless matrices." 
            },
            { 
              title: "Legacy Systems Maintenance", 
              icon: <FaTerminal />, 
              color: "#1e293b", 
              desc: "Honoring those who maintain critical legacy databases and ensure seamless data transitions across technical upgrades." 
            }
          ].map((item, idx) => (
            <div key={idx} style={{
              background: "#ffffff",
              borderRadius: "2rem",
              padding: "4rem",
              border: "1px solid #f1f5f9",
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: "2.5rem",
              alignItems: "center",
              boxShadow: "0 15px 40px rgba(0,0,0,0.02)",
              transition: "transform 0.3s ease"
            }}
            className="archive-card"
            >
              <div style={{ 
                width: "80px", 
                height: "80px", 
                background: "rgba(11, 61, 145, 0.05)", 
                color: item.color, 
                borderRadius: "1.5rem", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                fontSize: "2.5rem",
                border: "1px solid #f1f5f9"
              }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 900, color: "#1e293b", marginBottom: "1rem" }}>{item.title}</h3>
                <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "#64748b", margin: 0, fontWeight: 500 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Registry Call */}
        <div style={{ 
          marginTop: "4rem", 
          padding: "5rem 4rem", 
          background: "linear-gradient(135deg, #051937 0%, #0b3d91 100%)", 
          borderRadius: "3rem", 
          textAlign: "center",
          color: "#fff",
          boxShadow: "0 25px 50px rgba(11, 61, 145, 0.2)"
        }}>
           <h3 style={{ fontSize: "2.2rem", fontWeight: 900, marginBottom: "1.5rem", color: "var(--accent-gold)" }}>Persistent Contributions Archive</h3>
           <p style={{ fontSize: "1.2rem", opacity: 0.8, maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
              This registry is updated annually following the Institutional technical audit. To view the detailed Roll of Honor for specific technical wings, please visit the Digital Hub.
           </p>
        </div>
      </div>

      <style>{`
        .archive-card:hover {
          transform: scale(1.02);
          border-color: var(--accent-gold) !important;
          box-shadow: 0 30px 60px rgba(11, 61, 145, 0.06) !important;
        }
      `}</style>
    </div>
  );
};

export default DevelopersArchive;
