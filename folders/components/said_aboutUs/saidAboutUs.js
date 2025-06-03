fetch("folders/components/header/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("said-header").innerHTML = data;

    //open sideBar
    document
      .querySelector("#said-aboutUs-container")
      .querySelector(".sidebar-btn")
      .addEventListener("click", openSidebar);

    coloringIconsGray2Black();
  });

fetch("folders/rotating_text/rotatingText.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#said-rotate-text").innerHTML = data;
  });


function swipeBySliderBtns() {
  const sliderBtns = document.querySelectorAll("#said-slide-btns img");
  const cardsContainer = document.querySelector("#said-slider-wrapper");
  const cardWidth = 662 + 50;

  let currentIndex = 0;

function updateSliderBtns() {
  sliderBtns.forEach((btn, index) => {
    if (index === currentIndex) {
      btn.src = btn.getAttribute("data-yellow");
    } else {
      btn.src = btn.getAttribute("data-gray");
    }
  });
}

  sliderBtns[0].addEventListener("click", () => {
    cardsContainer.style.transform = `translateX(-${0 * cardWidth}px)`;
    currentIndex = 0;
    updateSliderBtns();
  });
  sliderBtns[1].addEventListener("click", () => {
    cardsContainer.style.transform = `translateX(-${1 * cardWidth}px)`;
    currentIndex = 1;
    updateSliderBtns();
  });
  sliderBtns[2].addEventListener("click", () => {
    cardsContainer.style.transform = `translateX(-${2 * cardWidth}px)`;
    currentIndex = 2;
    updateSliderBtns();
  });
  sliderBtns[3].addEventListener("click", () => {
    cardsContainer.style.transform = `translateX(-${3 * cardWidth}px)`;
    currentIndex = 3;
    updateSliderBtns();
  });
}

function slider() {
  const cardsContainer = document.querySelector("#said-slider-wrapper");
  const overlay = document.querySelector(".said-slider-overlay");
  const cards = cardsContainer.querySelectorAll(".card");
  const sliderBtns = document.querySelectorAll("#said-slide-btns img");

  let startX = 0;
  let endX = 0;
  let currentIndex = 0;

  const cardWidth = 662 + 50;

  const maxIndex = cards.length - 1;

  function showSlide(index) {
    cardsContainer.style.transform = `translateX(-${index * cardWidth}px)`;
    updateSliderBtns();
  }

  function handleSwipe() {
    const diff = endX - startX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex > 0) {
        currentIndex--;
      } else if (diff < 0 && currentIndex < maxIndex) {
        currentIndex++;
      }
      showSlide(currentIndex);
    }
  }

  function updateSliderBtns() {
    sliderBtns.forEach((btn, index) => {
      if (index === currentIndex) {
        btn.src = btn.getAttribute("data-yellow");
      } else {
        btn.src = btn.getAttribute("data-gray");
      }
    });
  }

  overlay.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  overlay.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  overlay.addEventListener("mousedown", (e) => {
    startX = e.clientX;
  });

  overlay.addEventListener("mouseup", (e) => {
    endX = e.clientX;
    handleSwipe();
  });
}
