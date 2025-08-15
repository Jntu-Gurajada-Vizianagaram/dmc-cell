import React, { useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCogs,
  FaInfoCircle,
  FaLightbulb,
  FaPaintBrush,
  FaTasks,
  FaUserTie,
} from "react-icons/fa";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { to: "/dmc/about-dmc", label: "About DMC Cell", icon: <FaInfoCircle /> },
  { to: "/dmc/dmc-co-ordinator", label: "DMC Co-Ordinator", icon: <FaUserTie /> },
  { to: "/dmc/dmc-designer", label: "DMC Designer", icon: <FaPaintBrush /> },
  { to: "/dmc/dmc-activities", label: "DMC Activities", icon: <FaTasks /> },
  { to: "/dmc/dmc-future-plans", label: "DMC Future Plans", icon: <FaLightbulb /> },
  { to: "/dmc/dmc-facilities", label: "DMC Facilities", icon: <FaCogs /> },
];

const AboutMain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const active = navRef.current?.querySelector(".active");
    if (active && isMobile) {
      const parent = navRef.current;
      const offset = active.offsetLeft - parent.offsetWidth / 2 + active.offsetWidth / 2;
      parent.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, [location.pathname, isMobile]);

  const activeIndex = menuItems.findIndex(item => item.to === location.pathname);

  const goToIndex = (index) => {
    if (index >= 0 && index < menuItems.length) {
      navigate(menuItems[index].to);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", width: "100%" }}>
      {isMobile && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1rem" }}>
          <button onClick={() => goToIndex(activeIndex - 1)} disabled={activeIndex === 0} style={{ background: "none", border: "none" }}>
            <FaChevronLeft size={22} />
          </button>
          <button onClick={() => goToIndex(activeIndex + 1)} disabled={activeIndex === menuItems.length - 1} style={{ background: "none", border: "none" }}>
            <FaChevronRight size={22} />
          </button>
        </div>
      )}

      <nav
        ref={navRef}
        style={{
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          overflowX: isMobile ? "auto" : "visible",
          gap: "10px",
          padding: isMobile ? "10px 0" : "30px 0 24px 0",
          border: isMobile ? "none" : "1.5px solid #e0e7ef",
          minWidth: isMobile ? undefined : 200,
        }}
      >
        {menuItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={isActive ? "active" : ""}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: isMobile ? "10px 12px" : "12px 16px",
                textDecoration: "none",
                fontWeight: isActive ? 700 : 400,
                color: isActive ? "#035a5a" : "#0b3d91",
                background: isActive ? (isMobile ? "#e3f2fd" : "linear-gradient(90deg, #e3f2fd 60%, #e0f7fa 100%)") : "transparent",
                borderRadius: isMobile ? 0 : 12,
                borderBottom: isMobile && isActive ? "3px solid #90caf9" : "none",
                minWidth: isMobile ? 140 : "auto",
                flex: isMobile ? "0 0 auto" : undefined,
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div style={{ flex: 1, padding: isMobile ? "1rem" : "2rem", background: "#fff", minHeight: "60vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AboutMain;