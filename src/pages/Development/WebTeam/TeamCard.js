import React from "react";
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaUserGraduate } from "react-icons/fa";

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
        name, rollNumber, role, year, image, website, linkedin, github, email
    } = member;

    const initials = getInitials(name);
    const avatarColor = getAvatarColor(name);

    const socialLinks = [
        { icon: <FaGlobe />, url: website, color: "#10b981" },
        { icon: <FaLinkedin />, url: linkedin, color: "#0077b5" },
        { icon: <FaGithub />, url: github, color: "#1e293b" },
        { icon: <FaEnvelope />, url: email ? (email.startsWith("mailto:") ? email : `mailto:${email}`) : null, color: "#ef4444" }
    ];

    return (
        <div style={{
            background: "#fff",
            borderRadius: "1rem",
            padding: "2.5rem",
            border: "1px solid var(--border-light)",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden"
        }}
        className="contributor-card"
        >
            <div style={{
                width: "110px",
                height: "110px",
                borderRadius: "1rem",
                overflow: "hidden",
                background: image ? "var(--bg-soft)" : avatarColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                boxShadow: "var(--shadow-sm)",
                border: "4px solid #fff"
            }}>
                {image ? (
                    <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                    <span style={{ fontWeight: 700, fontSize: "2rem", color: "#fff" }}>{initials}</span>
                )}
            </div>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "0.25rem" }}>{name}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                {rollNumber || "Institutional Architect"}
            </p>
            
            <div style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "8px", 
                background: "var(--bg-soft)", 
                color: "var(--primary-blue)", 
                padding: "6px 16px", 
                borderRadius: "8px", 
                fontSize: "0.8rem", 
                fontWeight: 700, 
                marginBottom: "1.5rem",
                border: "1px solid var(--border-light)"
            }}>
                <FaUserCheck size={12} /> {year}
            </div>

            <div style={{ background: "var(--bg-soft)", width: "100%", padding: "1.1rem", borderRadius: "12px", marginBottom: "2rem", border: "1px solid var(--border-light)" }}>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-main)" }}>{role || "Digital Contributor"}</span>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
                {socialLinks.map((link, idx) => link.url ? (
                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "8px",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: link.color,
                        fontSize: "1rem",
                        boxShadow: "var(--shadow-sm)",
                        border: "1px solid var(--border-light)",
                        transition: "all 0.2s"
                    }}>
                        {link.icon}
                    </a>
                ) : null)}
            </div>

            <style>{`
                .contributor-card:hover {
                    transform: translateY(-8px);
                    box-shadow: var(--shadow-md) !important;
                    border-color: var(--primary-blue) !important;
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
