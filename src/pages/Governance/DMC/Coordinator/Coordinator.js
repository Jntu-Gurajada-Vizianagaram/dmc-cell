import React from "react";
import { FaGraduationCap, FaNetworkWired, FaPaperPlane, FaUserShield } from "react-icons/fa";
import ControlImage from "../../../../Assets/CoordinatorsTeam/coordinator/Coordnitor_dmc.jpg";

const Coordinator = () => {
  return (
    <div className="fade-in" style={{ maxWidth: "1100px", margin: "2rem auto", width: "100%", padding: "0 1rem", color: "var(--text-main)", background: "#fff" }}>
      <div style={{ padding: "3rem 0" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>

          {/* Plain Profile Header */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "start",
            paddingBottom: "3rem",
            borderBottom: "1px solid var(--border-light)"
          }}>
            <div style={{ textAlign: "center" }}>
              <img src={ControlImage} alt="Coordinator" style={{ width: "100%", maxWidth: "300px", height: "auto", borderRadius: "4px", border: "1px solid var(--border-light)" }} />
              <div style={{ marginTop: "1rem", color: "var(--primary-blue)", fontWeight: 700, fontSize: "1.15rem" }}>
                Digital Monitoring Coordinator
              </div>
            </div>

            <div>
              <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "0.5rem" }}>Dr. Nalini Bodasingi</h1>
              <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.5 }}>
                Associate Professor, Department of Electronics & Communication Engineering<br />
                <strong>JNTU-GV  College of Engineering Vizianagaram</strong>
              </p>

              <div style={{ display: "grid", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "0.5rem 0" }}>
                  <FaGraduationCap color="var(--primary-blue)" />
                  <span style={{ fontWeight: 500 }}>15+ years of Academic Expertise (ECE)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "0.5rem 0" }}>
                  <FaNetworkWired color="var(--primary-blue)" />
                  <span style={{ fontWeight: 500 }}>Appointed DMC Coordinator: March 2026</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "0.75rem 0" }}>
                  <FaPaperPlane color="var(--primary-blue)" />
                  <a href="mailto:dmc@jntugv.edu.in" style={{ color: "var(--primary-blue)", fontWeight: 600, textDecoration: "none" }}>dmc@jntugv.edu.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Coordinator's Message - Plain Style */}
          <div>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "1.5rem" }}>Coordinator's Commitment</h3>
            <div style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-main)", textAlign: "justify" }}>
              <p style={{ marginBottom: "1.5rem" }}>
                "The Digital Monitoring Cell (DMC) serves as the primary technical coordinator for our university's mission to integrate digital governance into our academic framework. Since assuming the role of Coordinator in <strong>March 2026</strong>, my focus has been on the systematic monitoring and performance improvement of our institutional technical assets."
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                "We are continuously working to enhance the technical operations of JNTU-GV. Our goal is to maintain the university's standards of transparency and technical management, ensuring that our digital services are both resilient and compliant with national regulatory norms."
              </p>
              <p>
                "I am dedicated to working with our university administration and technical teams to strengthen our digital presence and provide a secure, efficient instructional environment for all faculty and students."
              </p>
            </div>
          </div>

          {/* Administrative Archive - Plain Professional List */}
          <div>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "2rem" }}>Administrative Experience</h3>
            <div style={{ display: "flex", flexDirection: "column", border: "1px solid var(--border-light)", borderRadius: "4px" }}>
              {[
                {
                  role: "Additional Controller of Examinations",
                  dept: "University Examination Section",
                  period: "2024 - 2026",
                  desc: "Managing examination scheduling, evaluations, and result processing for II B.Pharmacy and I B.Pharmacy programs."
                },
                {
                  role: "Coordinator, WEGC",
                  dept: "Women Empowerment & Grievance Cell",
                  period: "Ongoing",
                  desc: "Orchestrating welfare initiatives and developmental programs for women stakeholders."
                },
                {
                  role: "Head of Department (HoD)",
                  dept: "Electronics & Communication Engineering",
                  period: "2022 - 2024",
                  desc: "Leading the academic and administrative operations of the ECE department."
                },
                {
                  role: "Officer In-charge of Examinations",
                  dept: "Institutional Examination Cell",
                  period: "2022 - 2024",
                  desc: "Managing university academic evaluations and result reconciliations."
                },
                {
                  role: "Deputy Warden",
                  dept: "University Hostels",
                  period: "2016 - 2021",
                  desc: "Overseeing student residential welfare and facility management."
                }
              ].map((exp, i, arr) => (
                <div key={i} style={{
                  padding: "1.5rem 2rem",
                  borderBottom: i === arr.length - 1 ? "none" : "1px solid var(--border-light)",
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: "2rem",
                  alignItems: "start"
                }}>
                  <div style={{ fontWeight: 700, color: "var(--text-muted)", fontSize: "0.95rem" }}>{exp.period}</div>
                  <div>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.25rem" }}>{exp.role}</h4>
                    <p style={{ fontSize: "0.95rem", color: "var(--primary-blue)", fontWeight: 600, marginBottom: "0.5rem" }}>{exp.dept}</p>
                    {exp.desc && <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{exp.desc}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Committee List */}
            <div style={{ marginTop: "3.5rem" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1.5rem", fontSize: "1.15rem", fontWeight: 700 }}>Committees & Institutional Service</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["Anti-Ragging Committee Member", "Stock Verification Committee", "Alumni Coordinator", "M.Tech Project Coordinator", "Cultural Coordinator", "University Sports Committee Member"].map((tag, idx) => (
                  <span key={idx} style={{
                    padding: "6px 14px",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    border: "1px solid var(--border-light)",
                    color: "var(--text-muted)",
                    background: "#fcfcfc"
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            borderTop: "1px solid var(--border-light)",
            paddingTop: "4rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem"
          }}>
            <div>
              <h4 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "12px" }}>
                <FaGraduationCap /> Academic Overview
              </h4>
              <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                {["Associate Professor in Department of ECE", "Specialization in VLSI and Signal Processing", "Focus on Institutional Digital Coordination"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "start", gap: "12px", marginBottom: "1rem", color: "var(--text-muted)", fontSize: "1.05rem" }}>
                    <span style={{ marginTop: "10px", width: "6px", height: "6px", background: "var(--primary-blue)", borderRadius: "50%" }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "12px" }}>
                <FaUserShield /> Operational Mandate
              </h4>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
                Coordinating the monitoring and maintenance of <strong>University ICT Infrastructure</strong>, ensuring high availability of digital services and alignment with the University's technical governance framework.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Coordinator;
