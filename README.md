🚀 TradeMate – Full-Stack Trading & Portfolio Management Platform

TradeMate is a full-stack MERN application inspired by platforms like Zerodha, built to provide real-time stock tracking, user portfolio management, and a modern trading dashboard experience.

📌 Overview

TradeMate includes:

🌐 Public Landing Page (React)

📊 Private User Dashboard (React)

🛠️ Backend API with JWT Authentication (Node.js, Express, MongoDB)

📈 Live Stock Prices using the AlphaVantage API

✨ Features
🔹 Landing Page

Modern UI with:

Hero section

Pricing

Products

Customer support

Footer

Authentication pages (Signup & Login)

Live stock prices (BSE) using AlphaVantage API

Responsive design inspired by Zerodha

🔹 Dashboard

User-specific dashboard (JWT protected)

Manage:

Holdings

Positions

Orders

Watchlist with live updates

Interactive charts (Chart.js / custom components)

Clean and modern UI

🔹 Backend API

Node.js + Express architecture

User Authentication:

Signup

Login

JWT Authorization

MongoDB Models:

Users

Holdings

Positions

Orders

REST API for CRUD operations

AlphaVantage integration for live stock prices

🔹 Live Stock Prices

Live data fetched using:

AlphaVantage GLOBAL_QUOTE API

Symbols supported:

RELIANCE.BSE

TCS.BSE

INFY.BSE

📁 Project Structure
TradeMate/
│── backend/          # Node.js + Express + MongoDB (API)
│── dashboard/        # User Dashboard (React)
│── frontend/         # Public Landing Page (React)
│── .gitignore
│── README.md

🛠️ Tech Stack
🎨 Frontend

React.js

React Router

Axios

Bootstrap / CSS

📊 Dashboard

React (SPA)

Context API

Chart.js

Custom components

⚙️ Backend

Node.js

Express.js

MongoDB & Mongoose

JWT Authentication

Bcrypt password hashing

🔗 APIs

AlphaVantage (Stock Market Prices)

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/TradeMate.git
cd TradeMate

2️⃣ Backend Setup
cd backend
npm install


Create .env:

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


Runs at:
http://localhost:3000

4️⃣ Dashboard Setup
cd dashboard
npm install
npm start


Runs at:
http://localhost:3001

🔐 Authentication Flow

User signs up → data stored in MongoDB

User logs in → backend returns JWT token

Token saved in localStorage

Dashboard loads only if token is valid

Protected routes verify token on each request

📈 Live Stock Price Flow

Frontend calls backend:
GET /stock/:symbol

Backend hits AlphaVantage GLOBAL_QUOTE

Live market price returned to UI

Dashboard & Landing Page auto-refresh prices
