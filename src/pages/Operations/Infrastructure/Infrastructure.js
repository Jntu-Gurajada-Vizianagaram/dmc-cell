import React from "react";
import { FaCloud, FaDatabase, FaNetworkWired, FaServer, FaShieldAlt, FaWifi } from "react-icons/fa";

const infraAssets = [
  {
    icon: <FaServer />,
    title: "High-Performance Compute Cluster",
    spec: "Institutional Batch Processing Grid",
    description: "Centrally managed server array powering university-wide examinations, results processing, and departmental academic software.",
    benchmarks: ["48-Core Xeon Nodes", "128GB ECC RAM Per Node", "High-Availability Redundancy"]
  },
  {
    icon: <FaNetworkWired />,
    title: "Optical Fiber Backbone",
    spec: "Institutional Connectivity Matrix",
    description: "A robust multi-kilometer OFC ring connecting all academic blocks, hostels, and administrative units with ultra-low latency.",
    benchmarks: ["10Gbps Multi-link Trunking", "Redundant Path Architecture", "L3 Managed Switching"]
  },
  {
    icon: <FaWifi />,
    title: "Unified Wireless Grid",
    spec: "Campus-Wide Seamless Roaming",
    description: "Next-gen Wi-Fi 6 infrastructure providing ubiquitous internet access for students and faculty across all university outdoors and indoors.",
    benchmarks: ["500+ Access Points", "IEEE 802.11ax Standard", "Institutional Authentication"]
  },
  {
    icon: <FaShieldAlt />,
    title: "Cyber Security Command",
    spec: "Perimeter Defense & Monitoring",
    description: "Specialized unit for real-time traffic analysis, intrusion prevention (IPS), and secure gateway management for university portals.",
    benchmarks: ["UTM Firewall Grid", "Persistent Vulnerability Audits", "24/7 SIEM Monitoring"]
  },
  {
    icon: <FaCloud />,
    title: "Private Cloud Infrastructure",
    spec: "Virtualized Resource Ecosystem",
    description: "Localized cloud architecture providing 'Infrastructure as a Service' (IaaS) for specialized departmental research projects.",
    benchmarks: ["VMware/Proxmox Cluster", "Snapshot-based Recovery", "Provisioning on Demand"]
  },
  {
    icon: <FaDatabase />,
    title: "Central Data Repository",
    spec: "Institutional Archival & Storage",
    description: "High-density Storage Area Network (SAN) housing the university's digital permanent records, student data, and academic audits.",
    benchmarks: ["500TB Scalable Tier", "RAID 6 Data Protection", "Off-site Disaster Recovery"]
  }
];

const Infrastructure = () => {
  return (
    <div className="fade-in">
      
      {/* Institutional Hero */}
      <div className="institutional-hero">
        <h1 className="gradient-text" style={{ background: "linear-gradient(to right, #fff, var(--accent-gold))", WebkitBackgroundClip: "text" }}>
            Strategic Digital Assets Registry
        </h1>
        <p>
            An audit of JNTU-GV's mission-critical hardware and networking assets, maintained and monitored by the Digital Monitoring Cell to ensure peak institutional performance.
        </p>
      </div>

      <div style={{ maxWidth: "1400px", margin: "-4rem auto 0", padding: "0 2rem" }}>
        
        {/* Assets Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", 
          gap: "2.5rem",
          paddingBottom: "5rem"
        }}>
          {infraAssets.map((asset, idx) => (
            <div key={idx} className="card" style={{ 
              display: "flex", 
              flexDirection: "column", 
              padding: "3.5rem",
              background: "#fff",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{ 
                position: "absolute", 
                top: 0, 
                right: 0, 
                padding: "1rem 2rem", 
                background: "var(--primary-blue)", 
                color: "var(--accent-gold)",
                fontSize: "0.85rem",
                fontWeight: 800,
                borderRadius: "0 0 0 1.5rem",
                textTransform: "uppercase"
              }}>
                Institutional Asset
              </div>
              
              <div style={{ 
                width: "70px", 
                height: "70px", 
                background: "rgba(11, 61, 145, 0.05)", 
                color: "var(--primary-blue)", 
                borderRadius: "1.25rem", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                fontSize: "2.2rem",
                marginBottom: "2rem"
              }}>
                {asset.icon}
              </div>

              <h3 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{asset.title}</h3>
              <p style={{ color: "var(--accent-gold)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "1.5rem", letterSpacing: "1px", textTransform: "uppercase" }}>
                {asset.spec}
              </p>
              
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2.5rem", fontSize: "1.1rem", flex: 1 }}>
                {asset.description}
              </p>

              <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "1.5rem", border: "1px solid #f1f5f9" }}>
                <h4 style={{ fontSize: "0.9rem", color: "var(--primary-blue)", marginBottom: "1rem", textTransform: "uppercase" }}>Technical Benchmarks</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {asset.benchmarks.map((point, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-main)", fontWeight: 600, fontSize: "0.95rem", marginBottom: "8px" }}>
                      <span style={{ width: "8px", height: "8px", background: "var(--accent-gold)", borderRadius: "50%" }}></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Global Compliance Footer */}
        <div className="card glass-dark" style={{ textAlign: "center", padding: "5rem 3rem", border: "2px solid rgba(11, 61, 145, 0.1)" }}>
           <h2 className="section-title">Institutional Resource Management</h2>
           <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "var(--text-muted)" }}>
              All digital assets listed in this registry are subject to the JNTU-GV Digital Usage Policy and are monitored 24/7 for security, optimal load distribution, and educational uptime.
           </p>
           <button className="btn" style={{ marginTop: "3rem" }}>View Asset Distribution Map</button>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
