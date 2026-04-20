import React from 'react';
import teamData from './NssData';

const getInitials = (name) => {
  const names = name.split(' ');
  if (names.length === 1) return names[0][0];
  return names[0][0] + names[names.length - 1][0];
};

const socialIcons = {
  linkedin: (
    <i className="fab fa-linkedin" aria-label="LinkedIn"></i>
  ),
  github: (
    <i className="fab fa-github" aria-label="GitHub"></i>
  ),
  instagram: (
    <i className="fab fa-instagram" aria-label="Instagram"></i>
  ),
  website: (
    <i className="fas fa-globe" aria-label="Website"></i>
  ),
  email: (
    <i className="fas fa-envelope" aria-label="Email"></i>
  ),
};

const Nss = () => {
  return (
    <div className="nss-team-container">
      <h3 className="nss-title">National Service Scheme Cell Team</h3>
      <div className="nss-cards">
        {teamData.map((member, idx) => (
          <div className="nss-card" key={idx}>
            <div className="nss-avatar">
              <span className="nss-initials">{getInitials(member.name)}</span>
            </div>
            <div className="nss-info">
              <div className="nss-name">{member.name}</div>
              <div className="nss-roll">{member.rollNumber}</div>
              <div className="nss-year">{member.year}</div>
              <div className="nss-socials">
                {Object.entries(member.socials).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    className={`nss-social-link ${key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                  >
                    {socialIcons[key]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .nss-team-container {
          padding: 2.5rem 1.5rem;
          background: #ffffff;
          border-radius: 1.25rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          max-width: 1000px;
          margin: 0 auto;
          border: 1px solid #f1f5f9;
        }
        .nss-title {
          text-align: center;
          font-size: clamp(1.8rem, 4vw, 2.2rem);
          font-weight: 800;
          color: #0b3d91;
          margin-bottom: 2.5rem;
          letter-spacing: -0.01em;
        }
        .nss-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          justify-content: center;
        }
        .nss-card {
          background: #fff;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
        }
        .nss-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(11, 61, 145, 0.1);
          border-color: #0b3d91;
        }
        .nss-avatar {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #0b3d91 60%, #1565c0 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 12px rgba(11, 61, 145, 0.2);
        }
        .nss-initials {
          color: #fff;
          font-size: 1.75rem;
          font-weight: 800;
        }
        .nss-info {
          text-align: center;
          width: 100%;
        }
        .nss-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a2a3a;
          margin-bottom: 0.5rem;
        }
        .nss-roll {
          font-size: 1rem;
          color: #0b3d91;
          font-weight: 600;
          background: #f1f5f9;
          padding: 4px 12px;
          border-radius: 0.5rem;
          display: inline-block;
          margin-bottom: 0.5rem;
        }
        .nss-year {
          font-size: 0.95rem;
          color: #64748b;
          font-weight: 500;
          margin-bottom: 1.25rem;
        }
        .nss-socials {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 0.5rem;
        }
        .nss-social-link {
          font-size: 1.1rem;
          color: #0b3d91;
          background: #f8fafc;
          border-radius: 50%;
          width: 2.2rem;
          height: 2.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          border: 1px solid #e2e8f0;
        }
        .nss-social-link:hover {
          transform: translateY(-3px);
          background: #0b3d91;
          color: #fff;
          box-shadow: 0 4px 12px rgba(11, 61, 145, 0.2);
          border-color: #0b3d91;
        }
        @media (max-width: 600px) {
          .nss-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      {/* FontAwesome CDN for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
    </div>
  );
};

export default Nss;

