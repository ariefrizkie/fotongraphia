// menu dan toggle
import { menu } from "./menutoggle.js";
// import { carouselElement, navigateElement, reloadSlider } from "./carousel.js";
import { slides, produk } from "./katalog.js";

menu();

// carousel object

let carousel = document.getElementById("carousel");
const navigateContainer = document.querySelector(".navigate");
const next = document.querySelector(".arrow .next");
const prev = document.querySelector(".arrow .prev");
let active = 0;
let lengthItem = slides.length - 1;

for (const slide of slides) {
  carouselElement(slide);
  navigateElement();
}

function carouselElement(slide) {
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

function navigateElement() {
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

function reloadSlider() {
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

// Product List

const product = document.getElementById("produk");

// function listProduk() {
//   produk.map((kategori) => {
//     console.log(kategori.kategori);
//     return itemContainer(kategori.kategori);
//   });
// }

function productContainer() {
  const container = document.createElement("div");
  container.classList.add("w-11/12", "mx-auto");

  const title = document.createElement("h1");
  title.classList.add(
    "font-bold",
    "text-center",
    "text-3xl",
    "text-cyan-800",
    "mb-6"
  );

  title.innerText = "Product List";
  title.setAttribute("data-aos", "fade-up");

  const itemCont = itemContainer();

  container.appendChild(title);
  container.appendChild(itemCont);
  // itemContainer(produkItem);
  product.appendChild(container);
}

function itemContainer() {
  const produkItem = document.createElement("div");
  produkItem.classList.add("produk-item");
  for (const kategori of produk) {
    const produkKategori = document.createElement("div");

    const kategoriTitleContainer = document.createElement("div");
    kategoriTitleContainer.classList.add(
      "text-center",
      "w-full",
      "bg-blue-400",
      "mt-8"
    );
    kategoriTitleContainer.setAttribute("data-aos", "fade-up");

    const title = document.createElement("h1");
    title.classList.add("font-bold", "text-2xl", "text-white", "mb-6", "py-2");
    title.innerText = kategori.kategori;

    const subItem = subitemContainer(kategori.item);
    // subItemCont.appendChild(subItem);
    kategoriTitleContainer.appendChild(title);
    produkKategori.appendChild(kategoriTitleContainer);
    produkKategori.appendChild(subItem);

    // productContainer(produkKategori);
    // cont.appendChild(produkKategori);
    produkItem.append(produkKategori);
  }
  return produkItem;
}

function subitemContainer(item) {
  const subItemCont = document.createElement("div");
  subItemCont.classList.add(
    "mt-6",
    "grid",
    "grid-cols-2",
    "gap-x-6",
    "gap-y-10",
    "sm:grid-cols-3",
    "lg:grid-cols-5",
    "xl:gap-x-8"
  );
  for (const prod of item) {
    const subItem = document.createElement("div");
    subItem.classList.add(
      "group",
      "relative",
      "shadow-md",
      "rounded-md",
      "p-2"
    );
    subItem.setAttribute("data-aos", "fade-up");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add(
      "aspect-h-1",
      "aspect-w-1",
      "w-full",
      "overflow-hidden",
      "rounded-md",
      "bg-gray-200",
      "lg:aspect-none",
      "group-hover:opacity-75"
    );

    const imgItem = document.createElement("img");
    imgItem.classList.add(
      "h-full",
      "w-full",
      "object-cover",
      "object-center",
      "lg:h-full",
      "lg:w-full"
    );
    imgItem.setAttribute("src", prod.img);
    imgItem.setAttribute("alt", prod.nama);

    const textContainer = document.createElement("div");
    textContainer.classList.add("mt-4");

    const cont = document.createElement("div");

    const titleSubItem = document.createElement("h3");
    titleSubItem.classList.add("text-sm", "text-gray-700");

    const titleLink = document.createElement("a");
    titleLink.setAttribute("href", "#");
    titleLink.classList.add("hover:text-blue-700", "font-bold");
    titleLink.innerText = prod.nama;

    const descItem = document.createElement("p");
    descItem.classList.add("mt-1", "text-sm", "text-gray-500");
    descItem.innerText = prod.deskripsi;

    const hargaItem = document.createElement("p");
    hargaItem.classList.add("mt-1", "text-sm", "font-medium", "text-gray-900");
    hargaItem.innerText = `Rp. ${prod.Harga} / ${prod.satuan}`;

    titleSubItem.appendChild(titleLink);

    cont.appendChild(titleSubItem);
    cont.appendChild(descItem);
    cont.appendChild(hargaItem);

    imgContainer.appendChild(imgItem);
    textContainer.appendChild(cont);

    subItem.appendChild(imgContainer);
    subItem.appendChild(textContainer);
    subItemCont.appendChild(subItem);
  }
  return subItemCont;
  // item.appendChild(subItem);
}

productContainer();

// faq

import { faqItems, faqExpand } from "./faq.js";
faqItems();
faqExpand();
