import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DiagnosisHistory = ({ history }) => {
  // Use the last 6 months for the chart
  const recentHistory = [...history].slice(0, 6).reverse();
  const latestVitals = history[0] || {};

  const chartData = {
    labels: recentHistory.map(h => `${h.month.substring(0, 3)}, ${h.year}`),
    datasets: [
      {
        label: 'Systolic',
        data: recentHistory.map(h => h.blood_pressure.systolic.value),
        borderColor: '#E66FD2',
        backgroundColor: '#E66FD2',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: '#E66FD2',
        pointBorderColor: '#FFF',
        pointBorderWidth: 1,
      },
      {
        label: 'Diastolic',
        data: recentHistory.map(h => h.blood_pressure.diastolic.value),
        borderColor: '#8C6FFE',
        backgroundColor: '#8C6FFE',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: '#8C6FFE',
        pointBorderColor: '#FFF',
        pointBorderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            top: 20
        }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#072635',
        padding: 12,
        titleFont: { family: 'Manrope', size: 14, weight: 'bold' },
        bodyFont: { family: 'Manrope', size: 14 },
        cornerRadius: 8,
        displayColors: false
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        grid: { color: '#EAEAEA', drawBorder: false },
        ticks: { 
            stepSize: 20,
            font: { family: 'Manrope', size: 12 }, 
            color: '#072635' 
        },
      },
      x: {
        grid: { display: false },
        ticks: { font: { family: 'Manrope', size: 12 }, color: '#072635' },
      },
    },
  };

  return (
    <div className="card">
        <h2>Diagnosis History</h2>
        
        <div className="chart-card">
            <div className="chart-header">
                <span className="chart-title">Blood Pressure</span>
                <span className="chart-period" style={{cursor: 'pointer', fontSize: '14px'}}>
                    Last 6 months 
                    <img src="/assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg" alt="" style={{marginLeft:'8px'}} />
                </span>
            </div>
            
            <div className="chart-layout">
                <div className="chart-wrapper">
                    <Line data={chartData} options={chartOptions} />
                </div>
                
                <div className="chart-stats">
                    <div className="stat-group">
                        <div className="stat-label">
                            <span className="dot systolic"></span>
                            Systolic
                        </div>
                        <div className="stat-value" style={{fontSize: '22px', fontWeight: '700'}}>{latestVitals?.blood_pressure?.systolic?.value || '--'}</div>
                        <div className="stat-trend" style={{marginTop: '8px'}}>
                            <img src="/assets/ArrowUp.svg" alt="" style={{width: '10px'}} />
                            <span style={{marginLeft: '4px', fontWeight: '400'}}>{latestVitals?.blood_pressure?.systolic?.levels}</span>
                        </div>
                    </div>
                    
                    <div className="divider-line" style={{height: '1px', background: '#CBC8D4', margin: '16px 0'}}></div>
                    
                    <div className="stat-group">
                        <div className="stat-label">
                            <span className="dot diastolic"></span>
                            Diastolic
                        </div>
                        <div className="stat-value" style={{fontSize: '22px', fontWeight: '700'}}>{latestVitals?.blood_pressure?.diastolic?.value || '--'}</div>
                        <div className="stat-trend" style={{marginTop: '8px'}}>
                            <img src="/assets/ArrowDown.svg" alt="" style={{width: '10px'}} />
                            <span style={{marginLeft: '4px', fontWeight: '400'}}>{latestVitals?.blood_pressure?.diastolic?.levels}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="vitals-grid">
            <div className="vital-box respiratory">
                <div className="icon-bg">
                    <img src="/assets/respiratory_rate.svg" alt="" />
                </div>
                <div className="label">Respiratory Rate</div>
                <div className="val">{latestVitals?.respiratory_rate?.value} bpm</div>
                <div className="status">{latestVitals?.respiratory_rate?.levels}</div>
            </div>
            
            <div className="vital-box temperature">
                <div className="icon-bg">
                    <img src="/assets/temperature.svg" alt="" />
                </div>
                <div className="label">Temperature</div>
                <div className="val">{latestVitals?.temperature?.value}°F</div>
                <div className="status">{latestVitals?.temperature?.levels}</div>
            </div>
            
            <div className="vital-box heart">
                <div className="icon-bg">
                    <img src="/assets/HeartBPM.svg" alt="" />
                </div>
                <div className="label">Heart Rate</div>
                <div className="val">{latestVitals?.heart_rate?.value} bpm</div>
                <div className="status">
                    <img src="/assets/ArrowDown.svg" alt="" style={{width: '10px', marginRight: '4px'}} />
                    {latestVitals?.heart_rate?.levels}
                </div>
            </div>
        </div>
    </div>
  );
};

export default DiagnosisHistory;
