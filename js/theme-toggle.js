const toggle = document.getElementById("theme-toggle");

// Default: dark mode, toggle unchecked
toggle.checked = false;

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
});
