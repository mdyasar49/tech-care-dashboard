import axios from 'axios';

const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';
const AUTH_STRING = 'coalition:skills-test';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Basic ${btoa(AUTH_STRING)}`,
  },
});

export const getPatients = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching patient data:', error);
    throw error;
  }
};

/**
 * Filter for Jessica Taylor specifically as per requirements
 */
export const getJessicaTaylor = (patients) => {
  return patients.find(p => p.name === 'Jessica Taylor') || patients[0];
};
