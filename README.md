TradeMate – Full-Stack Trading & Portfolio Management Platform

TradeMate is a full-stack MERN project inspired by trading platforms like Zerodha.
It includes:

🌐 A public Landing Page (React)

📊 A private Dashboard for logged-in users (React)

🛠️ A complete Backend API with authentication (Node.js + Express + MongoDB)

📈 Live Stock Prices using AlphaVantage API

🚀 Features
🔹 Landing Page

Hero section, pricing, products, support, footer

Signup & Login pages

Live stock prices (BSE) using AlphaVantage API

Responsive UI (similar to Zerodha)

🔹 Dashboard

User-specific dashboard

Holdings, Positions, Orders

Watchlist & charts

Modern UI components

🔹 Backend API

User Authentication (Signup + Login)

JWT Token Authorization

Models:

Users

Holdings

Positions

Orders

REST API + MongoDB integration

🔹 Live Stock Prices

Uses AlphaVantage GLOBAL_QUOTE API

Fetches live market price for symbols:

RELIANCE.BSE

TCS.BSE

INFY.BSE

📁 Project Structure
TradeMate/
│── backend/          # Node.js + Express + MongoDB API
│── dashboard/        # User dashboard (React)
│── frontend/         # Landing page (React)
│── .gitignore
│── README.md

🛠️ Tech Stack
Frontend

React.js

React Router

Axios

Bootstrap / CSS

Dashboard

React

Context API

Chart.js / Custom Components

Backend

Node.js

Express.js

MongoDB & Mongoose

JWT Authentication

Bcrypt (password hashing)

APIs

AlphaVantage (Live Stock Prices)

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/TradeMate.git
cd TradeMate

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

MONGO_URL=your_mongo_connection
JWT_SECRET=your_secret_key
ALPHAVANTAGE_KEY=your_api_key
PORT=3002


Start backend:

npm start

3️⃣ Frontend Setup (Landing Page)
cd frontend
npm install
npm start


Runs on:

http://localhost:3000

4️⃣ Dashboard Setup
cd dashboard
npm install
npm start


Runs on:

http://localhost:3001

🔐 Authentication Flow

User signs up → user saved in DB

User logs in → backend returns a JWT token

Token stored in localStorage

Login redirects user to Dashboard app

Protected routes check token validity

📈 Live Stock Price Flow

Frontend asks backend → /stock/:symbol

Backend calls AlphaVantage API

Backend returns live price

UI auto-updates
