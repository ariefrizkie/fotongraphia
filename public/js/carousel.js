import { slides } from "./katalog.js";

let carousel = document.getElementById("carousel");
const navigateContainer = document.querySelector(".navigate");
const next = document.querySelector(".arrow .next");
const prev = document.querySelector(".arrow .prev");
let active = 0;
let lengthItem = slides.length - 1;

export function carouselElement(slide) {
  const carouselItemElemen = document.createElement("div");

  carouselItemElemen.classList.add(
    "carousel-item",
    "flex",
    "flex-col",
    "md:flex-row-reverse",
    "h-full",
    "w-full",
    "items-center",
    "justify-center",
    "md:relative",
    slide.color
  );

  const divImg = document.createElement("div");
  divImg.classList.add(
    "hero-img",
    "h-3/5",
    "sm:h-[70%]",
    "md:h-full",
    "w-screen",
    "min-h-64",
    "flex",
    "justify-end",
    "relative"
  );

  const img = document.createElement("img");
  img.classList.add("carousel-img", "h-full", "object-cover");
  img.setAttribute("src", slide.img);

  const carouselDesc = document.createElement("div");
  carouselDesc.classList.add(
    "md:pl-5",
    "hero-desc",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "h-2/5",
    "sm:h-[30%]",
    "md:h-full",
    "md:absolute",
    "md:items-start",
    "w-11/12",
    "text-white"
  );

  const carouselCategory = document.createElement("h2");

  carouselCategory.classList.add(
    "category-slide",
    "text-2xl",
    "sm:text-3xl",
    "md:text-4xl",
    "md:mb-3",
    "lg:text-5xl",
    "font-bold"
  );

  const carouselTitle = document.createElement("h1");
  carouselTitle.classList.add(
    "title-slide",
    "text-4xl",
    "sm:text-5xl",
    "md:text-6xl",
    "md:mb-3",
    "lg:text-6xl",
    "font-bold"
  );

  const desc = document.createElement("p");
  desc.classList.add(
    "desc-slide",
    "text-sm",
    "sm:text-lg",
    "md:mb-3",
    "lg:text-2xl",
    "font-semibold"
  );

  const descText = document.createTextNode(slide.desc);

  const categoryText = document.createTextNode(slide.categori);
  const titleText = document.createTextNode(slide.name);

  carouselTitle.appendChild(titleText);

  desc.appendChild(descText);

  carouselCategory.appendChild(categoryText);

  carouselDesc.appendChild(carouselCategory);
  carouselDesc.appendChild(carouselTitle);
  carouselDesc.appendChild(desc);

  divImg.appendChild(img);
  carouselItemElemen.appendChild(divImg);
  carouselItemElemen.appendChild(carouselDesc);
  carousel.appendChild(carouselItemElemen);
}

export function navigateElement() {
  const navigateBtn = document.createElement("button");
  navigateBtn.classList.add(
    "navigate-item",
    "block",
    "navigate-off",
    "bg-white",
    "rounded-full",
    "bg-opacity-50",
    "transition-all",
    "duration-1000"
  );

  const navigateSpan = document.createElement("span");
  navigateSpan.classList.add("block", "h-2", "w-0", "rounded-full");

  navigateBtn.appendChild(navigateSpan);
  navigateContainer.appendChild(navigateBtn);

  navigateContainer.firstElementChild.classList.replace(
    "navigate-off",
    "navigate-active"
  );
}
const navigate = document.querySelectorAll(".navigate-item");
const carouselItems = document.querySelectorAll(".carousel-item");

// carousel / slider

next.addEventListener("click", () => {
  if (active + 1 > lengthItem) {
    active = 0;
  } else {
    active += 1;
  }
  reloadSlider();
});
prev.addEventListener("click", () => {
  if (active - 1 < 0) {
    active = lengthItem;
  } else {
    active -= 1;
  }
  reloadSlider();
});

let refreshCarousel = setInterval(() => {
  next.click();
}, 10000);

export function reloadSlider() {
  let checkLeft = carouselItems[active].offsetLeft;
  carousel.style.left = `-${checkLeft}px`;

  let navigateActive = document.querySelector(".navigate-active");

  navigate[active].classList.replace("navigate-off", "navigate-active");

  navigateActive.classList.replace("navigate-active", "navigate-off");

  clearInterval(refreshCarousel);
  refreshCarousel = setInterval(() => {
    next.click();
  }, 10000);
}

const dot = document.querySelector(".navigate-item span");
navigate.forEach((item, i) => {
  item.addEventListener("click", () => {
    active = i;
    reloadSlider();
  });
});

// navigate.forEach((item, i) => {
//   if (i !== active) {
//     dot.classList.remove("w-0");
//     dot.classList.add("w-full");
//   } else {
//     dot.classList.remove("w-full");
//     dot.classList.add("w-0");
//   }
// });
