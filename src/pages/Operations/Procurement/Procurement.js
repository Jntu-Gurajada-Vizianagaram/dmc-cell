import React from 'react';
import { FaFileInvoiceDollar, FaCheckCircle, FaSearchDollar, FaNetworkWired, FaGavel, FaShieldAlt } from 'react-icons/fa';
import ProcurementImage from "../../../Assets/Institutional/institutional_procurement_documentation_1774876883268.png";

const Procurement = () => {
  return (
    <div className="fade-in" style={{ paddingBottom: "5rem", fontFamily: "'Inter', sans-serif" }}>

      {/* Procurement Hero */}
      <section className="institutional-hero" style={{ padding: "8rem 2rem", background: "linear-gradient(135deg, #0b3d91 0%, #051937 100%)", borderRadius: "2rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, marginBottom: "1.5rem", color: "var(--accent-gold)" }}>
            Procurement Transparency Portal
          </h1>
          <p style={{ fontSize: "1.25rem", opacity: 0.9, maxWidth: "800px", margin: "0 auto", lineHeight: 1.8, color: "#fff", fontWeight: 300 }}>
            Institutional oversight for the acquisition of digital assets and internet feasibility reports at JNTU-GV.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "1250px", margin: "-5rem auto 0", padding: "0 1.5rem" }}>

        {/* Hub Header with Image */}
        <div className="card" style={{ padding: "0", background: "#fff", borderRadius: "3rem", border: "1px solid #e0e7ef", overflow: "hidden", marginBottom: "4rem" }}>
          <div style={{ height: "350px", width: "100%", overflow: "hidden" }}>
            <img src={ProcurementImage} alt="Institutional Procurement" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8) contrast(1.1)" }} />
          </div>
          <div style={{ padding: "5rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#0b3d91", marginBottom: "1.5rem" }}>Digital Infrastructure Acquisition</h2>
            <p style={{ fontSize: "1.25rem", lineHeight: 2, color: "#475569", maxWidth: "850px", margin: "0 auto", fontWeight: 300 }}>
              The Digital Monitoring Cell acts as the technical vetting authority for all ICT-related procurement. This portal ensures institutional transparency, technical audit compliance, and strict adherence to university governance norms for digital asset lifecycle management.
            </p>
          </div>
        </div>

        {/* Action Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "2.5rem", marginBottom: "4rem" }}>
          <div className="card" style={{ padding: "4rem", display: "flex", flexDirection: "column", gap: "2rem", border: "1.5px solid #f1f5f9" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ padding: "1rem", background: "rgba(11, 61, 145, 0.05)", borderRadius: "1rem" }}><FaFileInvoiceDollar size={35} color="#0b3d91" /></div>
              <h3 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 900, color: "#1e293b" }}>Active Digital Tenders</h3>
            </div>
            <p style={{ color: "#64748b", fontSize: "1.1rem", lineHeight: 1.8, flex: 1 }}>
              Transparency in digital resource procurement through automated institutional tender processes and vendor vetting.
            </p>
            <button className="btn" style={{ background: "#0b3d91", color: "#fff", borderRadius: "1rem", padding: "1.2rem", fontWeight: 800 }}>Explore Tenders Registry</button>
          </div>

          <div className="card" style={{ padding: "4rem", display: "flex", flexDirection: "column", gap: "2rem", border: "1.5px solid #f1f5f9" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ padding: "1rem", background: "rgba(11, 61, 145, 0.05)", borderRadius: "1rem" }}><FaNetworkWired size={35} color="#0b3d91" /></div>
              <h3 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 900, color: "#1e293b" }}>Internet Feasibility Reports</h3>
            </div>
            <p style={{ color: "#64748b", fontSize: "1.1rem", lineHeight: 1.8, flex: 1 }}>
              Ongoing technical assessments for the expansion of campus-wide multi-link bandwidth across new academic wings.
            </p>
            <button className="btn" style={{ background: "#0b3d91", color: "#fff", borderRadius: "1rem", padding: "1.2rem", fontWeight: 800 }}>View Technical Audits</button>
          </div>
        </div>

        {/* Procedural Framework */}
        <div style={{ background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)", padding: "5rem", borderRadius: "3rem", border: "1px solid #e2e8f0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "3.5rem" }}>
            <div style={{ width: "50px", height: "4px", background: "var(--accent-gold)", borderRadius: "2px" }}></div>
            <h3 style={{ margin: 0, fontSize: "2.2rem", fontWeight: 900, color: "#0b3d91" }}>Procurement Compliance Flow</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem" }}>
            {[
              { icon: <FaSearchDollar />, title: "Requirement Review", desc: "Digital Monitoring Cell audits the necessity and technical feasibility." },
              { icon: <FaGavel />, title: "Technical Specification", desc: "Finalizing benchmarks and institutional requirements." },
              { icon: <FaShieldAlt />, title: "UGC / University Approval", desc: "Synchronizing with national audit guidelines and university statutes." },
              { icon: <FaCheckCircle />, title: "Tender Notification", desc: "Executing transparent vendor selection and implementation." }
            ].map((step, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ color: "#0b3d91", fontSize: "2rem" }}>{step.icon}</div>
                <h4 style={{ fontWeight: 800, fontSize: "1.25rem", margin: 0 }}>{step.title}</h4>
                <p style={{ color: "#64748b", lineHeight: 1.6, fontSize: "1rem", margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Procurement;
