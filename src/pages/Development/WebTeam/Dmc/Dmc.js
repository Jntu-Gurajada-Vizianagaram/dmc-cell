import React, { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import Pagination from "../Pagination";
import TeamCard from "../TeamCard";
import "./Dmc.css";
import teamData from "./DmcData"; // Make sure this file is imported

const getUniqueYears = (data) => {
  const years = data.map((member) => member.year);
  return Array.from(new Set(years)).sort((a, b) => b.localeCompare(a));
};

const Dmc = () => {
  const [sortYear, setSortYear] = useState("All");
  const [currentPageByYear, setCurrentPageByYear] = useState({});
  const itemsPerPage = 12;

  const years = getUniqueYears(teamData);

  // Group team members by year
  const yearMap = {};
  teamData.forEach((member) => {
    if (!yearMap[member.year]) yearMap[member.year] = [];
    yearMap[member.year].push(member);
  });

  const sortedYears = Object.keys(yearMap)
    .sort((a, b) => parseInt(b) - parseInt(a))
    .filter((year) => sortYear === "All" || sortYear === year);

  return (
    <div className="admin-wrapper">
      <div className="title-sort-container">
        <h2 className="lead-title">
          <FaLaptopCode style={{ fontSize: 32, color: "#0b3d91" }} />
          Digital Monitoring Cell
        </h2>
        <div className="sort-container">
          <label htmlFor="yearSort">Sort by Year:</label>
          <select
            id="yearSort"
            value={sortYear}
            onChange={(e) => {
              setSortYear(e.target.value);
              setCurrentPageByYear({});
            }}
          >
            <option value="All">All</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {sortedYears.length === 0 ? (
        <div className="no-results">
          No members found for the selected year.
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
                  <TeamCard key={member.rollNumber} member={member} badge="DMC Member" />
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
  );
};

export default Dmc;
