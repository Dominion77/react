
import React from 'react';
import './EmployeeCard.css';

const EmployeeCard = ({ employee }) => {
  const { name, salary, occupation, experience, isMarried, imageUrl, secondaryOccupation } = employee;
  
  const jobTitle = experience > 3 ? `Snr ${occupation}` : occupation;
  const maritalStatus = isMarried ? 'Married' : 'Single';

  return (
    <div className="employee-card">
      <div className="employee-info">
        <h3>Name: {name}</h3>
        <p>Salary: ${salary}</p>
        {secondaryOccupation && <p>{secondaryOccupation}</p>}
        <p>{maritalStatus}</p>
        <p>{jobTitle}</p>
      </div>
      {imageUrl && (
        <div className="employee-image">
          <img src={imageUrl} alt={`${name}`} />
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;