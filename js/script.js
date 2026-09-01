// FixNear - Member 1 JavaScript

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

// Home search.
// The Providers page will use the "search" URL parameter later.
const homeSearch = document.getElementById("homeSearch");
const homeSearchBtn = document.getElementById("homeSearchBtn");

function goToProviderSearch() {
  const value = homeSearch.value.trim();

  if (value === "") {
    window.location.href = "providers.html";
    return;
  }

  window.location.href =
    "providers.html?search=" + encodeURIComponent(value);
}

if (homeSearchBtn) {
  homeSearchBtn.addEventListener("click", goToProviderSearch);
}

if (homeSearch) {
  homeSearch.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      goToProviderSearch();
    }
  });
}
