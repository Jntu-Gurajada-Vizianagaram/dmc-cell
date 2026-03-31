import React, { useMemo, useState } from 'react';
import { FaDatabase, FaShieldAlt, FaUserCircle } from 'react-icons/fa';
import teamData from './ExaminationData';

const AVATAR_COLORS = [
  "#0b3d91", "#1e3a8a", "#0369a1", "#075985"
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

const groupByYear = (data) => {
  return data.reduce((groups, member) => {
    const year = member.year || 'Other';
    if (!groups[year]) groups[year] = [];
    groups[year].push(member);
    return groups;
  }, {});
};

const PAGE_SIZE = 1;

const Examination = () => {
  const { groupedData, sortedYears } = useMemo(() => {
    const grouped = groupByYear(teamData);
    const years = Object.keys(grouped)
      .sort((a, b) => isNaN(Number(a)) ? b.localeCompare(a) : Number(b) - Number(a));
    return { groupedData: grouped, sortedYears: years };
  }, []);

  const [page, setPage] = useState(0);
  const pagedYears = sortedYears.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(sortedYears.length - 1, p + 1));

  return (
    <div className="fade-in" style={{ paddingBottom: "4rem" }}>
      
      {/* Institutional Synergy Hero */}
      <section style={{ 
        padding: "3rem", 
        background: "linear-gradient(135deg, #f8fafc 0%, #fff 100%)", 
        borderRadius: "2.5rem", 
        border: "1px solid #e2e8f0",
        marginBottom: "4rem",
        boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ 
            width: "60px", 
            height: "60px", 
            background: "rgba(11, 61, 145, 0.05)", 
            color: "#0b3d91", 
            borderRadius: "15px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            fontSize: "1.8rem" 
          }}>
            <FaDatabase />
          </div>
          <h2 style={{ fontSize: "2rem", margin: 0, fontWeight: 800, color: "#0b3d91" }}>DMC-Examination Synergy</h2>
        </div>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.85, color: "#475569", maxWidth: "800px", textAlign: "justify" }}>
           The Digital Monitoring Cell provides persistent technical backbones to the JNTUGV Examination Cell, architecting secure digital valuation nodes, end-to-end result processing systems, and high-availability student portals for seamless institutional integrity.
        </p>
        <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
           <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0b3d91", fontWeight: 700 }}>
             <FaShieldAlt style={{ opacity: 0.6 }} /> 100% Encrypted Result Grids
           </div>
           <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0b3d91", fontWeight: 700 }}>
             <FaUserCircle style={{ opacity: 0.6 }} /> Automated Merit Analytics
           </div>
        </div>
      </section>

      {/* Team Pagination Display */}
      <h2 style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.6rem", marginBottom: "2.5rem", color: "#0b3d91", fontWeight: 800 }}>
        Institutional Contribution Grid: {pagedYears[0]}
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "3rem", gap: "2rem" }}>
        <button onClick={handlePrev} disabled={page === 0} className="btn-page"> &lt; Previous Tenure </button>
        <span style={{ fontWeight: 800, fontSize: "1.4rem", color: "#0b3d91", minWidth: "120px", textAlign: "center" }}> {pagedYears[0]} </span>
        <button onClick={handleNext} disabled={page >= sortedYears.length - 1} className="btn-page"> Next Tenure &gt; </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
        {groupedData[pagedYears[0]].map((member) => (
          <div key={member.name} className="card-member" style={{
            padding: "3rem 2rem", background: "#fff", borderRadius: "2rem", border: "1px solid #f1f5f9", boxShadow: "0 10px 25px rgba(0,0,0,0.03)", textAlign: "center", transition: "all 0.3s ease"
          }}>
             <div style={{
                width: "90px", height: "90px", margin: "0 auto 1.5rem", borderRadius: "50%", background: getAvatarColor(member.name), color: "#fff", fontSize: "2rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "5px solid #fff"
             }}>
                {member.image ? <img src={member.image} alt="" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%"}} /> : getInitials(member.name)}
             </div>
             <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1e293b", marginBottom: "0.5rem" }}>{member.name}</h3>
             <p style={{ margin: "0 0 1rem 0", color: "#0b3d91", fontWeight: 700, fontSize: "0.95rem" }}>{member.rollNumber}</p>
             <span style={{ background: "rgba(11, 61, 145, 0.05)", padding: "10px 20px", borderRadius: "50px", color: "#0b3d91", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase" }}>
                {member.role || "Technical Contributor"}
             </span>
          </div>
        ))}
      </div>

      <style>{`
        .btn-page {
          background: #f1f5f9; border: none; padding: 10px 20px; border-radius: 12px; color: #0b3d91; font-weight: 700; cursor: pointer; transition: all 0.2s;
        }
        .btn-page:hover:not(:disabled) { background: #0b3d91; color: #fff; transform: translateY(-2px); }
        .btn-page:disabled { opacity: 0.3; cursor: not-allowed; }
        .card-member:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(11, 61, 145, 0.1) !important; border-color: #0b3d91 !important; }
      `}</style>
    </div>
  );
};

export default Examination;
