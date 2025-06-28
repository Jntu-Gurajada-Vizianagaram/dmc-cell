import React, { useEffect, useState } from "react";
import dmcLogo from "./dmc-logo.jpg";
import jntugv_logo from "./logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Header background color (fix: use valid color)
  const getHeaderStyle = () => ({
    display: "flex",
    flexDirection: windowWidth <= 767 ? "column" : "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    background: isScrolled ? "#fff" : "#fff",
    transition: "background 0.3s cubic-bezier(.4,0,.2,1), padding 0.1s ease-in",
    zIndex: 1000,
    width: "100%",
    position: "sticky",
    top: 0,
    padding:
      isScrolled
        ? "0.5rem 1rem"
        : windowWidth <= 767
        ? "0.5rem 0.2rem"
        : "0.5rem 2rem",
    boxSizing: "border-box",
    boxShadow: isScrolled
      ? "0 2px 8px rgba(25, 118, 210, 0.10)"
      : "0 4px 16px rgba(19, 123, 226, 0.10)",
  });

  const getLogoStyle = () => {
    let width;
    if (windowWidth <= 767) width = isScrolled ? "4.5rem" : "7rem";
    else if (windowWidth <= 1010) width = isScrolled ? "5.5rem" : "8rem";
    else width = isScrolled ? "6rem" : "10rem";
    return {
      width,
      height: "auto",
      transition:
        "width 0.3s ease, box-shadow 0.3s cubic-bezier(.4,0,.2,1), border 0.3s cubic-bezier(.4,0,.2,1)",
      boxShadow: isScrolled
        ? "0 2px 8px rgba(25, 118, 210, 0.10)"
        : "0 4px 16px rgba(19, 123, 226, 0.18)",
      border: isScrolled ? "2px solid #1976d2" : "2px solid #90caf9",
      borderRadius: "50%",
      background: "#fff",
      margin: windowWidth <= 767 ? "0.5rem auto" : "0 0.5rem",
      display: "block",
    };
  };

  const getHeaderTextStyle = () => ({
    flex: 1,
    textAlign: "center",
    transition: "opacity 0.3s ease",
    margin: windowWidth <= 767 ? "0.2rem 0" : "0 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  // Fix: set color to #1976d2 when scrolled, #fff when not scrolled
  const getDmcTitleStyle = () => ({
    color: isScrolled ? "#1976d2" : "#1976d2",
    textShadow: isScrolled
      ? "0 2px 8px rgba(25, 118, 210, 0.10)"
      : "0 2px 8px rgba(25, 118, 210, 0.18)",
    fontSize:
      windowWidth <= 767
        ? "1.15rem"
        : windowWidth <= 1010
        ? "1.4rem"
        : "2.2rem",
    letterSpacing: "2px",
    fontWeight: 700,
    margin: 0,
    textTransform: "uppercase",
    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
    paddingTop: windowWidth <= 767 ? "10px" : "25px",
  });

  // Fix: use dark color when scrolled, light color when not
  const getUniversityNameStyle = () => ({
    color: isScrolled ? "#1976d2" : "#1976d2",
    fontSize:
      windowWidth <= 767
        ? "1rem"
        : windowWidth <= 1010
        ? "1.1rem"
        : "1.25rem",
    fontWeight: 500,
    margin: "10px 0 0 0",
    letterSpacing: "1px",
    textTransform: "uppercase",
    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
  });

  // Fix: always show location, color and background based on scroll
  const getLocationStyle = () => ({
    color:
      windowWidth <= 1010
        ? isScrolled
          ? "#1976d2"
          : "#1976d2"
        : isScrolled
        ? "#1976d2"
        : "#0000",
    background:
      windowWidth <= 1010
        ? isScrolled
          ? "#fff"
          : "#fff": "transparent",
    fontSize:
      windowWidth <= 767
        ? "0.7rem"
        : windowWidth <= 1010
        ? "1rem"
        : "1.2rem",
    margin: windowWidth <= 767 ? "5px 0 0 0" : "10px 0 0 0",
    letterSpacing: "0.5px",
    display: "block",
    borderRadius: windowWidth <= 1010 ? "6px" : "0",
    padding: windowWidth <= 1010 ? "2px 8px" : "0",
    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
  });

  // --- Main Render ---
  return (
    <header style={getHeaderStyle()}>
      {windowWidth <= 767 ? (
        // On small screens, show both logos side by side at the top
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: "12px",
            marginBottom: "0.2rem",
          }}
        >
          <img
            src={jntugv_logo}
            alt="JNTUGV_LOGO"
            draggable={false}
            loading="lazy"
            style={{
              ...getLogoStyle(),
              width: isScrolled ? "4.5rem" : "7rem",
              margin: "0.5rem 0.2rem",
            }}
          />
          <img
            src={dmcLogo}
            alt="DMC_LOGO"
            draggable={false}
            loading="lazy"
            style={{
              ...getLogoStyle(),
              width: isScrolled ? "3.5rem" : "7rem",
              margin: "0.5rem 0.2rem",
            }}
          />
        </div>
      ) : (
        // On large screens, show JNTUGV logo left, DMC logo right
        <>
          <img
            src={jntugv_logo}
            alt="JNTUGV_LOGO"
            draggable={false}
            loading="lazy"
            style={getLogoStyle()}
          />
        </>
      )}
      <div style={getHeaderTextStyle()}>
        <h1 style={getDmcTitleStyle()}>
          DIGITAL MONITORING CELL
        </h1>
        <h2 style={getUniversityNameStyle()}>
          JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY GURAJADA VIZIANAGARAM
        </h2>
        <h6 style={getLocationStyle()}>
          Vizianagaram, Andhra Pradesh, India
        </h6>
      </div>
      {windowWidth > 767 && (
        <img
          src={dmcLogo}
          alt="DMC_LOGO"
          draggable={false}
          loading="lazy"
          style={{
            ...getLogoStyle(),
            marginLeft: "0",
            marginRight: "0",
            order: 3,
            width: getLogoStyle().width,
            height: "auto",
            verticalAlign: "middle",
          }}
        />
      )}
    </header>
  );
};

export default Header;
