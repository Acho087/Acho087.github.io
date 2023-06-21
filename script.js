console.log('hello');

toggles = document.querySelector(".toggles");
  toggle = document.querySelector(".toggle");

  toggle.addEventListener("click", () => 
    toggles.classList.toggle("dark"));

  toggle.addEventListener("click", () => toggle.classList.toggle("active"))
