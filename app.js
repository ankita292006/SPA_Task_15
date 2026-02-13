const app = document.getElementById("app");
const progressBar = document.getElementById("progressBar");
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

/* =======================
   AUTH SYSTEM
======================= */

function isLoggedIn() {
  return localStorage.getItem("user") === "logged";
}

function login() {
  localStorage.setItem("user", "logged");
  router("/dashboard");
}

function logout() {
  localStorage.removeItem("user");
  router("/");
}

/* =======================
   VIEWS
======================= */

const Home = () => `
  <div class="card">
    <h1>🏠 Home</h1>
    <input type="text" id="searchInput" placeholder="Search items..." />
    <ul id="itemList">
      <li>Apple</li>
      <li>Banana</li>
      <li>Mango</li>
      <li>Orange</li>
      <li>Grapes</li>
    </ul>
  </div>
`;

const About = () => `
  <div class="card">
    <h1>📘 About</h1>
    <p>Pro Level SPA with authentication & API fetching.</p>
  </div>
`;

const Contact = () => `
  <div class="card">
    <h1>📞 Contact</h1>
    <p>Email: ankita@example.com</p>
  </div>
`;

const Dashboard = () => `
  <div class="card">
    <h1>📊 Dashboard</h1>
    <p>Welcome User 👋</p>
    <button onclick="logout()">Logout</button>
  </div>
`;

const Login = () => `
  <div class="card">
    <h1>🔐 Login Required</h1>
    <button onclick="login()">Login</button>
  </div>
`;

const APIPage = () => `
  <div class="card">
    <h1>🌐 API Data</h1>
    <div id="apiData">Loading...</div>
  </div>
`;

const Settings = () => `
  <div class="card">
    <h1>⚙ Settings</h1>
    <p>Theme preference saved automatically.</p>
  </div>
`;

const NotFound = () => `
  <div class="card">
    <h1>404 🚫</h1>
  </div>
`;
const Charts = () => `
  <div class="card chart-container">
    <h1>📊 Analytics Dashboard</h1>
    <button onclick="updateCharts()">🔄 Update Data</button>
    <canvas id="barChart"></canvas>
    <canvas id="lineChart"></canvas>
    <canvas id="pieChart"></canvas>
  </div>
`;


/* =======================
   ROUTES
======================= */

const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
  "/dashboard": () => isLoggedIn() ? Dashboard() : Login(),
  "/api": APIPage,
  "/settings": Settings,
  "/charts": Charts,

};


/* =======================
   ROUTER
======================= */

function router(path) {

  progressBar.style.width = "30%";

  setTimeout(() => {
    progressBar.style.width = "70%";

    const view = routes[path] || NotFound;
    app.innerHTML = view();

    if (path === "/api") fetchAPI();
    if (path === "/") setupSearch();
    if (path === "/charts") loadCharts();



    progressBar.style.width = "100%";
    setTimeout(() => progressBar.style.width = "0%", 300);
  }, 400);

  setActiveLink(path);
}

/* =======================
   SEARCH FEATURE
======================= */

function setupSearch() {
  const input = document.getElementById("searchInput");
  const items = document.querySelectorAll("#itemList li");

  input.addEventListener("keyup", () => {
    const value = input.value.toLowerCase();
    items.forEach(item => {
      item.style.display =
        item.textContent.toLowerCase().includes(value)
          ? "block"
          : "none";
    });
  });
}

/* =======================
   FETCH API
======================= */

async function fetchAPI() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  document.getElementById("apiData").innerHTML =
    `<h3>${data.title}</h3><p>${data.body}</p>`;
}

/* =======================
   NAVIGATION
======================= */

function navigateTo(url) {
  history.pushState(null, null, url);
  router(url);
}

function setActiveLink(path) {
  document.querySelectorAll("[data-link]").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
}

/* =======================
   EVENTS
======================= */

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigateTo(e.target.getAttribute("href"));
  }
});

window.addEventListener("popstate", () => {
  router(window.location.pathname);
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark"));
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/* Load saved theme */
if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark");
}

router(window.location.pathname);
let barChart, lineChart, pieChart;

function generateRandomData() {
  return Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 100)
  );
}

function loadCharts() {

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  barChart = new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Sales",
        data: generateRandomData(),
        backgroundColor: "#3b82f6"
      }]
    }
  });

  lineChart = new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Revenue",
        data: generateRandomData(),
        borderColor: "#22d3ee",
        fill: false
      }]
    }
  });

  pieChart = new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
      labels: ["A", "B", "C", "D"],
      datasets: [{
        data: generateRandomData().slice(0,4),
        backgroundColor: ["#f87171", "#34d399", "#60a5fa", "#fbbf24"]
      }]
    }
  });
}

function updateCharts() {
  barChart.data.datasets[0].data = generateRandomData();
  lineChart.data.datasets[0].data = generateRandomData();
  pieChart.data.datasets[0].data = generateRandomData().slice(0,4);

  barChart.update();
  lineChart.update();
  pieChart.update();
}
