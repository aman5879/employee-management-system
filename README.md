# 🏢 Employee Management System

A frontend-only Employee Management System built using React.js with role-based dashboards, task assignment, and persistent local storage.

---

## 📸 Overview
 
The **Employee Management System (EMS)** is a React-based single-page application that enables organizations to manage employees and tasks efficiently — all without a backend. It uses the **Context API** for centralized state management and **LocalStorage** for data persistence across sessions.
 
---

## ✨ Features

- Admin & Employee login system
- Role-based dashboards
- Task creation and assignment
- Task status updates
- Centralized state management using Context API
- Persistent data using LocalStorage

---

## 🛠️ Tech Stack

- React.js
- Context API
- LocalStorage
- Tailwind CSS
- CSS

---

## 📁 Project Structure

```bash
employee-management-system/
├── public/
├── src/
│   ├── assets/
│   ├── components/  
│   │   ├── Auth/ 
│   │   │   ├──Login.jsx
│   │   ├── Dashboard/ 
│   │   │   ├──AdminDashboard.jsx
│   │   │   ├──EmployeeDashboard.jsx
│   │   ├── Others/ 
│   │   │   ├──AllTask.jsx
│   │   │   ├──CreateTask.jsx
│   │   │   ├──Header.jsx
│   │   │   ├──TaskListNumbers.jsx
│   │   ├── TaskList/ 
│   │   │   ├──AcceptTask.jsx
│   │   │   ├──CompleteTask.jsx
│   │   │   ├──FailedTask.jsx
│   │   │   ├──NewTask.jsx
│   │   │   ├──TaskList.jsx
│   ├── context/
│   │   ├── AuthProvider.jsx 
│   ├── utils/
│   │   ├──  LocalStorage.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## 🚀 Installation & Setup

Follow these steps to run the project locally on your machine.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/aman5879/employee-management-system.git
```

### 2️⃣ Navigate to the Project Directory

```bash
cd employee-management-system
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start Development Server

```bash
npm run dev
```

---

## 🌐 Open in Browser

After running the development server, open:

```bash
http://localhost:5173
```

> *(Default Vite development server URL)*

---
 
## 📌 Key Design Decisions
 
- **No backend required** — ideal for demos, prototypes, and learning projects
- **Context API over Redux** — simpler and sufficient for this scale
- **LocalStorage as DB** — data survives page refreshes without a server
- **Role-based routing** — admins and employees see completely different UIs

---
 
## 🤝 Contributing
 
Contributions are welcome! Please follow these steps:
 
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request
---
 
## 📄 License
 
This project is open source and available under the [MIT License](LICENSE).
 
---
 
<p align="center">Built with ❤️ using React</p>