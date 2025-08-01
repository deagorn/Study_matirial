// Завантаження бокової панелі на сторінки
fetch("/sidebar.html") // Використовуємо абсолютний шлях від кореня сайту
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("sidebar-container").innerHTML = data;

    // After sidebar is loaded, check if we need to hide the learning menu
    // Add a small delay to ensure DOM is fully updated
    setTimeout(hideLearningMenuIfNotPage1, 100);
  })
  .catch((error) => {
    console.error("Error loading sidebar:", error);
    // Try alternative path if absolute path fails
    fetch("../sidebar.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("sidebar-container").innerHTML = data;
        setTimeout(hideLearningMenuIfNotPage1, 100);
      })
      .catch((error2) =>
        console.error("Error loading sidebar with relative path:", error2)
      );
  });

// Function to hide learning menu if not on page1.html
function hideLearningMenuIfNotPage1() {
  // CSS handles the hiding/showing, but we can add additional logic here if needed
  var currentPage = window.location.pathname.split("/").pop();
  console.log("Current page:", currentPage);

  // The CSS rules will automatically show/hide based on body class
  // This function now just logs for debugging
}
