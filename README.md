# 🎯 Task Manager - MERN Stack

<div align="center">

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Available-success?style=for-the-badge)](http://localhost:5173)
[![Build Status](https://img.shields.io/badge/Build-Passing-success?style=for-the-badge)](http://localhost:5000)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

## 📊 **Project Progress Dashboard**

![Overall Progress](https://img.shields.io/badge/Overall_Progress-41%25-yellow?style=for-the-badge&logo=progress)
![Current Phase](https://img.shields.io/badge/Current_Phase-Core_Development-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge&logo=mongodb)

### 🚀 **Development Metrics**

<table align="center">
<tr>
<td align="center"><strong>📈 Progress</strong></td>
<td align="center"><strong>🔥 Streak</strong></td>
<td align="center"><strong>📝 Features</strong></td>
<td align="center"><strong>🧪 Tests</strong></td>
</tr>
<tr>
<td align="center">41%</td>
<td align="center">5 days</td>
<td align="center">31/76</td>
<td align="center">0/15</td>
</tr>
</table>

### 📋 **Phase Breakdown**

| Phase | Status | Progress | Features |
|-------|--------|----------|----------|
| **🏗️ Backend Foundation** | ✅ Complete | ![](https://geps.dev/progress/90) | `90%` (11/12) |
| **⚡ Core Backend Development** | 🔄 Active | ![](https://geps.dev/progress/80) | `80%` (12/15) |
| **🎨 Frontend Integration** | 🔄 Active | ![](https://geps.dev/progress/70) | `70%` (8/12) |
| **🔐 Advanced Features** | ⏳ Pending | ![](https://geps.dev/progress/0) | `0%` (0/15) |
| **⚡ Real-time & Optimization** | ⏳ Planned | ![](https://geps.dev/progress/0) | `0%` (0/12) |
| **🚀 Testing & Deployment** | ⏳ Planned | ![](https://geps.dev/progress/0) | `0%` (0/10) |

<details>
<summary><strong>📊 Detailed Progress Breakdown</strong></summary>

**✅ Completed Features (12/24)**
- [x] Express.js server setup with middleware
- [x] MongoDB connection with Mongoose
- [x] Task model with schema validation
- [x] Full CRUD API endpoints (GET, POST, PUT, DELETE)
- [x] Error handling and status codes
- [x] CORS configuration
- [x] React frontend with hooks
- [x] API integration with fetch
- [x] Real-time UI updates
- [x] Inline task editing
- [x] Component-based architecture
- [x] Environment configuration

**🔄 In Progress (3/24)**
- [ ] Input validation & error messages
- [ ] Loading states & spinners
- [ ] Responsive design

**⏳ Planned Features (9/24)**
- [ ] User authentication system
- [ ] Task categories & priorities
- [ ] Due dates & reminders
- [ ] File attachments
- [ ] Real-time collaboration
- [ ] Advanced search & filtering
- [ ] Analytics dashboard
- [ ] Testing suite
- [ ] Production deployment

</details>

---

</div>

## 🛠️ **Tech Stack & Architecture**

<div align="center">

**Frontend** | **Backend** | **Database** | **Tools**
:---: | :---: | :---: | :---:
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) | ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) | ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white) | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

</div>

### 🏗️ **Architecture Overview**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Client  │◄──►│  Express API    │◄──►│   MongoDB       │
│   (Port 5173)   │    │   (Port 5000)   │    │   (Port 27017)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## ⚡ **Quick Start**

### 📋 **Prerequisites**
- **Node.js** (v14+) - [Download](https://nodejs.org/)
- **MongoDB** (Community) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/downloads)

### 🚀 **Installation**

```bash
# 📥 Clone the repository
git clone <your-repo-url>
cd task-manager

# 🖥️ Backend Setup
cd backend
npm install
npm start
# ✅ Server running on http://localhost:5000

# 🎨 Frontend Setup (new terminal)
cd frontend
npm install
npm run dev
# ✅ App running on http://localhost:5173
```

### 🎯 **Usage**
1. **Create Tasks** - Add new tasks using the input field
2. **Edit Tasks** - Click "Edit" for inline editing
3. **Delete Tasks** - Remove completed tasks
4. **Real-time Updates** - Changes reflect immediately

## 📡 **API Reference**

<details>
<summary><strong>🔗 All Endpoints</strong></summary>

| Method | Endpoint | Description | Status | Response |
|--------|----------|-------------|--------|----------|
| `GET` | `/` | Health check | ✅ | `"Hello World"` |
| `GET` | `/tasks` | Get all tasks | ✅ | `[{_id, name}]` |
| `POST` | `/tasks` | Create new task | ✅ | `{_id, name}` |
| `PUT` | `/tasks/:id` | Update task | ✅ | `{_id, name}` |
| `DELETE` | `/tasks/:id` | Delete task | ✅ | `{message}` |

**Example Request:**
```javascript
// Create a new task
fetch('http://localhost:5000/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: "Learn React" })
})
```

</details>

## 📁 **Project Structure**

```
task-manager/
├── 🖥️ backend/
│   ├── models/
│   │   └── Task.js         # Mongoose schema
│   ├── index.js            # Express server
│   └── package.json        # Dependencies
├── 🎨 frontend/
│   ├── src/
│   │   ├── App.jsx         # Main component
│   │   ├── App.css         # Styles
│   │   └── main.jsx        # Entry point
│   ├── index.html          # HTML template
│   └── package.json        # Dependencies
├── 📊 update-progress.js   # Auto-progress tracker
├── 📋 ROADMAP.md          # Development plan
└── 📄 README.md           # This file
```

## 🤖 **Auto-Progress Tracking**

This project features **automated progress tracking** that updates this README!

### 🔄 **Manual Update**
```bash
node update-progress.js
```

### ⚙️ **Customize Progress**
Edit `update-progress.js` and update completion numbers:
```javascript
'Phase 2: Core Backend Development': {
  total: 15,
  completed: 12, // ← Update this number
}
```

### 🎯 **Features**
- ✅ **Auto-badge updates** with color coding
- ✅ **Progress bars** for each development phase  
- ✅ **Completion percentages** with real-time calculations
- ✅ **Last updated timestamps**
- ✅ **Phase status tracking**

## 🚀 **Next Milestones**

<table>
<tr>
<th>🎯 Current Focus</th>
<th>📅 This Week</th>
<th>🔮 Next Sprint</th>
</tr>
<tr>
<td>
• Input validation<br>
• Error handling<br>
• UI improvements
</td>
<td>
• User authentication<br>
• Task categories<br>
• Responsive design
</td>
<td>
• Real-time features<br>
• File attachments<br>
• Testing suite
</td>
</tr>
</table>

---

<div align="center">

**Last Updated:** `June 2025` | **Version:** `1.0.0` | **Status:** `Active Development`

[![GitHub stars](https://img.shields.io/github/stars/yourusername/task-manager?style=social)](https://github.com/yourusername/task-manager)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/task-manager?style=social)](https://github.com/yourusername/task-manager)

**Made with ❤️ for productivity enthusiasts**

</div> 
