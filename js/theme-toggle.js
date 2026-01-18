const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Check saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  root.setAttribute("data-theme", "light");
  toggle.checked = true;
} else {
  root.removeAttribute("data-theme"); // dark mode default
  toggle.checked = false;
}

// Listen for toggle changes
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
  }
});
