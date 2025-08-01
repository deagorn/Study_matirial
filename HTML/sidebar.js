// sidebar.js

function toggleMenu() {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const toggleButton = document.querySelector(".toggle-menu");

  // Перевіряємо, чи меню відкрите або закрите
  if (
    dropdownMenu.style.display === "none" ||
    dropdownMenu.style.display === ""
  ) {
    dropdownMenu.style.display = "block"; // Розгортаємо меню
    toggleButton.textContent = "- Навчання"; // Міняємо знак на "-"
  } else {
    dropdownMenu.style.display = "none"; // Згортаємо меню
    toggleButton.textContent = "+ Навчання"; // Міняємо знак на "+"
  }
}
