import React from 'react';

const DiagnosticList = ({ list }) => {
  return (
    <div className="card diagnosis-table-container">
      <h2>Diagnostic List</h2>
      <div style={{ flex: 1, overflowY: 'auto', marginTop: '30px' }}>
        <table>
            <thead>
            <tr>
                <th>Problem/Diagnosis</th>
                <th>Description</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {list.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
