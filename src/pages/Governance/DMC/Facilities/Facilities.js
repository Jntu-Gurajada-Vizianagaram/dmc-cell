import React from "react";
import { FaBroadcastTower, FaMicrochip, FaNetworkWired, FaServer, FaUserShield, FaVideo } from "react-icons/fa";
import DatacenterImage from "../../../../Assets/Institutional/university_datacenter_1774876647608.png";
import NOCImage from "../../../../Assets/Institutional/university_noc_operations_center_1774876671363.png";

const institutionalAssests = [
  {
    icon: <FaServer />,
    title: "Primary Institutional Datacenter",
    desc: "A centralized, high-availability environment housing mission-critical server racks, SAN storage, and core university permanent-record repositories.",
    location: "Academic Complex - Tier 1 Zone",
    image: DatacenterImage
  },
  {
    icon: <FaUserShield />,
    title: "Network Operations Center (NOC)",
    desc: "Integrated security monitoring hub equipped with multi-screen IP video management systems and real-time traffic analysis dashboards.",
    location: "DMC Strategic Command",
    image: NOCImage
  },
  {
    icon: <FaMicrochip />,
    title: "High-Performance Compute Cluster",
    desc: "Equipped with advanced GPU-accelerated nodes and Intel Xeon clusters for machine learning and complex departmental engineering simulations.",
    location: "IT & Research Wing"
  },
  {
    icon: <FaBroadcastTower />,
    title: "Strategic Nodal Hub",
    desc: "The central gateway for the campus fiber-optic ring, managing high-throughput L3 switching and enterprise-grade perimeter firewalls.",
    location: "University Core Transit"
  },
  {
    icon: <FaVideo />,
    title: "Institutional Attendance Grid",
    desc: "Campus-wide distributed biometric facial-recognition nodes providing instantaneous, encrypted attendance reconciliation for all stakeholders.",
    location: "Entry/Exit Control Points"
  },
  {
    icon: <FaNetworkWired />,
    title: "Enterprise Service Hub",
    desc: "Dedicated directorate for managing University G-Suite/M365 accounts, results archival, and digital instructional delivery systems.",
    location: "Administrative Block"
  }
];

const Facilities = () => {
  const [isMobile] = React.useState(window.innerWidth < 1000);

  return (
    <div className="fade-in" style={{ paddingBottom: "5rem", width: "100%" }}>
      
      {/* Professional Academic Facilities Hero */}
      <section className="institutional-hero" style={{ padding: "6rem 2rem", background: "var(--bg-soft)", borderBottom: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: "1.25rem", color: "var(--primary-blue)" }}>
            Institutional Digital Assets Registry
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7, fontWeight: 500 }}>
            Overseeing the state-of-the-art physical assets and ICT facilities that power JNTU-GV's academic and administrative supremacy.
          </p>
        </div>
      </section>

      {/* Assets Registry Content */}
      <div style={{ maxWidth: "1350px", margin: "4rem auto 0", padding: "0 1.5rem" }}>
        <div className="card" style={{ padding: isMobile ? "2rem 1.25rem" : "5rem", background: "#fff" }}>
          
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "0.75rem" }}>Asset Inventory & Audit</h2>
            <div style={{ width: "64px", height: "4px", background: "var(--accent-gold)", margin: "0 auto", borderRadius: "2px" }}></div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "2.5rem"
          }}>
            {institutionalAssests.map((facility, idx) => (
              <div key={idx} style={{
                  background: "#ffffff",
                  borderRadius: "1rem",
                  padding: "0",
                  border: "1px solid var(--border-light)",
                  transition: "all 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "var(--shadow-sm)",
                  overflow: "hidden"
              }}
              className="facility-card"
              >
                {facility.image ? (
                   <div style={{ height: "240px", width: "100%", overflow: "hidden", borderBottom: "1px solid var(--border-light)" }}>
                     <img src={facility.image} alt={facility.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }} className="asset-img" />
                   </div>
                ) : (
                  <div style={{ height: "240px", width: "100%", background: "var(--bg-soft)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-blue)", borderBottom: "1px solid var(--border-light)" }}>
                    <div style={{ fontSize: "3.5rem" }}>{facility.icon}</div>
                  </div>
                )}
                
                <div style={{ padding: "2.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                    <div style={{ color: "var(--primary-blue)", fontSize: "1.3rem" }}>{facility.icon}</div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--primary-blue)", margin: 0 }}>{facility.title}</h3>
                  </div>
                  <p style={{ fontSize: "1.05rem", lineHeight: 1.6, color: "var(--text-muted)", margin: "0 0 2rem 0", flex: 1, textAlign: "justify" }}>{facility.desc}</p>
                  
                  <div style={{ 
                    padding: "10px 16px", 
                    background: "var(--bg-soft)", 
                    borderRadius: "8px", 
                    color: "var(--primary-blue)", 
                    fontWeight: 700, 
                    fontSize: "0.9rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    border: "1px solid var(--border-light)"
                  }}>
                    <span style={{ width: "8px", height: "8px", background: "var(--accent-gold)", borderRadius: "50%" }}></span>
                    Location: {facility.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Audit Disclaimer */}
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
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "1.5rem" }}>Infrastructure Modernization Commitment</h2>
          <p style={{ fontSize: "1.25rem", lineHeight: 1.8, color: "var(--text-muted)", maxWidth: "950px", margin: "0 auto", fontWeight: 400 }}>
             The Digital Monitoring Cell undergoes annual comprehensive infrastructure audits to ensure that JNTU-GV's ICT assets remain at the absolute global technological frontier. These mission-critical resources are maintained 24/7 to support uncompromised educational and research uptime.
          </p>
        </div>
      </div>

      <style>{`
        .facility-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-md) !important;
          border-color: var(--primary-blue) !important;
        }
        .facility-card:hover .asset-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Facilities;
