# Stock Market Dashboard

## Project Overview
Stock Market Dashboard is a responsive web application that allows users to view historical stock price data for multiple companies. The left panel contains a scrollable list of companies, and the main panel displays interactive stock price charts. The charts visually represent price movements — green lines indicate upward trends, and red lines indicate downward trends.

## Features Implemented
- **Responsive UI**: Adjusts seamlessly for mobile, tablet, and desktop screens.
- **Company List**: Scrollable list displaying 10+ companies.
- **Dynamic Stock Data**: Fetches stock prices, highs, lows, and metrics from the backend (Node.js + MongoDB).
- **Chart Visualization**: Stock prices plotted using Chart.js with color-coded trend lines.
- **52-Week Metrics**: Shows each company's 52-week high, low, and average volume.
- **Multiple Stock Management**: Backend supports adding/updating multiple stocks in a single request.

## Tech Stack
- **Frontend**: ReactJS, Tailwind CSS, Chart.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: Axios for API calls, CORS for cross-origin requests

## Development Approach
1. **Requirement Analysis**  
   - Analyzed assignment requirements and prioritized features: responsive UI, company list, stock chart, 52-week metrics (optional features like AI prediction or technical indicators were excluded).

2. **Backend Development**  
   - Built REST API endpoints using Node.js and Express.js.  
   - Created Stock and Company models in MongoDB.  
   - Implemented a route to add or update multiple stocks in a single request.

3. **Frontend Development**  
   - Developed a responsive UI using ReactJS and Tailwind CSS.  
   - Created a custom hook `useStockData` to fetch companies and selected stock data from the API.  
   - Implemented a scrollable left panel for company selection and an interactive chart in the main panel.

4. **Chart Visualization**  
   - Used Chart.js to display stock prices with dynamically color-coded line segments (upward trend = green, downward trend = red).  
   - Ensured charts are responsive across mobile, tablet, and desktop.

5. **Metrics & Features**  
   - Displayed 52-week high, low, and average volume for each company.  
   - Tested backend and frontend integration thoroughly.

6. **Testing & Refinement**  
   - Verified chart behavior with multiple companies’ data.  
   - Ensured smooth responsiveness and intuitive user interactions.

## Challenges
- Dynamically coloring chart line segments based on trend.
- Handling multiple stocks in a single backend request.
- Ensuring responsive design and chart sizing across different devices.

## How to Run
1. Clone the repository:  
   Setup Backend: 
                 cd Backend
                 npm install
                 npm run dev
   Setup Frontend:
                cd Frontend
                npm install
                npm run dev


   git clone <repository-link>
