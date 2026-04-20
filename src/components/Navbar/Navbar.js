import AOS from "aos";
import "aos/dist/aos.css";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { FaBars, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import scrollToSection from "../../utils/scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (path.startsWith('/#')) {
      const hash = path.substring(2);
      if (location.pathname !== "/") {
        navigate(path);
      } else {
        scrollToSection(hash);
      }
      if (isMobile) setMobileMenuOpen(false);
    } else if (path.startsWith('#')) {
      scrollToSection(path.substring(1));
      if (isMobile) setMobileMenuOpen(false);
    } else {
      // For external links, don't prevent default, or handle them directly
      if (path.startsWith('http')) {
        window.open(path, '_blank', 'noopener,noreferrer');
      } else {
        navigate(path);
      }
      if (isMobile) setMobileMenuOpen(false);
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

  const isActive = (itemPath) => {
    if (itemPath === "/") return location.pathname === "/";
    return location.pathname.startsWith(itemPath);
  };

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
                <a href={item.path} target="_blank" rel="noreferrer" className="nav-link-wrapper">
                  <div className="nav-link external">
                    {item.label} <FaExternalLinkAlt size={12} style={{ marginLeft: "5px" }} />
                  </div>
                </a>
              ) : (
                <div className={`nav-link-wrapper ${isActive(item.path) ? "active" : ""}`}>
                  <a href={item.path} className="nav-link" onClick={(e) => handleNavClick(e, item.path, index)}>
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <span
                      className={`dropdown-icon ${activeDropdown === index ? 'icon-rotated' : ''}`}
                      onClick={(e) => {
                        if (isMobile) {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleDropdown(index);
                        }
                      }}
                    >
                      {/* <FaChevronDown /> */}
                    </span>
                  )}
                </div>
              )}

              {item.dropdown && (
                <ul className={`dropdown-menu ${activeDropdown === index ? "show" : ""}`}>
                  {item.dropdown.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <a href={sub.path} className={`dropdown-item ${location.pathname === sub.path ? 'sub-active' : ''}`} onClick={(e) => handleNavClick(e, sub.path)}>
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile nav blur backdrop */}
      {mobileMenuOpen && isMobile && (
        <div className="mobile-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;
