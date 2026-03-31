import React, { useState } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import Pagination from '../Pagination';
import TeamCard from '../TeamCard';
import './Placement.css';
import teamData from './PlacementData';

const getUniqueYears = (data) => {
  const years = data.map((member) => member.year);
  return Array.from(new Set(years)).sort((a, b) => b.localeCompare(a));
};

const Placement = () => {
  const [sortYear, setSortYear] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const years = getUniqueYears(teamData);

  const filteredData =
    sortYear === 'All'
      ? teamData
      : teamData.filter((member) => member.year === sortYear);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfFirst = (currentPage - 1) * itemsPerPage;
  const currentMembers = filteredData.slice(indexOfFirst, indexOfFirst + itemsPerPage);

  return (
    <div className="lead-container">
      <div className="title-sort-container">
        <h2 className="lead-title">
          <FaBriefcase style={{ fontSize: 32, color: '#0b3d91' }} />
          Placement Cell Team
        </h2>
        <div className="sort-container">
          <label htmlFor="yearSort">Sort by Year:</label>
          <select
            id="yearSort"
            value={sortYear}
            onChange={(e) => {
              setSortYear(e.target.value);
              setCurrentPage(1);
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

      {filteredData.length === 0 ? (
        <div className="no-results">
          No members found for the selected year.
        </div>
      ) : (
        <>
          <div className="year-section">
            <div className="year-header">
              <div className="year-dot" />
              <h4 className="year-label">{years}</h4>
              <div className="year-line" />
            </div>

            <div className="card-grid">
              {currentMembers.map((member) => (
                <TeamCard key={member.rollNumber} member={member} badge="Placement Cell Team" />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Placement;
