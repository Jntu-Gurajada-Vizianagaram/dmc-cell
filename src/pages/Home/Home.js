import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from "react";
import { FaFileContract, FaNetworkWired, FaServer, FaShieldAlt, FaBroadcastTower, FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import additionalImage from "./Images/4.jpg";
import NotificationsScrolling from "./NotificationsScrolling/NotificationsScrolling";

const heroSlides = [
  {
    title: "University Digital Infrastructure",
    subtitle: "Orchestrating the institutional technological framework of JNTU-GV with administrative precision and network stability.",
    image: additionalImage,
    metric: "Gigabit Optical Fiber Backbone"
  },
  {
    title: "Strategic Technical Governance",
    subtitle: "Ensuring 100% transparency and digital accountability in alignment with University Statutes and UGC Public Disclosures.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80u0026w=2070",
    metric: "Institutional Quality Compliance"
  }
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fade-in" style={{ background: "var(--bg-main)" }}>
      {/* Professional Academic Light Hero */}
      <section style={{
        position: "relative",
        height: "85vh",
        minHeight: "650px",
        overflow: "hidden",
        background: "var(--bg-soft)",
        borderBottom: "1px solid var(--border-light)"
      }}>
        {heroSlides.map((slide, idx) => (
          <div key={idx} style={{
            position: "absolute",
            inset: 0,
            opacity: activeSlide === idx ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            zIndex: activeSlide === idx ? 1 : 0
          }}>
            <img src={slide.image} alt="Institutional" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.9) contrast(1.1) saturate(1.1)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.6) 100%)" }}></div>
          </div>
        ))}

        <div style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          textAlign: "left",
          width: "90%",
          maxWidth: "800px",
          color: "var(--text-main)",
          zIndex: 10
        }} data-aos="fade-up">
          <div style={{
            display: "inline-block",
            padding: "6px 16px",
            background: "var(--accent-gold-soft)",
            color: "var(--accent-gold)",
            borderRadius: "8px",
            fontSize: "0.85rem",
            fontWeight: 700,
            border: "1px solid rgba(245, 158, 11, 0.2)",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
            letterSpacing: "1.5px"
          }}>
            {heroSlides[activeSlide].metric}
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, marginBottom: "1.5rem", color: "var(--primary-blue)" }}>
            {heroSlides[activeSlide].title}
          </h1>
          <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", maxWidth: "700px", marginBottom: "3.5rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
            {heroSlides[activeSlide].subtitle}
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link to="/governance/dmc/overview" className="btn">
              Executive Roadmap
            </Link>
            <Link to="/governance/disclosures/ugc" className="btn btn-outline" style={{ background: "rgba(11, 61, 145, 0.05)" }}>
              Transparency Portal
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Command Dashboard */}
      <section style={{ maxWidth: "1400px", margin: "-4rem auto 5rem", padding: "0 2rem", position: "relative", zIndex: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {[
            { label: "Institutional Compute", val: "High-Performance Cluster", icon: <FaServer />, color: "#3b82f6" },
            { label: "Campus Fiber Ring", val: "100% Inter-Block OFC", icon: <FaNetworkWired />, color: "#f59e0b" },
            { label: "Strategic Security", val: "24/7 SIEM Command", icon: <FaShieldAlt />, color: "#ef4444" },
            { label: "Governance Mandates", val: "UGC 2024 Compliant", icon: <FaFileContract />, color: "#10b981" }
          ].map((item, i) => (
            <div key={i} className="card" style={{ padding: "2.5rem", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
              <div style={{ fontSize: "2.2rem", color: item.color, marginBottom: "1.25rem", opacity: 0.9 }}>{item.icon}</div>
              <h4 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>{item.val}</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Operational Mandates Hub */}
      <section style={{ maxWidth: "1400px", margin: "0 auto 8rem", padding: "0 2rem" }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-7" data-aos="fade-right">
            <h2 className="section-title" style={{ textAlign: "left", fontSize: "3rem" }}>Digital Lifecycle Governance</h2>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: "3.5rem" }}>
              The Digital Monitoring Cell acts as the autonomous technological architect for JNTU-GV, ensuring that institutional digital assets are procured, maintained, and secured as per national academic standards.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              {[
                { title: "Enterprise Connectivity", desc: "Orchestrating L3 managed switching and fiber pathways.", icon: <FaBroadcastTower /> },
                { title: "Academic ERP", desc: "Managing examination grids and student archives.", icon: <FaUserCheck /> },
                { title: "Cyber-Defense", desc: "Persistent vulnerability assessments and perimeter defense.", icon: <FaShieldAlt /> },
                { title: "Governance Compliance", desc: "Aligning with UGC transparency mandates.", icon: <FaFileContract /> }
              ].map((mandate, idx) => (
                <div key={idx} style={{ display: "flex", gap: "1.25rem" }}>
                  <div style={{ flexShrink: 0, width: "50px", height: "50px", background: "var(--bg-soft)", color: "var(--primary-blue)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", border: "1px solid var(--border-light)" }}>
                    {mandate.icon}
                  </div>
                  <div>
                    <h5 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "0.25rem" }}>{mandate.title}</h5>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>{mandate.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5" data-aos="fade-left">
            <div className="card" style={{ padding: "0", border: "none", overflow: "hidden", background: "var(--bg-soft)", border: "1px solid var(--border-light)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem", borderBottom: "1px solid var(--border-light)" }}>
                <h3 style={{ margin: 0, fontSize: "1.4rem" }}>Institutional Bulletin</h3>
                <div style={{ background: "var(--bg-main)", padding: "8px", borderRadius: "8px", border: "1px solid var(--border-light)" }}><FaFileContract color="var(--primary-blue)" /></div>
              </div>
              <div style={{ padding: "1rem" }}>
                <div style={{ height: "400px", overflow: "hidden" }}>
                  <NotificationsScrolling />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Roadmap Footer Section */}
      <section style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--border-light)", padding: "8rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="section-title" style={{ marginBottom: "2rem" }}>Institutional Digital Roadmap 2030</h2>
          <p style={{ fontSize: "1.25rem", color: "var(--text-muted)", maxWidth: "900px", margin: "0 auto 4rem", lineHeight: 1.7 }}>
            JNTU-GV is committed to achieving comprehensive digital empowerment and automated academic governance. Our mission is to provide a high-availability instructional and research digital ecosystem for every stakeholder across the North Coastal Andhra region.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <Link to="/operations/services" className="card" style={{ padding: "2rem", textAlign: "center", textDecoration: "none" }}>
              <h5 style={{ fontWeight: 700 }}>DMC Service Charter</h5>
              <p className="small text-muted mb-0">Explore our institutional services</p>
            </Link>
            <Link to="/governance/dmc/roadmap" className="card" style={{ padding: "2rem", textAlign: "center", textDecoration: "none" }}>
              <h5 style={{ fontWeight: 700 }}>Digital Vision 2030</h5>
              <p className="small text-muted mb-0">Strategic expansion milestones</p>
            </Link>
            <Link to="/operations/procurement" className="card" style={{ padding: "2rem", textAlign: "center", textDecoration: "none" }}>
              <h5 style={{ fontWeight: 700 }}>Transparency Portal</h5>
              <p className="small text-muted mb-0">Tenders and procurement audits</p>
            </Link>
          </div>
        </div>
      </section>




    </div>
  );
};

export default Home;
