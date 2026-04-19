import React from 'react';

const PatientSidebar = ({ patients, selectedId, onSelect }) => {
  return (
    <div className="card sidebar-patients">
      <div className="sidebar-header">
        <h2>Patients</h2>
        <img 
          src="/assets/search_FILL0_wght300_GRAD0_opsz24.svg" 
          alt="Search" 
          style={{cursor: 'pointer'}} 
        />
      </div>
      
      <div className="patient-list">
        {patients.map((patient) => (
          <div 
            key={patient.name} 
            className={`patient-item ${selectedId === patient.name ? 'selected' : ''}`}
            onClick={() => onSelect(patient)}
          >
            <div className="patient-info">
              <img src={patient.profile_picture} alt={patient.name} className="avatar" />
              <div className="text">
                <span className="name">{patient.name}</span>
                <span className="meta">{patient.gender}, {patient.age}</span>
              </div>
            </div>
            <img 
              src="/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" 
              alt="More info" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientSidebar;
