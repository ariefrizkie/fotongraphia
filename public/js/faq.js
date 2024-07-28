import { faq } from "./katalog.js";

const faqList = document.getElementById("faq-list");

export function faqItems() {
  for (const faqAsks of faq) {
    const faqItem = document.createElement("div");
    faqItem.classList.add("border-t-2");
    faqItem.setAttribute("data-aos", "fade-up");

    const faqTitle = document.createElement("div");
    faqTitle.classList.add(
      "faq-title",
      "flex",
      "justify-between",
      "px-2",
      "py-3"
    );

    const faqAsk = document.createElement("h2");
    faqAsk.classList.add("font-bold");
    faqAsk.innerHTML = faqAsks.pertanyaan;

    const faqButton = document.createElement("i");
    faqButton.classList.add("fa-solid", "fa-plus");

    const faqDetail = document.createElement("div");
    faqDetail.classList.add("faq-detail", "overflow-hidden", "h-0");

    const faqAnswer = document.createElement("p");
    faqAnswer.classList.add("p-2", "text-justify");
    faqAnswer.innerHTML = faqAsks.jawaban;

    faqDetail.appendChild(faqAnswer);
    faqTitle.appendChild(faqAsk);
    faqTitle.appendChild(faqButton);

    faqItem.appendChild(faqTitle);
    faqItem.appendChild(faqDetail);

    faqList.appendChild(faqItem);
  }

  return faqList;
}

export const faqExpand = () => {
  const faqTitle = document.querySelectorAll(".faq-title");
  const faqDetail = document.querySelectorAll(".faq-detail");

  faqTitle.forEach((faq, i) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("open");
      if (faq.classList.contains("open")) {
        faqDetail[i].classList.replace(
          "h-0",
          `h-[${faqDetail[i].scrollHeight}]`
        );
        faq.querySelector("i").classList.replace("fa-plus", "fa-minus");
      } else {
        faqDetail[i].classList.replace(
          `h-[${faqDetail[i].scrollHeight}]`,
          "h-0"
        );
        faq.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
      // faqDetail[i].classList.toggle("hidden");
    });
  });
};
