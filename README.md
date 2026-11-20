# StudyCircle

A website where students can create study sessions and browse available sessions.

## Project setup

Built using Express, express-generator, and EJS.

## Part 1 features

- Home page with the website name and original team logo
- Form to create a study session
- Table or dashboard showing saved sessions
## Create Study Session Feature

Contributor: Caleb Agyei (GitHub: Cable208)

### Overview
This feature allows students to create study sessions
and store the information in MongoDB Atlas.

### Implementation
- Created the study session form using HTML and EJS.
- Added fields for course, topic, date, time,
  location, and organizer.
- Implemented the POST /create route using Express.
- Added validation for required form fields.
- Created a Mongoose StudySession model.
- Connected the application to MongoDB Atlas.
- Tested saving and retrieving session data in Atlas.

### Files Modified
- views/create.ejs
- routes/index.js
- models/StudySession.js
- app.js
- package.json

### Database Configuration
The project uses MongoDB Atlas for cloud storage.

To run locally:
1. Run `npm install`.
2. Create a `.env` file in the project root.
3. Add `MONGODB_URI` with your authorized
   MongoDB Atlas connection string.
4. Run `npm start`.
5. Visit http://localhost:3000/create

