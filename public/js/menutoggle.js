const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-menu");

export const menu = () => {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
    }
  });
};
