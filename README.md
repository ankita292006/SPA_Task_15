# 🚀 Advanced Mini Single Page Application (SPA)

## 📌 Project Overview

This project is a fully functional **Single Page Application (SPA)** built using **Vanilla JavaScript**, HTML, and CSS.

It demonstrates client-side routing using the **History API**, dynamic content rendering, authentication simulation, API integration, charts visualization, and modern UI features — all without any frameworks.

---

## 🛠 Technologies Used

- HTML5
- CSS3 (Modern UI + Responsive Design)
- JavaScript (Vanilla JS)
- History API (pushState, popstate)
- Chart.js (for charts)
- LocalStorage (for auth + theme persistence)
- JSONPlaceholder API (for fetch example)

---

## ✨ Features Implemented

### 🔹 Core SPA Features
- Dynamic page rendering without reload
- Custom router using History API
- Back & forward browser support
- 404 Not Found page
- Active navigation highlighting

---

### 🔹 UI & UX Enhancements
- Animated gradient background
- Glassmorphism card design
- Dark / Light theme toggle
- Theme preference saved in localStorage
- Smooth page transitions
- Progress bar loader
- Responsive mobile navigation menu

---

### 🔹 Advanced Features

#### 🔐 Authentication System
- Login simulation using localStorage
- Protected Dashboard route
- Logout functionality

#### 🔎 Search Filter
- Real-time filtering of list items

#### 🌐 API Integration
- Fetch data from external API
- Display fetched content dynamically

#### 📊 Charts Dashboard
- Bar Chart
- Line Chart
- Pie Chart
- Dynamic random data updates
- Built using Chart.js

---

## 📂 Project Structure
mini-spa/

│── index.html

│── style.css

│── app.js

│── README.md


---

## 🚀 How to Run the Project

1. Open project folder in **VS Code**
2. Install **Live Server Extension**
3. Right-click `index.html`
4. Click **Open with Live Server**
5. LIVE LINK: 

⚠ Important:  
Do NOT open using `file://` path — routing will not work properly.

---

## 🧠 Routing Implementation

The app uses:
history.pushState()
window.addEventListener("popstate")

Routes are defined inside a routes object:

const routes = {
"/": Home,
"/about": About,
"/contact": Contact,
"/dashboard": ProtectedRoute,
"/charts": Charts
};


---

## 📈 Charts Implementation

Charts are implemented using Chart.js CDN.

Three chart types:
- Bar Chart
- Line Chart
- Pie Chart

Charts dynamically update using random data generation.

---

## 💾 LocalStorage Usage

Used for:
- Authentication state
- Theme preference
- Visit counter

---

## 🎯 Learning Outcomes

Through this project, the following concepts were implemented:

- Client-side routing
- State handling
- Dynamic DOM rendering
- API fetching
- Chart integration
- LocalStorage management
- Responsive UI design
- Modular JavaScript structure

---

## 📌 Conclusion

This project demonstrates how a modern SPA can be built using only Vanilla JavaScript without any frontend frameworks.

It showcases routing, authentication, API integration, and data visualization in a clean and scalable structure.

---

### 👩‍💻 Developed As Part of:
Task 15 – Build a Mini Single Page Application (SPA) Using Vanilla JavaScript

AUTHOR :
ANKITA G NEGALUR 
# SPA_Task_15
task 15
