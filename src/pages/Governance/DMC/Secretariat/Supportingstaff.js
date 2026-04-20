import React from "react";
import { FaEnvelope, FaHistory, FaProjectDiagram, FaTerminal } from "react-icons/fa";
import { Link } from "react-router-dom";

const Supportingstaff = () => {
  return (
    <div className="fade-in" style={{ maxWidth: 1100, margin: "2rem auto", width: "100%", padding: "0 1.5rem" }}>
      <div className="card" style={{ padding: "5rem", background: "#fff" }}>
        
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h1 style={{ fontSize: "2.8rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "0.75rem", letterSpacing: "-1px" }}>
              Technical Secretariat
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
              The Operational Force behind the Digital Monitoring Cell
          </p>
          <div style={{ width: "64px", height: "4px", background: "var(--accent-gold)", margin: "1.5rem auto", borderRadius: "2px" }}></div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem" }}>
          
          {/* Main Technical Officer Profile */}
          <div style={{ 
            background: "var(--bg-soft)", 
            padding: "3.5rem", 
            borderRadius: "1rem", 
            border: "1px solid var(--border-light)",
            textAlign: "center"
          }}>
            <div style={{ 
              width: "180px", 
              height: "180px", 
              margin: "0 auto 2.5rem", 
              background: "var(--primary-blue)", 
              borderRadius: "1rem", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              boxShadow: "var(--shadow-md)",
              color: "#fff"
            }}>
               <FaTerminal size={70} />
            </div>
            
            <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.25rem" }}>Mr. Anil Sinthu</h3>
            <h4 style={{ fontSize: "0.95rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "2.5rem" }}>
                Data Processing Officer (DPO)
            </h4>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
               <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#fff", padding: "1.1rem", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
                  <FaProjectDiagram color="var(--primary-blue)" />
                  <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-main)" }}>ERP & Result Processing Lead</span>
               </div>
               <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#fff", padding: "1.1rem", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
                  <FaEnvelope color="var(--primary-blue)" />
                  <a href="mailto:dpo@jntugv.edu.in" style={{ fontWeight: 700, textDecoration: "none", color: "var(--primary-blue)" }}>dpo@jntugv.edu.in</a>
               </div>
            </div>

            <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem", fontStyle: "italic", fontWeight: 500 }}>
              "Responsible for the high-fidelity processing of university permanent records and institutional digital audits."
            </p>
          </div>

          {/* Role Mandate / Charter */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
             <div className="card" style={{ padding: "2.5rem", margin: 0, background: "#fff" }}>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "1.5rem" }}>Operational Mandates</h4>
                <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                   {["Institutional Data Encryption", "Unified ERP Maintenance", "Academic Record Archival", "Network Asset Inventory"].map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.9rem", fontWeight: 500, color: "var(--text-muted)", fontSize: "0.95rem" }}>
                        <span style={{ width: "8px", height: "8px", background: "var(--accent-gold)", borderRadius: "50%" }}></span>
                        {item}
                      </li>
                   ))}
                </ul>
             </div>
             
             <div style={{ padding: "2.5rem", background: "var(--bg-soft)", borderRadius: "1rem", color: "var(--text-main)", border: "1px solid var(--border-light)", borderTop: "4px solid var(--primary-blue)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "1rem" }}>Technical Contributions</h4>
                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2rem", fontWeight: 400 }}>
                    The Technical Secretariat has successfully transitioned JNTU-GV to a redundant L3 networking grid and automated 90% of administrative file tracking, ensuring full compliance with digital governance norms.
                </p>
                <Link to="/dmc/former-leadership" className="btn btn-outline" style={{ background: "#fff", width: "100%", justifyContent: "center" }}>
                    <FaHistory style={{ marginRight: "10px" }} /> Roll of Honor
                </Link>
             </div>
          </div>

        </div>

      </div>
    </div>

  );
};

export default Supportingstaff;
