function toggleTheme() {
  document.body.classList.toggle("dark");

  const button = document.getElementById("themeButton");

  if (document.body.classList.contains("dark")) {
    button.textContent = "Toggle Light Mode";
  } else {
    button.textContent = "Toggle Dark Mode";
  }
}