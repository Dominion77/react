
import React from 'react';
import './App3.css';
import EmployeeCard from './EmployeeCard';
import morrisImage from './images (1)/Morris.jpeg'
import akeelahImage from './images (1)/Akeelah.jpeg'
import phoebeImage from './images (1)/Phoebe.jpeg'
import dylanImage from './images (1)/Dylan.jpeg'
import markImage from './images (1)/Mark.jpeg'
import herrschaftImage from './images (1)/Herrschaft.jpeg'

function App3() {
  
  const employees = [
    {
      id: 1,
      name: 'Morris',
      salary: 4000,
      occupation: 'Developer',
      experience: 5, 
      isMarried: true,
      imageUrl: morrisImage
    },
    {
      id: 2,
      name: 'Akeelah',
      salary: 4500,
      occupation: 'Developer',
      experience: 2, 
      isMarried: false,
      secondaryOccupation: 'Tutor',
      imageUrl: akeelahImage
    },
    {
      id: 3,
      name: 'Phoebe',
      salary: 8000,
      occupation: 'Developer',
      experience: 4,
      isMarried: true,
      secondaryOccupation: 'Consultant',
      imageUrl: phoebeImage
    },
    {
      id: 4,
      name: 'Dylan',
      salary: 6000,
      occupation: 'Developer',
      experience: 1, 
      isMarried: false,
      imageUrl: dylanImage
    },
    {
      id: 5,
      name: 'Mark',
      salary: 10000,
      occupation: 'Developer',
      experience: 7,
      isMarried: true,
      imageUrl: markImage
    },
    {
        id: 6,
        name: 'Herrschaft',
        salary: 30000,
        occupation: 'Developer',
        experience: 7,
        isMarried: true,
        imageUrl: herrschaftImage 
      }
  ];

  return (
    <div className="app">
      <div className="employee-grid">
        {employees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}

export default App3;