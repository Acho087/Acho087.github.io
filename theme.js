const toggle = document.querySelector(".toggle");
const themeLink = document.getElementById('theme');
const storedTheme = localStorage.getItem('theme');

toggle.classList.toggle("dark", storedTheme === 'dark');
themeLink.href = storedTheme === 'dark' ? 'dark.css' : 'defaultdev.css';

toggle.addEventListener("click", () => {
  toggle.classList.toggle("dark");
  themeLink.href = toggle.classList.contains("dark") ? "dark.css" : "defaultdev.css";
  localStorage.setItem('theme', toggle.classList.contains("dark") ? 'dark' : 'defaultdev');
});
