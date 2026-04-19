import React, { useState, useEffect } from 'react';
import { getPatients, getJessicaTaylor } from './services/api';
import Navbar from './components/Navbar';
import PatientSidebar from './components/PatientSidebar';
import DiagnosisHistory from './components/DiagnosisHistory';
import DiagnosticList from './components/DiagnosticList';
import ProfileSidebar from './components/ProfileSidebar';

function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getPatients();
        setPatients(data);
        // Requirement: Default to Jessica Taylor
        const jessica = getJessicaTaylor(data);
        setSelectedPatient(jessica);
      } catch (error) {
        console.error("Dashboard failed to load:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div className="loading-state">Initialising Tech.Care Dashboard...</div>;

  return (
    <div className="app-root">
      <Navbar />
      
      <main className="dashboard-container">
        {/* Left Column: Patients List */}
        <section className="column-left">
          <PatientSidebar 
            patients={patients} 
            selectedId={selectedPatient?.name} 
            onSelect={setSelectedPatient} 
          />
        </section>

        {/* Middle Column: Detailed Vitals & History */}
        <section className="column-middle main-content">
          <DiagnosisHistory history={selectedPatient?.diagnosis_history || []} />
          <DiagnosticList list={selectedPatient?.diagnostic_list || []} />
        </section>

        {/* Right Column: Profile & Labs */}
        <section className="column-right profile-sidebar">
          <ProfileSidebar patient={selectedPatient} />
        </section>
      </main>
    </div>
  );
}

export default App;
