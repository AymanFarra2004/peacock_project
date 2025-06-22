fetch("folders/components/header_ar/header_ar.html")
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

fetch("folders/rotating_text_ar/rotatingText_ar.html")
.then((res) => res.text())
.then((data) => {
    document.querySelector("#said-rotate-text").innerHTML = data;
  });


  
  const cardsContainer = document.querySelector("#said-slider-wrapper");
  const overlay = document.querySelector(".said-slider-overlay");
  const cards = cardsContainer.querySelectorAll(".card");
  const sliderBtns = document.querySelectorAll("#said-slide-btns img");

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
    if(window.innerWidth > 768){
    cardsContainer.style.transform = `translateX(${0 * (cardWidth)}px)`;}
    else {
    cardsContainer.style.transform = `translateX(${0 * (cardWidth - 12)}px)`;
    }
    currentIndex = 0;
    updateSliderBtns();
  });
  sliderBtns[1].addEventListener("click", () => {
    if(window.innerWidth > 768){
    cardsContainer.style.transform = `translateX(${1 * (cardWidth)}px)`;}
    else {
    cardsContainer.style.transform = `translateX(${1 * (cardWidth - 12)}px)`;
    }
    currentIndex = 1;
    updateSliderBtns();
  });
  sliderBtns[2].addEventListener("click", () => {
   if(window.innerWidth > 768){
    cardsContainer.style.transform = `translateX(${2 * (cardWidth)}px)`;}
    else {
    cardsContainer.style.transform = `translateX(${2 * (cardWidth - 12)}px)`;
    }
    currentIndex = 2;
    updateSliderBtns();
  });
  sliderBtns[3].addEventListener("click", () => {
    if(window.innerWidth > 768){
    cardsContainer.style.transform = `translateX(${3 * (cardWidth)}px)`;}
    else {
    cardsContainer.style.transform = `translateX(${3 * (cardWidth - 12)}px)`;
    }
    currentIndex = 3;
    updateSliderBtns();
  });




  let startX = 0;
  let endX = 0;
  let currentIndex = 0;
  let cardWidth = 0;
  if(window.innerWidth > 768){
  cardWidth = 662 + 50;
}else {
  cardWidth = 350 + 50;
}
  const maxIndex = cards.length - 1;

  function showSlide(index) {
    if(window.innerWidth > 768){
    cardsContainer.style.transform = `translateX(${index * (cardWidth)}px)`;}
    else {
    cardsContainer.style.transform = `translateX(${index * (cardWidth - 12)}px)`;
    }
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
