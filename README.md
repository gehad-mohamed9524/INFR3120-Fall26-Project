# StudyCircle

A website where students can create study sessions and browse available sessions.

## Project setup

Built using Express, express-generator, and EJS.

## Part 1 features

- Home page with the website name and original team logo
- Form to create a study session
- Table or dashboard showing saved sessions
cable208@Mac INFR3120-Fall26-Project % git status
git check-ignore .env
On branch feature/create-session
Your branch is up to date with 'origin/feature/create-session'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   app.js
        modified:   package-lock.json
        modified:   package.json
        modified:   routes/index.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        models/

no changes added to commit (use "git add" and/or "git commit -a")
.env
cable208@Mac INFR3120-Fall26-Project % git add app.js package.json package-lock.json routes/index.js models/StudySession.js
cable208@Mac INFR3120-Fall26-Project % git status
On branch feature/create-session
Your branch is up to date with 'origin/feature/create-session'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   app.js
        new file:   models/StudySession.js
        modified:   package-lock.json
        modified:   package.json
        modified:   routes/index.js

cable208@Mac INFR3120-Fall26-Project % git config user.name "Cable208"   
git config user.email "agyeicaleb2@gmail.com"
cable208@Mac INFR3120-Fall26-Project %  
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

