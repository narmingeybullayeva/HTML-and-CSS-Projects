const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  arrows: true, // Next və Previous düymələrini aktiv etmək üçün
  dots: true, // Dots üçün
  responsive: {
    520: {
      dots: false, // Daha böyük ekranlarda dots-u deaktiv edə bilərsiniz
    },
  },
});
