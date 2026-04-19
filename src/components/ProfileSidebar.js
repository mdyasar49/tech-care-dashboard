import React from 'react';

const ProfileSidebar = ({ patient }) => {
  if (!patient) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <>
      <div className="card profile-card">
        <img src={patient.profile_picture} alt={patient.name} className="profile-pic" />
        <h3>{patient.name}</h3>

        <div className="info-list">
          <InfoRow 
            icon="/assets/BirthIcon.svg"
            label="Date Of Birth"
            value={formatDate(patient.date_of_birth)}
          />
          <InfoRow 
            icon="/assets/FemaleIcon.svg"
            label="Gender"
            value={patient.gender}
          />
          <InfoRow 
            icon="/assets/PhoneIcon.svg"
            label="Contact Info."
            value={patient.phone_number}
          />
          <InfoRow 
            icon="/assets/PhoneIcon.svg"
            label="Emergency Contacts"
            value={patient.emergency_contact}
          />
          <InfoRow 
            icon="/assets/InsuranceIcon.svg"
            label="Insurance Provider"
            value={patient.insurance_type}
          />
        </div>

        <button className="btn-info">Show All Information</button>
      </div>

      <div className="card lab-card" style={{marginTop: '32px', flex: 1, display: 'flex', flexDirection: 'column'}}>
        <h2>Lab Results</h2>
        <div className="lab-list" style={{flex: 1, overflowY: 'auto'}}>
          {patient.lab_results.map((result, index) => (
            <div key={index} className="lab-item">
              <span>{result}</span>
              <img 
                src="/assets/download.svg" 
                alt="Download" 
                style={{cursor: 'pointer'}} 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div className="info-row">
    <div className="icon-circle">
      <img src={icon} alt="" />
    </div>
    <div className="text" style={{display: 'flex', flexDirection: 'column'}}>
      <span className="label" style={{fontSize: '14px', fontWeight: '500'}}>{label}</span>
      <span className="value" style={{fontSize: '14px', fontWeight: '700'}}>{value}</span>
    </div>
  </div>
);

export default ProfileSidebar;
