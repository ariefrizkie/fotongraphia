// menu dan toggle
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// faq
const faqTitle = document.querySelectorAll(".faq-title");
const faqDetail = document.querySelectorAll(".faq-detail");

faqTitle.forEach((faq, i) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    if (faq.classList.contains("open")) {
      faqDetail[i].classList.replace("h-0", `h-[${faqDetail[i].scrollHeight}]`);
      faq.querySelector("i").classList.replace("fa-plus", "fa-minus");
    } else {
      faqDetail[i].classList.replace(`h-[${faqDetail[i].scrollHeight}]`, "h-0");
      faq.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
    // faqDetail[i].classList.toggle("hidden");
  });
});

console.log(faqDetail[0].scrollHeight);
