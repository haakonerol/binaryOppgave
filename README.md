# binaryOppgave
A full-stack JavaScript application that converts binary input into readable text and stores the decoded string in a MongoDB database.

**Frontend:** React (Vite)  
**Backend:** Node.js + Express + MongoDB (Mongoose)

## Setup Guide

### Clone the Repository

git clone https://github.com/haakonerol/binaryOppgave.git
cd binaryOppgave

### Install & Run the Client
cd client
npm install
npm run dev

Install & Run the Server
cd server
npm install
npm start

#### Project Structure
binaryOppgave/
│
├── .gitignore
├── README.md
│
├── client/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       └── components/
│           ├── Main.jsx
│           └── DecodedMessage.jsx
│
└── server/
    ├── package.json
    ├── .env
    └── src/
        ├── index.js
        ├── configs/
        │   └── dbConnection.js
        ├── controllers/
        │   └── meldingController.js
        ├── middlewares/
        │   └── errorHandler.js
        ├── models/
        │   └── meldingModel.js
        └── routes/
            └── meldingRouter.js
