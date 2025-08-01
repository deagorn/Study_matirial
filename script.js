// Завантаження бокової панелі на сторінки
fetch("/sidebar.html") // Використовуємо абсолютний шлях від кореня сайту
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("sidebar-container").innerHTML = data;
  })
  .catch((error) => console.error("Error loading sidebar:", error));
