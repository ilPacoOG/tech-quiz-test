
# Tech-Quiz-Test

Tech-Quiz-Test is a MERN stack-based application designed to provide a technical quiz experience. The application allows users to take a quiz of random technical questions, track their score, and restart quizzes. This project emphasizes the integration of Cypress testing to ensure the application is reliable and functional.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
  - [Component Tests](#component-tests)
  - [End-to-End Tests](#end-to-end-tests)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

---

## Features

- **Randomized Tech Quiz**: Questions are dynamically fetched.
- **Score Tracking**: Tracks the user’s progress and final score.
- **Quiz Restart**: Allows users to retake the quiz.
- **Comprehensive Testing**: Includes Cypress tests for components and end-to-end flows.

---

## Technologies

- **Frontend**: React, Vite
- **Backend**: Node.js, Express.js, MongoDB
- **Testing**: Cypress

---

## Installation

Follow these steps to set up and run the Tech-Quiz-Test project locally:

### 1. Clone the Repository
Start by cloning the repository to your local machine:
```bash
git clone https://github.com/your-username/tech-quiz-test.git
```
Navigate to the project folder:
```bash
cd tech-quiz-test
```

### 2. Install Dependencies
Install all necessary dependencies for the root, client, and server:
```bash
npm install
npm run install
```
This will install dependencies in the `client` and `server` directories automatically.

### 3. Seed the Database
Populate the database with quiz questions. Run the following command:
```bash
npm run seed
```
This will:
- Connect to the database.
- Clear any existing data.
- Insert new question data from `pythonQuestions.json`.

### 4. Start the Development Server
Run the application in development mode:
```bash
npm run start:dev
```
This will:
- Start the **server** on [http://localhost:3001](http://localhost:3001).
- Launch the **client** at the same URL.

### 5. Open the Application
After starting the development server, open your browser and go to:
```plaintext
http://127.0.0.1:3001
```
## Usage

- Open your browser and navigate to [http://127.0.0.1:3001](http://127.0.0.1:3001).
- Click "Start Quiz" to begin.
- Answer the displayed questions and track your score at the end.
- Click "Take New Quiz" to restart the quiz.

---

## Testing

Cypress is used for both **component testing** and **end-to-end testing**.

### Component Tests

1. Open Cypress in component testing mode:
   ```bash
   npx cypress open --component
   ```

2. Select and run the `Quiz.cy.tsx` file.

### End-to-End Tests

1. Open Cypress in end-to-end testing mode:
   ```bash
   npx cypress open
   ```

2. Select and run the `quiz.cy.js` file.

---

## Walkthrough Video

https://github.com/user-attachments/assets/5b077891-ac74-49b9-ae99-7e5baa05c898

## License

![License](https://img.shields.io/badge/license-Apache2.0-brightgreen)

This project is licensed under Apache2.0. For license details, visit (https://www.apache.org/licenses/LICENSE-2.0).
