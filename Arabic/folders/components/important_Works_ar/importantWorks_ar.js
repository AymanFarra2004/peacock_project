cateListanimation();
function cateListanimation() {
  const cateList = document
    .querySelector("#categories")
    .querySelectorAll("ul li");
  const arrowList = document.querySelector("#cate-arrow-list");
  const arrowPositions = ["-5px", "46px", "97px", "150px"];

  cateList.forEach(function (el, index) {
    el.addEventListener("click", function () {
      arrowList.style.top = arrowPositions[index];

      cateList.forEach(function (item) {
        if (window.innerWidth > 768) {
          item.style.fontSize = "18px";
        } else {
          item.style.fontSize = "16px";
        }
        item.style.color = "rgb(150, 150, 150)";
      });
      if (window.innerWidth > 768) {
        el.style.fontSize = "22px";
        el.style.color = "white";
      } else {
        el.style.color = "rgba(254, 216, 95, 1)";
      }
    });
  });
}

document.getElementById("works-btn").addEventListener("click", function () {
  window.location.href = "folders/components/all_works/allWorks.html";
});

fetch("folders/components/header_ar/header_ar.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#cate-header").innerHTML = data;
    coloringIconsGray2Black();

    const cateHeader = document.querySelector("#cate-header");
    cateHeader.querySelector(".logo-header").src =
      "folders/images/peackok-logo-white.svg";
    cateHeader.querySelector(".arabic-header").style.color =
      "rgba(255, 255, 255, 1)";
    cateHeader.querySelector(".sidebar-btn").querySelector("img").src =
      "folders/images/sidebar-btn-white.svg";

    document
      .querySelector(".sidebar-btn")
      .addEventListener("click", openSidebar);
    const icons = document
      .querySelector("#cate-header")
      .querySelectorAll(".icon");

    icons.forEach((icon) => {
      icon.src = icon.getAttribute("white");
    });

    //coloring social media header icons
    coloringIconsWhite2Black();

    //open side bar
    document
      .querySelector("#cate-header")
      .querySelector(".sidebar-btn")
      .addEventListener("click", openSidebar);
  });

fetch("folders/rotating_text/rotatingText.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#cate-rotating-text-top").innerHTML = data;

    //colring the rotating text to White
    document
      .querySelector("#cate-rotating-text-top")
      .querySelector("g")
      .querySelector("text")
      .setAttribute("fill", "rgba(255, 255, 255, 1)");
  });

/* function infoBox() {
  const boxName = [
    "cate-orange",
    "cate-light-blue",
    "cate-laptop",
    "cate-world-palnet",
    "cate-news",
    "cate-mobile",
  ];
  boxName.forEach((el, i) => {
    const box = document.querySelector(`#${el}`);
    box.addEventListener("mouseenter", () => {
      box.querySelector("div").style.height = "140px";
    });

    box.addEventListener("mouseleave", () => {
      box.querySelector("div").style.height = "0";
    });
  });
} */
