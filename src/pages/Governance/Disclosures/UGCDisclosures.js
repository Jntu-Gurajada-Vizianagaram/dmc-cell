import React from 'react';
import { FaGraduationCap, FaShieldAlt, FaComments, FaCheckDouble, FaFileContract, FaUniversity } from 'react-icons/fa';
import UGCImage from "../../../Assets/Institutional/ugc_institutional_disclosure_emblem_1774876932544.png";

const UGCDisclosures = () => {
   return (
      <div className="fade-in" style={{ paddingBottom: "5rem", fontFamily: "'Inter', sans-serif" }}>

         {/* UGC Hero */}
         <section className="institutional-hero" style={{ padding: "8rem 2rem", background: "linear-gradient(135deg, #0b3d91 0%, #051937 100%)", borderRadius: "2rem" }}>
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, marginBottom: "1.5rem", color: "var(--accent-gold)" }}>
                  Public Self-Disclosure Portal
               </h1>
               <p style={{ fontSize: "1.25rem", opacity: 0.9, maxWidth: "800px", margin: "0 auto", lineHeight: 1.8, color: "#fff", fontWeight: 300 }}>
                  In alignment with University Grants Commission (UGC) 2024 mandates for Higher Education Institutions.
               </p>
            </div>
         </section>

         <div style={{ maxWidth: "1300px", margin: "-5rem auto 0", padding: "0 1.5rem" }}>

            {/* Hub Header with Image */}
            <div className="card" style={{ padding: "0", background: "#fff", borderRadius: "3rem", border: "1px solid #e0e7ef", overflow: "hidden", marginBottom: "4rem" }}>
               <div style={{ height: "300px", width: "100%", overflow: "hidden" }}>
                  <img src={UGCImage} alt="Institutional Disclosure" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.9) saturate(1.1)" }} />
               </div>
               <div style={{ padding: "5rem", textAlign: "center" }}>
                  <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#0b3d91", marginBottom: "1.5rem" }}>Institutional Quality & Compliance</h2>
                  <p style={{ fontSize: "1.3rem", lineHeight: 2, color: "#475569", maxWidth: "950px", margin: "0 auto", fontWeight: 300 }}>
                     Jawaharlal Nehru Technological University Gurajada Vizianagaram is committed to 100% transparency. This portal serves as the unified registry for mandatory public disclosures according to the UGC (Redressal of Grievances of Students) Regulations, and other institutional quality mandates.
                  </p>
               </div>
            </div>

            {/* Mandatory Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", marginBottom: "5rem" }}>
               {[
                  { icon: <FaCheckDouble />, title: "Institutional ID", desc: "Comprehensive University documentation and mission statement.", btn: "View Statutory Documents" },
                  { icon: <FaGraduationCap />, title: "Admissions & Fees", desc: "Transparent fee structures and institutional admission policies.", btn: "View Fee Matrix" },
                  { icon: <FaComments />, title: "Grievance Redressal", desc: "Integrated e-Samadhaan portal access for academic grievances.", btn: "Submit Grievance" },
                  { icon: <FaShieldAlt />, title: "Anti-Ragging Cell", desc: "24/7 Helpline and complaint access for institutional safety.", btn: "View Safety Protocols" }
               ].map((item, i) => (
                  <div key={i} className="card" style={{ padding: "3.5rem 2.5rem", textAlign: "center", border: "1.5px solid #f1f5f9", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                     <div style={{ padding: "1.2rem", background: "rgba(11, 61, 145, 0.05)", borderRadius: "1.5rem", width: "80px", height: "80px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", color: "#0b3d91" }}>
                        {item.icon}
                     </div>
                     <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#1e293b", margin: 0 }}>{item.title}</h3>
                     <p style={{ color: "#64748b", fontSize: "1.05rem", lineHeight: 1.6, flex: 1 }}>{item.desc}</p>
                     <button className="btn" style={{ background: "transparent", border: "2px solid #0b3d91", color: "#0b3d91", borderRadius: "1rem", fontWeight: 800, padding: "1rem" }}>{item.btn}</button>
                  </div>
               ))}
            </div>

            {/* Document Repository */}
            <div style={{ background: "#f8fafc", padding: "5rem", borderRadius: "3rem", border: "1px solid #e2e8f0" }}>
               <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "4rem" }}>
                  <div style={{ width: "50px", height: "4px", background: "var(--accent-gold)", borderRadius: "2px" }}></div>
                  <h3 style={{ margin: 0, fontSize: "2.2rem", fontWeight: 900, color: "#0b3d91" }}>Mandatory Institutional Repositories</h3>
               </div>

               <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem" }}>
                  <div className="card" style={{ padding: "4rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
                     <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "#0b3d91" }}>
                        <FaFileContract size={30} />
                        <h4 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 800 }}>Academic Quality Reports</h4>
                     </div>
                     <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {["Academic Calendar 2024-25", "Research & Innovation Audit", "Internal Quality Assurance (IQAC) Report"].map((doc, i) => (
                           <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#475569", fontWeight: 600 }}>
                              <span style={{ width: "8px", height: "8px", background: "var(--accent-gold)", borderRadius: "50%" }}></span>
                              {doc}
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="card" style={{ padding: "4rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
                     <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "#0b3d91" }}>
                        <FaUniversity size={30} />
                        <h4 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 800 }}>Statutory Disclosures</h4>
                     </div>
                     <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {["Act and Statutes of JNTU-GV", "Financial Audit Statements", "Land and Building Safety Certificates"].map((doc, i) => (
                           <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#475569", fontWeight: 600 }}>
                              <span style={{ width: "8px", height: "8px", background: "var(--accent-gold)", borderRadius: "50%" }}></span>
                              {doc}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
};

export default UGCDisclosures;
