import db from '../config/connection.js';
import { Question } from '../models/index.js';
import cleanDB from './cleanDb.js';

// Import JSON data
import questionData from './pythonQuestions.json';

(async () => {
  try {
    await db();
    await cleanDB();

    // Bulk insert questions
    await Question.insertMany(questionData);

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
})();
