import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaTools } from "react-icons/fa";

const AVATAR_COLORS = [
    "#0b3d91", "#1e40af", "#1e3a8a", "#1e293b", "#0f172a"
];

const getAvatarColor = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
};

const getInitials = (name) => {
    const parts = name.trim().split(" ");
    return parts.length === 1
        ? parts[0][0].toUpperCase()
        : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const TeamCard = ({ member }) => {
    const {
        name, rollNumber, role, year, image, website, linkedin, github, email, about, contributions, skills
    } = member;

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1000);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const initials = getInitials(name);
    const avatarColor = getAvatarColor(name);

    const socialLinks = [
        { icon: <FaGlobe />, url: website, color: "#10b981", name: "Website" },
        { icon: <FaLinkedin />, url: linkedin, color: "#0077b5", name: "LinkedIn" },
        { icon: <FaGithub />, url: github, color: "#1e293b", name: "GitHub" },
        { icon: <FaEnvelope />, url: email ? (email.startsWith("mailto:") ? email : `mailto:${email}`) : null, color: "#ef4444", name: "Email" }
    ];

    const hasFullData = about || (contributions && contributions.length > 0) || (skills && skills.length > 0);

    return (
        <div style={{
            background: "#fff",
            borderRadius: "1.25rem",
            padding: isMobile || !hasFullData ? "2.5rem" : "3.5rem",
            border: "1px solid var(--border-light)",
            boxShadow: hasFullData ? "var(--shadow-md)" : "var(--shadow-sm)",
            display: "flex",
            flexDirection: hasFullData && !isMobile ? "row" : "column",
            alignItems: hasFullData && !isMobile ? "flex-start" : "center",
            textAlign: hasFullData && !isMobile ? "left" : "center",
            gap: hasFullData && !isMobile ? "4rem" : "0",
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden",
            gridColumn: hasFullData ? "1 / -1" : "auto", 
        }}
        className="contributor-card"
        >
            {/* Left/Top Profile Section */}
            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                textAlign: "center",
                minWidth: hasFullData && !isMobile ? "280px" : "auto",
                borderRight: hasFullData && !isMobile ? "1px solid var(--border-light)" : "none",
                paddingRight: hasFullData && !isMobile ? "3rem" : "0"
            }}>
                <div style={{
                    width: hasFullData ? "160px" : "130px",
                    height: hasFullData ? "160px" : "130px",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    background: image ? "var(--bg-soft)" : avatarColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    boxShadow: "var(--shadow-sm)",
                    border: "4px solid #f8fafc"
                }}>
                    {image ? (
                        <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                        <span style={{ fontWeight: 800, fontSize: "3rem", color: "#fff" }}>{initials}</span>
                    )}
                </div>

                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--primary-blue)", marginBottom: "0.25rem", lineHeight: 1.2 }}>{name}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                    {rollNumber || "Institutional Architect"}
                </p>
                
                <div style={{ 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "10px", 
                    background: "var(--bg-soft)", 
                    color: "var(--primary-blue)", 
                    padding: "8px 20px", 
                    borderRadius: "12px", 
                    fontSize: "1rem", 
                    fontWeight: 800, 
                    marginBottom: "1.5rem",
                    border: "1px solid rgba(11, 61, 145, 0.1)"
                }}>
                    <FaUserCheck size={16} /> {year}
                </div>

                <div style={{ 
                    background: hasFullData ? "#facc15" : "rgba(11, 61, 145, 0.05)", 
                    width: "100%", 
                    padding: "1.2rem", 
                    borderRadius: "12px", 
                    marginBottom: "2rem", 
                    border: hasFullData ? "none" : "1px solid var(--border-light)" 
                }}>
                    <span style={{ fontSize: "1.1rem", fontWeight: 800, color: hasFullData ? "#0b3d91" : "var(--primary-blue)" }}>
                        {role || "Digital Contributor"}
                    </span>
                </div>

                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    {socialLinks.map((link, idx) => link.url ? (
                        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name} style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "10px",
                            background: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: link.color,
                            fontSize: "1.3rem",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                            border: "1px solid var(--border-light)",
                            transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
                        }} className="social-icon">
                            {link.icon}
                        </a>
                    ) : null)}
                </div>
            </div>

            {/* Right Full Data Section (Conditional) */}
            {hasFullData && (
                <div style={{ 
                    flex: 1, 
                    textAlign: "left", 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "2.5rem",
                    marginTop: isMobile ? "3rem" : "0"
                }}>
                    {about && (
                        <div>
                            <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--primary-blue)", marginBottom: "1rem", borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>
                                Professional Overview
                            </h4>
                            <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-main)", fontWeight: 500, margin: 0 }}>
                                {about}
                            </p>
                        </div>
                    )}

                    {contributions && contributions.length > 0 && (
                        <div>
                            <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--primary-blue)", marginBottom: "1.25rem", borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem", display: "flex", alignItems: "center", gap: "10px" }}>
                                <FaTools color="var(--accent-gold)" /> Institutional Contributions
                            </h4>
                            <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "grid", gap: "1rem" }}>
                                {contributions.map((point, index) => (
                                    <li key={index} style={{ display: "flex", alignItems: "start", gap: "12px", fontSize: "1.1rem", color: "var(--text-main)", lineHeight: 1.6, fontWeight: 500 }}>
                                        <div style={{ marginTop: "4px" }}>
                                            <FaCheckCircle color="var(--primary-blue)" />
                                        </div>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {skills && skills.length > 0 && (
                        <div>
                            <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--primary-blue)", marginBottom: "1rem", borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>
                                Core Technologies
                            </h4>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                                {skills.map((skill, index) => (
                                    <span key={index} style={{
                                        background: "var(--bg-soft)",
                                        border: "1px solid var(--border-light)",
                                        color: "var(--primary-blue)",
                                        padding: "8px 16px",
                                        borderRadius: "20px",
                                        fontSize: "1rem",
                                        fontWeight: 700,
                                        boxShadow: "0 2px 5px rgba(0,0,0,0.02)"
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            <style>{`
                .contributor-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 25px 50px rgba(11, 61, 145, 0.08) !important;
                    border-color: rgba(11, 61, 145, 0.3) !important;
                }
                .social-icon:hover {
                    transform: translateY(-4px) scale(1.05);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
                    border-color: transparent !important;
                }
            `}</style>
        </div>
    );
};

// Helper Icon
const FaUserCheck = ({ size }) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
    </svg>
);

export default TeamCard;
