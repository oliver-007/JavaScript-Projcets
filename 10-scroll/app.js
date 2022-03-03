const linksContainer = document.getElementById("links-container");

const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
  linksContainer.classList.toggle("toggle-nav");
  if (linksContainer.classList.contains("show-links")) {
    navToggle.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    navToggle.innerHTML = `<i class="fas fa-solid fa-bars"></i>`;
  }
});

// ******* fixed navbar *******

const navbar = document.getElementById("nav");
const toplink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = this.window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    toplink.classList.add("show-link");
  } else {
    toplink.classList.remove("show-link");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    linksContainer.classList.remove("show-links");
    linksContainer.classList.remove("toggle-nav");
    if (linksContainer.classList.contains("show-links")) {
      navToggle.innerHTML = `<i class="fas fa-times"></i>`;
    } else {
      navToggle.innerHTML = `<i class="fas fa-solid fa-bars"></i>`;
    }
  });
});
