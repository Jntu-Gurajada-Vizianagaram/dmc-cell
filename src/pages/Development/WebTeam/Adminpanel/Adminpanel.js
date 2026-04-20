import React, { useEffect, useState } from "react";
import { FaUserShield } from "react-icons/fa";
import Pagination from "../Pagination";
import TeamCard from "../TeamCard";
import "./Adminpanel.css";
import teamData from "./AdminpanelData";


const extractYear = (yearStr) => {
  if (!yearStr) return 0;
  const match = yearStr.match(/^\d{4}/);
  return match ? parseInt(match[0]) : 0;
};

const AVATAR_COLORS = [
  "#0b3d91", "#6BCB77", "#FFD93D", "#FF6B6B", "#845EC2", "#00C9A7", "#F9A826"
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

const Adminpanel = () => {
  const [currentPageByYear, setCurrentPageByYear] = useState({});
  const [sortYear, setSortYear] = useState("All");
  const itemsPerPage = 6;

  const yearMap = {};
  teamData.forEach((member) => {
    if (!yearMap[member.year]) yearMap[member.year] = [];
    yearMap[member.year].push(member);
  });

  const allYears = Object.keys(yearMap).sort(
    (a, b) => extractYear(b) - extractYear(a)
  );

  const sortedYears = sortYear === "All" ? allYears : [sortYear];

  useEffect(() => {
    setCurrentPageByYear({});
  }, [sortYear]);

  return (
    <div className="lead-container">
      <div className="title-sort-container">
      <h2 className="lead-title" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <FaUserShield style={{ fontSize: 32, color: "#0b3d91" }}/>Admin Panel Team
      </h2>

      <div
        className="sort-container"
        style={{
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: 16,
        }}
      >
        <label htmlFor="yearSort" style={{ fontWeight: 500, color: '#2d3a4a' }}>
          Sort by Year:
        </label>
        <select
          id="yearSort"
          value={sortYear}
          onChange={e => setSortYear(e.target.value)}
          style={{
            marginLeft: '10px',
            padding: '6px 12px',
            borderRadius: 6,
            border: '1px solid #0b3d9155',
            fontSize: 15,
            background: '#f8fbff',
            color: '#2d3a4a',
            outline: 'none',
            fontWeight: 500,
          }}
        >
          <option value="All">All</option>
          {allYears.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      </div>

      <div className="lead-wrapper">
        {sortedYears.length === 0 ? (
          <div className="no-results">
            No members available.
          </div>
        ) : (
          sortedYears.map((year) => {
            const members = yearMap[year];
            const totalPages = Math.ceil(members.length / itemsPerPage);
            const currentPage = currentPageByYear[year] || 1;
            const indexOfFirst = (currentPage - 1) * itemsPerPage;
            const currentMembers = members.slice(indexOfFirst, indexOfFirst + itemsPerPage);

            return (
              <div className="year-section" key={year}>
                <div className="year-header">
                  <div className="year-dot" />
                  <h4 className="year-label">{year}</h4>
                  <div className="year-line" />
                </div>
                <div className="card-grid">
                  {currentMembers.map((member) => (
                    <TeamCard
                      key={member.rollNumber + year}
                      member={member}
                      badge="Admin Team"
                      getAvatarColor={getAvatarColor}
                      getInitials={getInitials}
                    />
                  ))}
                </div>
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) =>
                      setCurrentPageByYear((prev) => ({ ...prev, [year]: page }))
                    }
                  />
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Adminpanel;

