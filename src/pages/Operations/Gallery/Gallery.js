import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaImages, FaTimes } from "react-icons/fa";
import "./Gallery.css";
import { skillsData } from "./GalleryImages";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isModalOpen, currentIndex]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIndex(null);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? skillsData.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === skillsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fade-in" style={{ paddingBottom: "5rem" }}>
      
      {/* Gallery Hero */}
      <section style={{ 
        background: "linear-gradient(135deg, #1e293b 0%, #0b3d91 100%)", 
        padding: "6rem 2rem", 
        color: "#fff", 
        textAlign: "center",
        borderRadius: "0 0 4rem 4rem",
        boxShadow: "0 20px 50px rgba(11, 61, 145, 0.15)"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, marginBottom: "1.5rem" }}>
            Institutional Event Showcase
          </h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9, maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
            Capturing the persistent progress and technological milestones of the JNTU-GV Digital Monitoring Cell.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <div style={{ maxWidth: "1300px", margin: "-4rem auto 0", padding: "0 1.5rem" }}>
        <div className="card" style={{ padding: "4rem", background: "#fff", borderRadius: "2.5rem", boxShadow: "0 30px 60px rgba(0,0,0,0.08)" }}>
          
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0b3d91", marginBottom: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" }}>
              <FaImages /> Visual Chronicles
            </h2>
            <div style={{ width: "60px", height: "4px", background: "#facc15", margin: "0 auto", borderRadius: "2px" }}></div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem"
          }}>
            {skillsData.map((item, index) => (
              <div
                key={index}
                className="gallery-item-premium"
                onClick={() => openModal(index)}
                style={{
                  position: "relative",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  cursor: "pointer",
                  aspectRatio: "4/3",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease"
                  }}
                  className="gallery-img"
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(11, 61, 145, 0.9))",
                  padding: "2rem 1.5rem",
                  color: "#fff",
                  opacity: 0,
                  transition: "all 0.3s ease",
                  transform: "translateY(20px)"
                }} className="gallery-overlay">
                  <p style={{ margin: 0, fontSize: "1rem", fontWeight: 700 }}>{item.description || "View Event"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && currentIndex !== null && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(5, 25, 55, 0.98)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
          backdropFilter: "blur(15px)"
        }} onClick={closeModal}>
          <button onClick={closeModal} style={{
            position: "absolute",
            top: "2.5rem",
            right: "2.5rem",
            background: "rgba(255,255,255,0.1)",
            border: "none",
            color: "#fff",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            fontSize: "1.5rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2001
          }}>
            <FaTimes />
          </button>

          <button onClick={(e) => { e.stopPropagation(); showPrev(); }} style={{
            position: "absolute",
            left: "2rem",
            background: "rgba(255,255,255,0.05)",
            border: "none",
            color: "#fff",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            transition: "all 0.2s"
          }} className="nav-btn">
            <FaChevronLeft />
          </button>

          <button onClick={(e) => { e.stopPropagation(); showNext(); }} style={{
            position: "absolute",
            right: "2rem",
            background: "rgba(255,255,255,0.05)",
            border: "none",
            color: "#fff",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            transition: "all 0.2s"
          }} className="nav-btn">
            <FaChevronRight />
          </button>

          <div style={{ 
            maxWidth: "85%", 
            maxHeight: "85%", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center",
            gap: "2rem"
          }} onClick={(e) => e.stopPropagation()}>
            <img
              src={skillsData[currentIndex].image}
              alt=""
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                borderRadius: "1.5rem",
                boxShadow: "0 30px 100px rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            />
            {skillsData[currentIndex].description && (
              <div style={{ 
                background: "rgba(255,255,255,0.1)", 
                padding: "1rem 2rem", 
                borderRadius: "1rem", 
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)"
              }}>
                <p style={{ color: "#fff", textAlign: "center", fontSize: "1.2rem", fontWeight: 600, margin: 0 }}>
                  {skillsData[currentIndex].description}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .gallery-item-premium:hover .gallery-overlay {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .gallery-item-premium:hover .gallery-img {
          transform: scale(1.1);
        }
        .nav-btn:hover {
          background: #facc15 !important;
          color: #0b3d91 !important;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
