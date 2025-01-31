import React from 'react';
import '/src/assets/css/Dashboard.css';


const InsightCards = ({opdCount,ipdCount,patientCount}) => {
  const cards = [
    {
      id: 1,
      icon: 'person_outline',
      title: 'Total Patient Visit Count',
      value: patientCount,
      note: 'Select start and end date',
    },
    {
      id: 2,
      icon: 'local_mall',
      title: 'Total Items',
      value: '25,024',
      note: 'Latest Analytics',
    },
    {
      id: 3,
      icon: 'receipt_long',
      title: 'Total IPD Entries',
      value: ipdCount,
      note: 'Latest Analytics',
    },
    {
      id: 4,
      icon: 'receipt_long',
      title: 'Total OPD Entries',
      value: opdCount !== null ? opdCount : 'Loading...',      note: 'Latest Analytics',
    },
  ];

  return (
    <div className="insights">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <span className="material-symbols-sharp">{card.icon}</span>
          <div className="middle">
            <div className="left">
              <h3>{card.title}</h3>
              <h1>{card.value}</h1>
            </div>
          </div>
          <small>{card.note}</small>
        </div>
      ))}
    </div>
  );
};

export default InsightCards;
