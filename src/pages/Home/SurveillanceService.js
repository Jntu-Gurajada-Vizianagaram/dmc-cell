import React from "react";
import "./Services.css";

const surveillanceImages = [
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    alt: "CCTV Camera",
    caption: "CCTV units are the primary nodes for campus physical surveillance.",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    alt: "Control Room",
    caption: "Centralized monitoring command for real-time institutional safety.",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Facial Recognition",
    caption: "Modern AI-driven analytics for advanced facial and motion detection.",
  },
];

const SurveillanceService = () => (
  <div className="fade-in" style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
    <div className="card" style={{ padding: "3rem 2rem", textAlign: "center" }}>
      <h2
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 800,
          marginBottom: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          color: "#0b3d91"
        }}
      >
        <span role="img" aria-label="CCTV" style={{ fontSize: "3rem", background: "#f1f5f9", borderRadius: "50%", padding: "12px", display: "flex" }}>
          📹
        </span>
        Surveillance Matrix
      </h2>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        {surveillanceImages.map((img, idx) => (
          <div
            key={idx}
            className="card"
            style={{
              margin: 0,
              padding: "1rem",
              background: "#ffffff",
              borderRadius: "1.5rem",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "1rem",
                display: "block",
                marginBottom: "1rem"
              }}
              loading="lazy"
            />
            <p
              style={{
                fontSize: "0.95rem",
                color: "#64748b",
                fontWeight: 500,
                lineHeight: 1.5,
                margin: 0
              }}
            >
              {img.caption}
            </p>
          </div>
        ))}
      </div>

      <div style={{
          background: "rgba(11, 61, 145, 0.03)",
          borderRadius: "1.5rem",
          padding: "2.5rem",
          border: "1px solid #e2e8f0",
          textAlign: "justify",
          maxWidth: "900px",
          margin: "0 auto"
      }}>
        <p
          className="matter-service"
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.85,
            color: "#475569",
            margin: 0,
            letterSpacing: "0.01em",
          }}
        >
          Institutional <strong>Surveillance</strong> involves the systematic monitoring of activities to maintain campus-wide security and operational integrity. At the JNTUGV Digital Monitoring Cell, we command a sophisticated infrastructure encompassing a range of methods, from electronic electronic grids (CCTV and sensors) to proactive IP-based security hierarchies. 
          <br /><br />
          Advances in AI-driven technologies—such as high-definition IP cameras, facial recognition matrices, and predictive motion analytics—have greatly expanded our ability to maintain a safe and secure academic environment. Our team ensures the balance between comprehensive university security and individual privacy rights, upholding the highest ethical standards of monitoring.
        </p>
      </div>
    </div>
  </div>
);

export default SurveillanceService;

