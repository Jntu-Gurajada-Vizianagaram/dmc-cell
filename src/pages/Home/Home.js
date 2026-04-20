import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaServer, FaShieldAlt, FaNetworkWired, FaFileContract, FaUserTie, FaTasks, FaRoute } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import additionalImage from "./Images/4.jpg";
import './Home.css';

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
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
    metric: "Institutional Quality Compliance"
  }
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    // Auto-scroll to section if hash is present
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [location.hash]);

  return (
    <div className="home-spa-wrapper fade-in">
      
      {/* 1. Hero Section */}
      <section className="spa-section" id="hero">
        {heroSlides.map((slide, idx) => (
          <div key={idx} style={{ position: "absolute", inset: 0, opacity: activeSlide === idx ? 1 : 0, transition: "opacity 1.5s ease-in-out", zIndex: activeSlide === idx ? 1 : 0 }}>
            <img src={slide.image} alt="Institutional Background" className="spa-hero-bg" />
            <div className="spa-hero-overlay"></div>
          </div>
        ))}
        <div className="spa-hero-content" data-aos="fade-up">
          <div className="spa-subtitle" style={{ background: "var(--accent-gold)", color: "white", textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>
             {heroSlides[activeSlide].metric}
          </div>
          <h1 className="spa-title" style={{ fontSize: "clamp(3rem, 6vw, 5rem)", color: "white" }}>
            {heroSlides[activeSlide].title}
          </h1>
          <p className="spa-text" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", fontWeight: 500, color: "white" }}>
            {heroSlides[activeSlide].subtitle}
          </p>
          <div style={{ display: "flex", gap: "2vw", marginTop: "2vh" }}>
            <Link to="/#overview" className="btn" style={{ padding: "1.5vh 3vw", fontSize: "1.1rem" }}>Explore Framework</Link>
            <Link to="/governance/disclosures/ugc" className="btn btn-outline" style={{ padding: "1.5vh 3vw", fontSize: "1.1rem", background: "rgba(255,255,255,0.5)" }}>UGC Compliance</Link>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="spa-section spa-section-alt" id="overview">
        <div className="spa-subtitle">DMC Overview</div>
        <h2 className="spa-title">Digital Monitoring Cell</h2>
        <p className="spa-text">
          The Digital Monitoring Cell (DMC) acts as the operational nerve center for JNTU-GV's 
          technological capabilities. We execute rigorous monitoring, rapid deployment, and constant 
          optimization of core institutional digital assets. From enterprise connectivity and L3 switching 
          pathways to academic ERP stability, the DMC ensures 24/7 resilience.
        </p>
        <div className="spa-grid">
          <div className="spa-card">
            <div className="spa-card-icon"><FaServer /></div>
            <h4 className="spa-card-title">Instance Compute Hub</h4>
            <p className="spa-card-text">Governing high-availability server clusters to streamline university load demands and examination processes.</p>
          </div>
          <div className="spa-card">
            <div className="spa-card-icon"><FaNetworkWired /></div>
            <h4 className="spa-card-title">Campus Fiber Ring</h4>
            <p className="spa-card-text">100% Inter-Block Optical Fiber coverage, maximizing bandwidth thresholds across all academic corridors.</p>
          </div>
          <div className="spa-card">
            <div className="spa-card-icon"><FaShieldAlt /></div>
            <h4 className="spa-card-title">Strategic Security</h4>
            <p className="spa-card-text">Executing persistent vulnerability assessments and continuous surveillance parameters natively.</p>
          </div>
        </div>
      </section>

      {/* 3. Coordinator Section */}
      <section className="spa-section" id="coordinator">
        <div className="spa-split">
          <div className="align-left" data-aos="fade-right">
            <div className="spa-subtitle">Leadership</div>
            <h2 className="spa-title" style={{ textAlign: "left" }}>DMC Coordinator</h2>
            <h3 style={{ fontSize: "1.8rem", color: "var(--primary-blue)", marginBottom: "1vh", fontWeight: 700 }}>Dr. Nalini Bodasingi</h3>
            <h4 style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "3vh", fontWeight: 500 }}>Associate Professor, Dept. of Electronics & Communication Engineering</h4>
            <p className="spa-text" style={{ textAlign: "left", marginBottom: "3vh" }}>
               "Our mission is to establish and enforce a resilient digital governance structure. By adopting a proactive technical strategy, we are consistently advancing standard operating procedures for the University's digital ecosystem."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--primary-blue)", fontWeight: 600 }}>
               <FaUserTie size={20} /> Appointed Digital Administrator
            </div>
          </div>
          <div data-aos="fade-left" style={{ display: 'flex', justifyContent: 'center' }}>
             <img src="https://media.licdn.com/dms/image/C5603AQFoLzSTP_Z-3g/profile-displayphoto-shrink_400_400/0/1628173428984?e=2147483647&v=beta&t=example" alt="Coordinator" style={{ width: "350px", height: "350px", objectFit: "cover", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", border: "4px solid white" }} />
          </div>
        </div>
      </section>

      {/* 4. Secretariat Section */}
      <section className="spa-section spa-section-alt" id="secretariat">
        <div className="spa-subtitle">Technical Force</div>
        <h2 className="spa-title">DMC Secretariat</h2>
        <p className="spa-text">
          The Secretariat constitutes the specialized workforce responsible for translating our strategic objectives into operative reality. Comprising Tier-2 and Tier-3 engineers, system administrators, and integration specialists, the team ensures localized compliance and round-the-clock grievance redressal.
        </p>
        <div className="spa-grid" style={{ gridTemplateColumns: "1fr 1fr", maxWidth: "900px" }}>
           <div className="spa-card">
              <h4 className="spa-card-title">Network & Operations Team</h4>
              <p className="spa-card-text">Specialized in physical routing implementations, latency troubleshooting, and on-premises disaster recovery procedures.</p>
           </div>
           <div className="spa-card">
              <h4 className="spa-card-title">Software & Platform Integration</h4>
              <p className="spa-card-text">Specialized in managing internal MVC frameworks, API endpoints, and authentication microservices for the university.</p>
           </div>
        </div>
      </section>

      {/* 5. Mandate Section */}
      <section className="spa-section" id="mandate">
        <div className="spa-subtitle">Operations</div>
        <h2 className="spa-title">Institutional Mandate</h2>
        <p className="spa-text">
          To maintain transparency, security, and velocity in university service orchestration. The DMC rigidly aligns its operative guidelines with the strict policies mandated by central governing boards including the University Grants Commission (UGC) and AICTE.
        </p>
        <div className="spa-grid">
           <div className="spa-card">
             <div className="spa-card-icon" style={{ background: "rgba(16, 185, 129, 0.1)", color: "#10b981" }}><FaFileContract /></div>
             <h4 className="spa-card-title">Policy Enforcement</h4>
           </div>
           <div className="spa-card">
             <div className="spa-card-icon" style={{ background: "rgba(239, 68, 68, 0.1)", color: "#ef4444" }}><FaTasks /></div>
             <h4 className="spa-card-title">Asset Auditing</h4>
           </div>
           <div className="spa-card">
             <div className="spa-card-icon" style={{ background: "rgba(245, 158, 11, 0.1)", color: "#f59e0b" }}><FaShieldAlt /></div>
             <h4 className="spa-card-title">Cyber hygiene</h4>
           </div>
        </div>
      </section>

      {/* 6. Roadmap Section */}
      <section className="spa-section spa-section-dark" id="roadmap">
        <div className="spa-subtitle" style={{ background: "rgba(255,255,255,0.1)", color: "white", borderColor: "rgba(255,255,255,0.2)" }}>Vision 2030</div>
        <h2 className="spa-title">Institutional Roadmap</h2>
        <p className="spa-text">
          JNTU-GV is committed to achieving comprehensive digital empowerment and automated academic governance. Our trajectory scales toward implementing robust AI analytics for student lifecycle management and fully digitized examination modalities.
        </p>
        <div className="spa-grid" style={{ marginTop: "4vh" }}>
            <Link to="/operations/services" className="spa-card" style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "white" }}>
              <FaRoute size={30} style={{ marginBottom: "15px" }} />
              <h5 style={{ fontWeight: 700, margin: 0, color: "white" }}>DMC Service Charter</h5>
            </Link>
            <Link to="/operations/procurement" className="spa-card" style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "white" }}>
              <FaFileContract size={30} style={{ marginBottom: "15px" }} />
              <h5 style={{ fontWeight: 700, margin: 0, color: "white" }}>Transparency Portal</h5>
            </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
