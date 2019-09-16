//handle nav on mobiles

const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const menuBtns = document.querySelectorAll(".navBtn");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const hideNav = () => {
  if (nav.classList.value.includes("active")) {
    nav.classList.remove("active");
  }
};

document.querySelector(".main").addEventListener("click", hideNav);

menuBtns.forEach(btn => {
  btn.addEventListener("click", hideNav);
});

//smooth scroll

$(".navBtn").on("click", function(e) {
  const goToSection = `.${e.target.dataset.target}`;
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top - (window.innerWidth < 900 ? 0 : 100)
  });
});

const closeMenu = () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  }
};

//onscroll animations

const about = document.querySelector(".about");

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    about.offsetTop + about.offsetHeight - window.innerHeight + 50
  ) {
    about.classList.add("active");
  }
  // if (
  //   window.scrollY >
  //   offer.offsetTop + offer.offsetHeight - window.innerHeight - 100
  // ) {
  //   offer.classList.add("active");
  // }
  // if (
  //   window.scrollY >
  //   contact.offsetTop + contact.offsetHeight - window.innerHeight - 400
  // ) {
  //   contact.classList.add("active");
  // }
  if (window.scrollY < 100) {
    about.classList.remove("active");
    // offer.classList.remove("active");
    // contact.classList.remove("active");
  }
});
