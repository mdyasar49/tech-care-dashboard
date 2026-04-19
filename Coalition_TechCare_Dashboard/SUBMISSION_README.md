# Tech.Care Patient Dashboard - Skills Test Submission

This dashboard was developed as a comprehensive solution for the Front End Developer Skills Test at Coalition Technologies. It demonstrates high-fidelity UI implementation, API integration, and interactive data visualization.

## Key Features
- **Dynamic Data Integration**: Real-time fetching and rendering of patient records from the Coalition Technologies API.
- **Data Visualization**: Advanced Blood Pressure trend analysis using **Chart.js**, featuring smooth line interpolation and custom point styling for 6-month historical data.
- **Pixel-Perfect Design**: Meticulous implementation of the Adobe XD template, including specific paddings, font weights (Manrope), and color hex codes.
- **Custom Design System**: A robust CSS architecture featuring premium aesthetics, glassmorphism, transitions, and unified column baselines.
- **Optimized Performance**: Built as a lightweight React SPA using the Vite build tool for rapid loading and smooth interactions.

## Technical Implementation
- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Custom properties & Flexbox/Grid)
- **Visualization**: Chart.js (react-chartjs-2)
- **Asset Management**: Bundled local SVGs for zero-latency icon rendering
- **API Communication**: Axios with Basic Authentication

## How to Run
### Local Development
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Access the application at `http://localhost:5173`.

### Production Build
1. Generate the optimized build:
   ```bash
   npm run build
   ```
2. The production files will be output to the `dist/` directory.

## Project Structure
- `src/components/`: Modular, reusable React components.
- `src/services/`: API layer and data processing logic.
- `src/styles/`: Global design tokens and component-specific styling.
- `public/assets/`: Local high-resolution design assets.

---
Developed as part of the Coalition Technologies candidacy.
