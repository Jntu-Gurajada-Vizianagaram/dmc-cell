import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Pagination from '../Pagination';
import TeamCard from '../TeamCard';
import './Leadcontributors.css';
import teamData from './LeadcontributorsData';

const AVATAR_COLORS = [
  "#0b3d91", "#6BCB77", "#FFD93D", "#FF6B6B", "#845EC2", "#00C9A7", "#F9A826"
];

const getAvatarColor = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++)
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
};

const getInitials = (name) => {
  const parts = name.trim().split(' ');
  return parts.length === 1
    ? parts[0][0].toUpperCase()
    : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const extractYear = (yearStr) => {
  if (!yearStr) return 0;
  const match = yearStr.match(/^\d{4}/);
  return match ? parseInt(match[0]) : 0;
};

const Leadcontributors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const sortedMembers = [...teamData].sort((a, b) => {
    const yearA = extractYear(a.year);
    const yearB = extractYear(b.year);
    if (yearA !== yearB) return yearB - yearA;
    return (a.name || '').localeCompare(b.name || '');
  });

  const totalPages = Math.ceil(sortedMembers.length / itemsPerPage);
  const indexOfFirst = (currentPage - 1) * itemsPerPage;
  const currentMembers = sortedMembers.slice(indexOfFirst, indexOfFirst + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <div className="lead-container">
      <h2 className="lead-title" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <FaUserCircle style={{ fontSize: 32, color: "#0b3d91" }} />
        Lead Contributors
      </h2>
      <div className="lead-wrapper">
        <div className="card-grid">
          {currentMembers.map((member) => (
            <TeamCard
              key={(member.rollNumber || member.name)}
              member={member}
              getAvatarColor={getAvatarColor}
              getInitials={getInitials}
            />
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Leadcontributors;

