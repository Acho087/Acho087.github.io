console.log('hello');

// toggles = document.querySelector(".toggles");
//   toggle = document.querySelector(".toggle");
//   toggle.addEventListener("click", () => 
//     toggles.classList.toggle("dark"));
//     document.getElementsById('theme').href = 'dark.css';

//   toggle.addEventListener("click", () => toggle.classList.toggle("active"));

// function setTheme(mode){
//   if(mode = 'dark'){
//     document.getElementsByClassName('dark').href = 'dark.css'
//   }
// }
const toggle = document.querySelector(".toggle");
const themeLink = document.getElementById('theme');

toggle.addEventListener("click", () => {
  toggle.classList.toggle("dark");
  
  if (toggle.classList.contains("dark")) {
    themeLink.href = "dark.css";
    
  } else {
    themeLink.href = "default.css";
  }
});

