import React, { useEffect, useState } from "react";
import { FaUserCog } from "react-icons/fa";
import Pagination from "../Pagination";
import "../Styles/TeamCard.css";
import "../Styles/pagination.css";
import TeamCard from "../TeamCard";
import "./Iqac.css"; // You may keep specific styles here
import teamData from "./IqacData";

const extractYear = (yearStr) => {
  if (!yearStr) return 0;
  const match = yearStr.match(/^\d{4}/);
  return match ? parseInt(match[0]) : 0;
};

const Iqac = () => {
  const [currentPageByYear, setCurrentPageByYear] = useState({});
  const itemsPerPage = 12;

  const yearMap = {};
  teamData.forEach((member) => {
    if (!yearMap[member.year]) yearMap[member.year] = [];
    yearMap[member.year].push(member);
  });

  const sortedYears = Object.keys(yearMap).sort(
    (a, b) => extractYear(b) - extractYear(a)
  );

  useEffect(() => {
    setCurrentPageByYear({});
  }, []);

  return (
    <div className="lead-container">
      {/* Title Section */}
      <div className="title-search-container">
        <h2 className="lead-title">
          <FaUserCog style={{ fontSize: 32, color: "#0b3d91" }} />
          IQAC Cell Team
        </h2>
      </div>

      {/* Year-wise Members */}
      <div className="lead-wrapper">
        {sortedYears.map((year) => {
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
                  <TeamCard key={member.rollNumber + year} member={member} badge="IQAC Member" />
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
        })}
      </div>
    </div>
  );
};

export default Iqac;

