"# Task Manager

A full-stack MERN (MongoDB, Express.js, React, Node.js) task management application that allows users to create, read, update, and delete tasks.

## Features

- ✅ Add new tasks
- ✅ View all tasks
- ✅ Edit existing tasks (inline editing)
- ✅ Delete tasks
- ✅ Real-time updates
- ✅ Responsive design

## Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and development server
- **CSS** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn

## Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd task-manager
```

### 2. Backend Setup
```bash
cd backend
npm install
npm start
```
The backend server will start on `http://localhost:5000`

### 3. Frontend Setup
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
The frontend will start on `http://localhost:5173`

### 4. Database Setup
Make sure MongoDB is running locally on the default port (27017). The application will automatically create a database named `taskmanager`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task by ID |
| DELETE | `/tasks/:id` | Delete a task by ID |

## Project Structure

```
task-manager/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
├── README.md
└── ROADMAP.md
```

## Usage

1. Start both the backend and frontend servers
2. Open your browser and navigate to `http://localhost:5173`
3. Add tasks using the input field and "Add Task" button
4. Click "Edit" to modify existing tasks
5. Click "Delete" to remove tasks

## Development

### Backend Development
```bash
cd backend
npm run dev  # If you have nodemon installed
```

### Frontend Development
```bash
cd frontend
npm run dev
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE)." 
