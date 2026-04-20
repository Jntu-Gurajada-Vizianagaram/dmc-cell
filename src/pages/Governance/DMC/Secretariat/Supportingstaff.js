import React from "react";
import {
  FaEnvelope,
  FaHistory,
  FaServer,
  FaGlobe,
  FaCode,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileImg from "../../../../Assets/CoordinatorsTeam/website_team/profile_sa.jpg";

const Supportingstaff = () => {
  return (
    <div
      className="fade-in"
      style={{
        maxWidth: 1150,
        margin: "2rem auto",
        width: "100%",
        padding: "0 1.5rem",
      }}
    >
      <div
        className="card"
        style={{
          padding: "4rem",
          background: "#fff",
          borderRadius: "18px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1
            style={{
              fontSize: "2.7rem",
              fontWeight: 700,
              color: "var(--primary-blue)",
              marginBottom: "0.7rem",
            }}
          >
            Technical Secretariat
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Digital Infrastructure • Automation • Governance Support
          </p>

          <div
            style={{
              width: "70px",
              height: "4px",
              background: "var(--accent-gold)",
              margin: "1.4rem auto",
              borderRadius: "10px",
            }}
          ></div>
        </div>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem",
          }}
        >
          {/* Left Section */}
          <div
            style={{
              background: "var(--bg-soft)",
              padding: "2.8rem",
              borderRadius: "18px",
              border: "1px solid var(--border-light)",
              textAlign: "center",
            }}
          >
            <img
              src={ProfileImg}
              alt="Anil Sinthu"
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "18px",
                objectFit: "cover",
                marginBottom: "2rem",
                boxShadow: "var(--shadow-md)",
              }}
            />

            <h2
              style={{
                fontSize: "1.9rem",
                fontWeight: 700,
                marginBottom: "0.3rem",
                color: "var(--text-main)",
              }}
            >
              Mr. Anil Sinthu
            </h2>

            <h4
              style={{
                color: "var(--accent-gold)",
                fontWeight: 700,
                fontSize: "0.95rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
            >
              Programmer
            </h4>
            <a
              href="mailto:dpo@jntugv.edu.in"
              style={{
                display: "inline-flex",
                alignItems: "center",
                // gap: "10px",
                // padding: "0.9rem 1.3rem",
                // borderRadius: "10px",
                background: "#fff",
                textDecoration: "none",
                color: "var(--primary-blue)",
                // fontWeight: 700,
                // border: "1px solid var(--border-light)",
                marginBottom: "1rem",
              }}
            >
              <FaEnvelope />
              dpo@jntugv.edu.in
            </a>

            {/* Quick Roles */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem",
                marginBottom: "2rem",
              }}
            >
              {[
                {
                  icon: <FaGlobe color="var(--primary-blue)" />,
                  text: "University Website Administration",
                },
                {
                  icon: <FaServer color="var(--primary-blue)" />,
                  text: "Server & Hosting Management",
                },
                {
                  icon: <FaDatabase color="var(--primary-blue)" />,
                  text: "ERP & Database Operations",
                },
                {
                  icon: <FaShieldAlt color="var(--primary-blue)" />,
                  text: "Security & SSL Management",
                },
                {
                  icon: <FaCode color="var(--primary-blue)" />,
                  text: "Web Application Development",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "#fff",
                    padding: "1rem",
                    borderRadius: "12px",
                    border: "1px solid var(--border-light)",
                    textAlign: "left",
                  }}
                >
                  {item.icon}
                  <span
                    style={{
                      fontSize: "0.94rem",
                      fontWeight: 600,
                      color: "var(--text-main)",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Profile Summary */}
            <div
              className="card"
              style={{
                padding: "2rem",
                margin: 0,
                background: "#fff",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--primary-blue)",
                  marginBottom: "1rem",
                }}
              >
                Professional Profile
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                  textAlign: "justify",
                }}
              >
                Mr. Anil Sinthu serves as Programmer at JNTU-GV and contributes
                significantly to the planning, development, and maintenance of
                the university’s digital ecosystem. He manages official
                websites, admission portals, examination systems, ERP services,
                internal workflow applications, and institutional online
                platforms.

                His expertise includes Linux server administration, domain and
                DNS management, SSL certificate implementation, PM2 deployment,
                MySQL database operations, backups, security hardening, and
                uptime monitoring.

                He develops modern web solutions using React.js, Node.js,
                Express.js, PHP, and related technologies, helping automate
                university administration and improve digital governance.

                He also provides technical support for result processing,
                confidential examination workflows, cloud deployment, email
                systems, user management, reporting systems, and official
                university events.
              </p>
            </div>

            {/* Core Works */}
            <div
              style={{
                padding: "2rem",
                background: "var(--bg-soft)",
                borderRadius: "16px",
                borderTop: "4px solid var(--primary-blue)",
                border: "1px solid var(--border-light)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--primary-blue)",
                  marginBottom: "1rem",
                }}
              >
                Key Contributions at JNTU-GV
              </h3>

              <ul
                style={{
                  paddingLeft: "1rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.9,
                  fontSize: "0.95rem",
                }}
              >
                <li>Official University Website Management</li>
                <li>Admissions & Student Service Portals</li>
                <li>ERP, Result Processing & Examination Systems</li>
                <li>Cloud Hosting, SSL & Server Maintenance</li>
                <li>Digital File Tracking & Workflow Automation</li>
                <li>Database Administration & Backup Systems</li>
                <li>Email, User Account & Network Support</li>
                <li>Technical Support for University Events</li>
              </ul>

              <Link
                to="/dmc/former-leadership"
                className="btn btn-outline"
                style={{
                  marginTop: "1.5rem",
                  width: "100%",
                  justifyContent: "center",
                  background: "#fff",
                }}
              >
                <FaHistory style={{ marginRight: "10px" }} />
                Roll of Honor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supportingstaff;