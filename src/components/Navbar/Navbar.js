import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { FaBars, FaCaretDown, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Institutional Governance",
      path: "/governance",
      dropdown: [
        { label: "DMC Overview", path: "/governance/dmc/overview" },
        { label: "DMC Coordinator", path: "/governance/dmc/coordinator" },
        { label: "Technical Secretariat", path: "/governance/dmc/secretariat" },
        { label: "Operational Mandate", path: "/governance/dmc/mandate" },
        { label: "Institutional Roadmap", path: "/governance/dmc/roadmap" },
        { label: "UGC Public Disclosures", path: "/governance/disclosures/ugc" },
        { label: "Roll of Honor", path: "/governance/archives/roll-of-honor" },
      ],
    },
    {
      label: "Operational Portals",
      path: "/operations",
      dropdown: [
        { label: "Service Infrastructure", path: "/operations/infrastructure" },
        { label: "Operational Services", path: "/operations/services" },
        { label: "Procurement Transparency", path: "/operations/procurement" },
        { label: "Security & Surveillance", path: "/operations/surveillance" },
        { label: "Institutional Gallery", path: "/media/gallery" },
      ],
    },
    {
      label: "Technical Hub",
      path: "/development",
      dropdown: [
        { label: "Technical Team", path: "/development/technical-team" },
        { label: "Digital Archives", path: "/development/archives" },
        { label: "Core Systems (DMC)", path: "/development/cells/dmc" },
        { label: "University Web Grid", path: "/development/projects/website" },
      ],
    },
    { label: "Contact", path: "/contact" },
    { label: "University Portal", path: "https://jntugv.edu.in", external: true },
  ];

  return (
    <nav className={`academic-nav ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-container">
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? "nav-active" : ""}`}>
          {navItems.map((item, index) => (
            <li 
              key={index} 
              className={`nav-item ${item.dropdown ? "has-dropdown" : ""} ${activeDropdown === index ? "dropdown-active" : ""}`}
              onMouseEnter={() => !isMobile && setActiveDropdown(index)}
              onMouseLeave={() => !isMobile && setActiveDropdown(null)}
            >
              {item.external ? (
                <a href={item.path} target="_blank" rel="noreferrer" className="nav-link external">
                  {item.label} <FaExternalLinkAlt size={12} style={{ marginLeft: "5px" }} />
                </a>
              ) : (
                <div className="nav-link-wrapper">
                  <Link to={item.path} className={`nav-link ${location.pathname.startsWith(item.path) && item.path !== "/" ? "active" : ""}`}>
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <span className="dropdown-icon" onClick={() => mobileMenuOpen && toggleDropdown(index)}>
                      <FaCaretDown />
                    </span>
                  )}
                </div>
              )}

              {item.dropdown && (
                <ul className={`dropdown-menu ${activeDropdown === index ? "show" : ""}`}>
                  {item.dropdown.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link to={sub.path} className="dropdown-item">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
