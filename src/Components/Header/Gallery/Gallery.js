import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import { skillsData } from "./GalleryImages";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Accessibility: trap focus in modal
  useEffect(() => {
    if (isModalOpen) {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          closeModal();
        }
        if (e.key === "ArrowLeft") {
          showPrev();
        }
        if (e.key === "ArrowRight") {
          showNext();
        }
        if (e.key === "Tab" && modalRef.current) {
          const focusableEls = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstEl = focusableEls[0];
          const lastEl = focusableEls[focusableEls.length - 1];
          if (!e.shiftKey && document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          } else if (e.shiftKey && document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
    // eslint-disable-next-line
  }, [isModalOpen, currentIndex]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setTimeout(() => {
      if (modalRef.current) {
        const closeBtn = modalRef.current.querySelector(".close");
        if (closeBtn) closeBtn.focus();
      }
    }, 0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIndex(null);
  };

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? skillsData.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === skillsData.length - 1 ? 0 : prev + 1
    );
  };

  // Prevent modal close when clicking inside modal-content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const getModalImageStyle = (idx) => {
    if (idx === 0 || idx === skillsData.length - 1) {
      return {
        display: "block",
        margin: "0 auto",
        width: "90vw",
        maxWidth: 800,
        height: "auto",
        maxHeight: "60vh",
        background: "#f5faff",
        borderRadius: "16px",
        boxShadow: "0 2px 12px rgba(25, 118, 210, 0.10)",
        objectFit: "cover",
        aspectRatio: "16/7",
      };
    }
    // Middle images: large square
    return {
      display: "block",
      margin: "0 auto",
      width: "56vh",
      height: "56vh",
      maxWidth: "90vw",
      maxHeight: "70vh",
      background: "#f5faff",
      borderRadius: "16px",
      boxShadow: "0 2px 12px rgba(25, 118, 210, 0.10)",
      objectFit: "cover",
      aspectRatio: "1/1",
    };
  };

  // Helper: get card image style based on index
  const getCardImageStyle = (idx) => {
    if (idx === 0 || idx === skillsData.length - 1) {
      // Rectangular card
      return {
        width: "100%",
        maxWidth: 260,
        height: 120,
        objectFit: "cover",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
        marginBottom: "12px",
        background: "#f5faff",
        aspectRatio: "16/7",
      };
    }
    // Square card
    return {
      width: 140,
      height: 140,
      objectFit: "cover",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
      marginBottom: "12px",
      background: "#f5faff",
      aspectRatio: "1/1",
    };
  };

  // Helper: get card style based on index
  const getCardStyle = (idx) => {
    if (idx === 0 || idx === skillsData.length - 1) {
      // Rectangular card
      return {
        outline: "none",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 16px rgba(25, 118, 210, 0.10)",
        transition: "transform 0.18s, box-shadow 0.18s",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "18px 10px 14px 10px",
        border: "1.5px solid #e3f2fd",
        minHeight: 160,
        minWidth: 220,
        position: "relative",
        gridColumn: "span 2",
      };
    }
    // Square card
    return {
      outline: "none",
      background: "#fff",
      borderRadius: "16px",
      boxShadow: "0 4px 16px rgba(25, 118, 210, 0.10)",
      transition: "transform 0.18s, box-shadow 0.18s",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "18px 10px 14px 10px",
      border: "1.5px solid #e3f2fd",
      minHeight: 180,
      minWidth: 180,
      position: "relative",
    };
  };

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          margin: "32px 0 18px 0",
          fontWeight: 700,
          fontSize: "2rem",
          letterSpacing: "0.5px",
          color: "#1976d2",
          textShadow: "0 2px 8px rgba(25, 118, 210, 0.08)",
        }}
      >
        Gallery
      </h2>
      <div
        className="gallery-container"
        aria-label="Skill Gallery"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "28px",
          padding: "0 12px 32px 12px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {skillsData.map((logo, index) => (
          <div
            className="gallery-card"
            key={index}
            tabIndex={0}
            role="button"
            aria-label={`View image`}
            onClick={() => openModal(index)}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                openModal(index);
              }
            }}
            style={getCardStyle(index)}
            onMouseOver={e => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(25, 118, 210, 0.18)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow =
                "0 4px 16px rgba(25, 118, 210, 0.10)";
            }}
          >
            <img
              src={logo.image}
              alt=""
              className="gallery-image"
              loading="lazy"
              draggable={false}
              style={getCardImageStyle(index)}
            />
          </div>
        ))}
      </div>

      {isModalOpen && currentIndex !== null && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          tabIndex={-1}
          onClick={closeModal}
          style={{
            position: "fixed",
            zIndex: 1000,
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(25, 40, 60, 0.60)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "fadeIn 0.2s",
          }}
        >
          <div
            className="modal-content"
            ref={modalRef}
            onClick={handleModalContentClick}
            style={{
              position: "relative",
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 8px 32px rgba(25, 118, 210, 0.18)",
              padding: "32px 24px 24px 24px",
              maxWidth: 900,
              width: "95vw",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              animation: "modalPop 0.22s",
            }}
          >
            <button
              className="close"
              onClick={closeModal}
              aria-label="Close modal"
              tabIndex={0}
              style={{
                background: "none",
                border: "none",
                color: "#1976d2",
                position: "absolute",
                top: 16,
                right: 22,
                zIndex: 2,
                cursor: "pointer",
                fontSize: 32,
                fontWeight: 700,
                lineHeight: 1,
                transition: "color 0.15s",
              }}
              onMouseOver={e => (e.currentTarget.style.color = "#ff1744")}
              onMouseOut={e => (e.currentTarget.style.color = "#1976d2")}
            >
              &times;
            </button>
            <button
              className="modal-nav modal-nav-left"
              onClick={e => { e.stopPropagation(); showPrev(); }}
              aria-label="Previous image"
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "#e3f2fd",
                border: "none",
                borderRadius: "50%",
                width: 44,
                height: 44,
                fontSize: 26,
                cursor: "pointer",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#1976d2",
                boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
                transition: "background 0.15s, color 0.15s",
              }}
              tabIndex={0}
              onMouseOver={e => {
                e.currentTarget.style.background = "#bbdefb";
                e.currentTarget.style.color = "#0d47a1";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "#e3f2fd";
                e.currentTarget.style.color = "#1976d2";
              }}
            >
              &#8592;
            </button>
            <button
              className="modal-nav modal-nav-right"
              onClick={e => { e.stopPropagation(); showNext(); }}
              aria-label="Next image"
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "#e3f2fd",
                border: "none",
                borderRadius: "50%",
                width: 44,
                height: 44,
                fontSize: 26,
                cursor: "pointer",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#1976d2",
                boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
                transition: "background 0.15s, color 0.15s",
              }}
              tabIndex={0}
              onMouseOver={e => {
                e.currentTarget.style.background = "#bbdefb";
                e.currentTarget.style.color = "#0d47a1";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "#e3f2fd";
                e.currentTarget.style.color = "#1976d2";
              }}
            >
              &#8594;
            </button>
            <img
              src={skillsData[currentIndex].image}
              alt=""
              className="modal-image"
              style={getModalImageStyle(currentIndex)}
            />
            {/* Show description if available */}
            {skillsData[currentIndex].description && (
              <div
                style={{
                  marginTop: "24px",
                  color: "#333",
                  fontSize: "1.1rem",
                  textAlign: "center",
                  maxWidth: 600,
                  lineHeight: 1.5,
                  wordBreak: "break-word",
                }}
              >
                {skillsData[currentIndex].description}
              </div>
            )}
          </div>
        </div>
      )}
      {/* Animations for modal */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalPop {
            from { transform: scale(0.92) translateY(30px); opacity: 0; }
            to { transform: scale(1) translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
