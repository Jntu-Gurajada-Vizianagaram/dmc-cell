import React from "react";
import { FaGlobe, FaNetworkWired, FaShieldAlt, FaSignal, FaBroadcastTower, FaUserShield } from "react-icons/fa";
import "./Services.css";

const networkingDomains = [
  {
    icon: <FaBroadcastTower />,
    title: "Optical Fiber Backbone",
    desc: "A massive multi-kilometer OFC backbone connecting all university blocks with high-speed trunking and zero-latency data transport.",
    metric: "10Gbps Multi-link"
  },
  {
    icon: <FaSignal />,
    title: "Wi-Fi 6 Mesh Grid",
    desc: "Seamless wireless roaming across academic zones using next-gen Wi-Fi 6 Access Points, providing high-density student connectivity.",
    metric: "500+ Nodes"
  },
  {
    icon: <FaUserShield />,
    title: "UTM Perimeter Defense",
    desc: "Enterprise Unified Threat Management (UTM) firewalls orchestrating deep-packet inspection, intrusion prevention, and secure gateways.",
    metric: "Institutional Guard"
  },
  {
    icon: <FaNetworkWired />,
    title: "VLAN Segmentation",
    desc: "Strategic network segmentation using isolated Virtual LANs for administrative, research, and general student access grids.",
    metric: "40+ Subnets"
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure SSL-VPN",
    desc: "Encrypted remote access tunnels for institutional faculty and admins ensuring secure connectivity for university portals and ERP systems.",
    metric: "AES-256 Encrypted"
  },
  {
    icon: <FaGlobe />,
    title: "IP Asset Management",
    desc: "Optimized allocation of JNTUGV's institutional IP pool through persistent DHCP and static reservation architectures.",
    metric: "Centralized IPAM"
  }
];

const Network = () => {
  return (
    <div className="fade-in" style={{ paddingBottom: "5rem" }}>
      
      {/* Network Hero */}
      <section style={{ 
        background: "linear-gradient(135deg, #1e3a8a 0%, #0369a1 100%)", 
        padding: "6rem 2rem", 
        color: "#fff", 
        textAlign: "center",
        borderRadius: "0 0 4rem 4rem",
        boxShadow: "0 20px 50px rgba(11, 99, 145, 0.2)"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, marginBottom: "1.5rem" }}>
            JNTUGV Connectivity Grid
          </h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9, maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
            Commanding the campus-wide fiber-optic infrastructure and secure wireless matrices to deliver high-bandwidth digital services to every stakeholder.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "-4rem auto 0", padding: "0 1.5rem" }}>
        <div className="card" style={{ padding: "4rem", background: "#fff", borderRadius: "2.5rem", boxShadow: "0 30px 60px rgba(0,0,0,0.08)" }}>
          
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0b3d91", marginBottom: "1rem" }}>Domain Architecture</h2>
            <div style={{ width: "60px", height: "4px", background: "#facc15", margin: "0 auto", borderRadius: "2px" }}></div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem"
          }}>
            {networkingDomains.map((feature, idx) => (
              <div key={idx} style={{
                  background: "#ffffff",
                  borderRadius: "1.5rem",
                  padding: "3rem 2.5rem",
                  border: "1.5px solid #f1f5f9",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.02)"
              }}
              className="network-card"
              >
                <div style={{ 
                  width: "70px", 
                  height: "70px", 
                  background: "rgba(30, 58, 138, 0.05)", 
                  color: "#1e3a8a", 
                  borderRadius: "20px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  fontSize: "2rem",
                  marginBottom: "2rem"
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1e293b", marginBottom: "1.2rem" }}>{feature.title}</h3>
                <p style={{ fontSize: "1.08rem", lineHeight: 1.8, color: "#4a5568", margin: "0 0 2rem 0", flex: 1 }}>{feature.desc}</p>
                
                <div style={{ 
                  padding: "12px 24px", 
                  background: "#1e3a8a", 
                  borderRadius: "10px", 
                  color: "#fff", 
                  fontWeight: 700, 
                  fontSize: "0.95rem",
                  display: "inline-block",
                  alignSelf: "flex-start",
                  boxShadow: "0 8px 15px rgba(30, 58, 138, 0.2)"
                }}>
                   {feature.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Status Policy */}
        <div style={{ 
          marginTop: "4rem", 
          padding: "5rem 4rem", 
          background: "linear-gradient(135deg, #f8fafc 0%, #fff 100%)", 
          borderRadius: "2.5rem", 
          textAlign: "center",
          border: "2px solid #e2e8f0",
          boxShadow: "0 10px 30px rgba(11, 61, 145, 0.05)"
        }}>
          <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#1e3a8a", marginBottom: "1.5rem" }}>Unified Network Policy</h2>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "#475569", maxWidth: "800px", margin: "0 auto 3.5rem" }}>
            The JNTUGV network is a high-availability institutional asset. Access is governed by the Digital Monitoring Cell to ensure equitable bandwidth distribution for research, academic portals, and administrative functions. Unauthorized interference or network bridging is strictly prohibited under university ICT policy.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn" style={{ background: "#1e3a8a", color: "#fff", padding: "1.2rem 3rem", fontWeight: 700 }}>
              Read Network Usage Policy
            </button>
            <button className="btn" style={{ background: "#f1f5f9", color: "#1e3a8a", border: "1.5px solid #1e3a8a", padding: "1.2rem 3rem", fontWeight: 700 }}>
              Check Real-time Status
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .network-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 60px rgba(30, 58, 138, 0.12) !important;
          border-color: #1e3a8a !important;
        }
      `}</style>
    </div>
  );
};

export default Network;
