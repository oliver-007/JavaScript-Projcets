const linksContainer = document.getElementById("links-container");

const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
  if (linksContainer.classList.contains("show-links")) {
    navToggle.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    navToggle.innerHTML = `<i class="fas fa-solid fa-bars"></i>`;
  }
});
