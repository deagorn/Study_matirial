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
  var currentPage = window.location.pathname.split("/").pop();
  var learningMenu = document.getElementById("learning-menu");

  console.log("Current page:", currentPage);
  console.log("Learning menu element:", learningMenu);

  if (learningMenu) {
    if (currentPage !== "page1.html") {
      console.log("Hiding learning menu - not on page1.html");
      learningMenu.classList.add("hidden");
    } else {
      console.log("Showing learning menu - on page1.html");
      learningMenu.classList.remove("hidden");
    }
  } else {
    console.log("Learning menu element not found!");
  }
}
