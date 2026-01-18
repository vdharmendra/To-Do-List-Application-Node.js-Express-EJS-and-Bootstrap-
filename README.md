# 📝 To-Do List Application ( Node.js, Express, EJS, and Bootstrap )

A simple To-Do List web application built using Node.js, Express, EJS, and Bootstrap.
This project demonstrates passing data between client and server, handling form submissions, and rendering dynamic content using EJS templates.

- 
👨‍💻 Author
Virendra D. Verma
<a href="https://www.linkedin.com/in/dharmendraverma95/" target="_blank">🧑‍💻 LinkedIn Profile </a> | <a href="https://www.behance.net/dhirukumar" target="_blank">🧑‍💻 Behance Profile </a>

## 🌐 Live

Visit our live link: (https://to-do-list-application-node-js-express-xjwe.onrender.com)

-



### 🚀 Features

- Add new to-do items
- Separate default and work task lists
- Dynamic date display on the home page
- Simple UI built with Bootstrap 5
- Uses EJS templating for server-side rendering
- Client-side interaction for marking tasks as completed

### 🛠️ Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Body-Parser
- HTML5 / CSS3
- Bootstrap 5
- Vanilla JavaScript

### 📂 Project Structure
project-root/
│
├── app.js                 # Main Express server file
├── data.js                # Utility module for date handling
│
├── views/
│   ├── list.ejs            # Main to-do list template
│   └── About.ejs           # About page template
│
├── public/
│   └── css/
│       └── style.css       # Custom styles
│
├── package.json
└── README.md


### 📌 Application Routes
- Route	Method	Description
- /	GET	Displays the main to-do list with current date
- /	POST	Adds a new task to the list
- /work	GET	Displays work-related tasks
- /about	GET	About page



### 🧠 How It Works
#### app.js
- Initializes the Express server
- Handles routing and form submissions
- Uses EJS as the view engine
- Manages two task arrays:
- items → default list
- workItems → work list


#### data.js
- Provides reusable date utility functions:
- getDate() – returns formatted date
- getDay() – returns day with date and month


### list.ejs
- Dynamically renders the task list
- Uses EJS loops to display items
- Includes Bootstrap styling
- Allows marking tasks as completed using JavaScript

#### style.css
- Handles task layout
- Adds line-through effect for completed tasks
- Custom input styling


### 🎯 Learning Objectives
- Understanding Express routing
- Using middleware (body-parser, static files)
- Passing data between server and client
- Rendering dynamic views with EJS
- Basic frontend-backend integration


### 🔮 Future Improvements
- Persistent storage using a database (MongoDB / MySQL)
- User authentication
- Task deletion
- Task completion stored on server
- REST API support