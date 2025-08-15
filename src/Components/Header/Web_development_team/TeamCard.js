// TeamCard.js
import React from "react";
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import "./Styles/TeamCard.css";

const AVATAR_COLORS = [
    "#4D96FF", "#6BCB77", "#FFD93D", "#FF6B6B", "#845EC2", "#00C9A7", "#F9A826"
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
        name, rollNumber, role, year, image, website, linkedin, github, instagram, email
    } = member;

    const initials = getInitials(name);
    const avatarColor = getAvatarColor(name);

    // Always show all icons, but only make them links if the value is present
    const socialLinks = [
        {
            icon: <FaGlobe />,
            url: website,
            class: "globe",
            label: "Website"
        },
        {
            icon: <FaLinkedin />,
            url: linkedin,
            class: "linkedin",
            label: "LinkedIn"
        },
        {
            icon: <FaGithub />,
            url: github,
            class: "github",
            label: "GitHub"
        },
        
        {
            icon: <FaEnvelope />,
            url: email ? (email.startsWith("mailto:") ? email : `mailto:${email}`) : null,
            class: "email",
            label: "Email"
        },
    ];

    return (
        <div className="card enhanced-card">
            <div
                className="enhanced-avatar"
                style={{
                    background: image ? "transparent" : avatarColor,
                    display: "flex", alignItems: "center", justifyContent: "center"
                }}
            >
                {image ? (
                    <img src={image} alt={name} loading="lazy" />
                ) : (
                    <span style={{ fontWeight: "bold", fontSize: "1.3em", color: "#fff" }}>{initials}</span>
                )}
            </div>

            <div className="info">
                <div className="name-row">
                    <span className="name">{name}</span>
                </div>
                <div className="roll-branch-row">
                    <span className="roll">{rollNumber}</span>
                </div>
                <div className="year">
                    <span className="year"> {year}</span>
                </div>
                <div className="role">
                    <span className="badge">{role || "Contributor"}</span>
                </div>
                <div className="social-row">
                    {socialLinks.map((link, idx) =>
                        link.url ? (
                            <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`social-link ${link.class}`}
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ) : (
                            <span
                                key={idx}
                                className={`social-link disabled ${link.class}`}
                                aria-label={link.label}
                                tabIndex={-1}
                            >
                                {link.icon}
                            </span>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
