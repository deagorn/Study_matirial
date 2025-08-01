// Завантаження бокової панелі на сторінки
fetch("/sidebar.html") // Використовуємо абсолютний шлях від кореня сайту
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("sidebar-container").innerHTML = data;

    // After sidebar is loaded, check if we need to hide the learning menu
    // Add a small delay to ensure DOM is fully updated
    setTimeout(() => {
      hideLearningMenuIfNotPage1();
      highlightActivePage(); // Додаємо підсвічування активної сторінки
    }, 100);
  })
  .catch((error) => {
    console.error("Error loading sidebar:", error);
    // Try alternative path if absolute path fails
    fetch("../sidebar.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("sidebar-container").innerHTML = data;
        setTimeout(() => {
          hideLearningMenuIfNotPage1();
          highlightActivePage(); // Додаємо підсвічування активної сторінки
        }, 100);
      })
      .catch((error2) =>
        console.error("Error loading sidebar with relative path:", error2)
      );
  });

// Function to hide learning menu if not on page1.html
function hideLearningMenuIfNotPage1() {
  // CSS handles the hiding/showing, but we can add additional logic here if needed
  var currentPage = window.location.pathname.split("/").pop();

  // The CSS rules will automatically show/hide based on body class
  // This function now just logs for debugging
}

// Function to highlight active page in sidebar
function highlightActivePage() {
  var currentPage = window.location.pathname.split("/").pop();
  var currentPath = window.location.pathname;

  // Remove active class from all links
  var allLinks = document.querySelectorAll(".sidebar a");
  allLinks.forEach(function (link) {
    link.classList.remove("active");
  });

  // Add active class to current page link
  var activeLink = null;

  // Check for specific pages
  if (currentPage === "index.html" || currentPath.endsWith("/")) {
    activeLink = document.querySelector(
      '.sidebar a[href="../index.html"], .sidebar a[href="index.html"]'
    );
  } else if (currentPage === "Introduction.html") {
    activeLink = document.querySelector(
      '.sidebar a[href="../HTML/Introduction.html"]'
    );
  } else if (currentPage === "page1.html") {
    activeLink = document.querySelector(
      '.sidebar a[href="../HTML/page1.html"]'
    );
  } else if (currentPage === "page2.html") {
    activeLink = document.querySelector(
      '.sidebar a[href="../HTML/page2.html"]'
    );
  } else if (currentPage === "page3.html") {
    activeLink = document.querySelector(
      '.sidebar a[href="../HTML/page3.html"]'
    );
  }

  // Add active class if link found
  if (activeLink) {
    activeLink.classList.add("active");
  }
}
