const linksContainer = document.getElementById("links-container");

const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
});
