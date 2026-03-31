import React, { useEffect, useState } from "react";
import { FaGlobe, FaSearch } from 'react-icons/fa';
import Pagination from "../Pagination";
import "../Styles/TeamCard.css"; // Includes all team-related styles
import TeamCard from "../TeamCard";
import teamData from "./WebsiteData";

const extractYear = (yearStr) => {
  if (!yearStr) return 0;
  const match = yearStr.match(/^\d{4}/);
  return match ? parseInt(match[0]) : 0;
};

const Website = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPageByYear, setCurrentPageByYear] = useState({});
  const itemsPerPage = 12;

  const filtered = teamData.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (member.position && member.position.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const yearMap = {};
  filtered.forEach((member) => {
    if (!yearMap[member.year]) yearMap[member.year] = [];
    yearMap[member.year].push(member);
  });

  const sortedYears = Object.keys(yearMap).sort(
    (a, b) => extractYear(b) - extractYear(a)
  );

  useEffect(() => {
    setCurrentPageByYear({});
  }, [searchTerm]);

  return (
    <div className="lead-container">
      {/* Title + Search container */}
      <div className="title-search-container">
        <h2 className="lead-title">
          <FaGlobe style={{ fontSize: 32, color: "#0b3d91" }} />
          Website Development Team
        </h2>
        <div className="search-bar-container">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="search-form"
            role="search"
            aria-label="Search team members"
          >
            <div className="search-input-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Search by name, roll, year, or position..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search team members"
                autoComplete="off"
              />
              <FaSearch className="search-icon" aria-hidden="true" />
            </div>
          </form>
        </div>
      </div>

      {/* Members list grouped by year */}
      <div className="lead-wrapper">
        {sortedYears.length === 0 ? (
          <div className="no-results">
            No results found for "{searchTerm}". Please try a different search term.
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
                      badge="Contributor"
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

export default Website;

