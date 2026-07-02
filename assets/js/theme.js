document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.querySelector(".theme-switcher");
  const toggle = document.querySelector(".theme-toggle");
  const options = document.querySelectorAll(".theme-option");

  if (!switcher || !toggle) return;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "crimson";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Toggle menu
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    switcher.classList.toggle("open");
  });

  // Select theme
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const theme = option.dataset.theme;

      document.documentElement.setAttribute("data-theme", theme);

      localStorage.setItem("theme", theme);

      switcher.classList.remove("open");
    });
  });

  // Click outside
  document.addEventListener("click", (e) => {
    if (!switcher.contains(e.target)) {
      switcher.classList.remove("open");
    }
  });

  // ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      switcher.classList.remove("open");
    }
  });
});
