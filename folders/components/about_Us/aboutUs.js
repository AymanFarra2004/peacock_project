fetch("folders/components/header/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("aboutUs-header").innerHTML = data;
    document
      .getElementById("aboutUs-header")
      .querySelector(".sidebar-btn")
      .addEventListener("click", openSidebar);

    //turn logo to black
    let logo = document
      .querySelector("#aboutUs-header")
      .querySelector(".logo-header");
      console.log(logo)
    logo.src = "folders/images/peackok-logo-black.svg";

    let icons = document
      .querySelector("#aboutUs-header")
      .querySelectorAll(".icon");

    icons.forEach((icon) => {
      /* icon.classList.add("about-icon"); */
      icon.src = icon.getAttribute("black");

      //whatsapp
      icons[0].setAttribute("white", "folders/images/whatsapp-white.svg");

      //X
      icons[1].setAttribute("white", "folders/images/x-white.svg");

      icons[2].setAttribute("white", "folders/images/telegram-white.svg");

      icons[3].setAttribute("white", "folders/images/instgram-white.svg");

      icons[4].setAttribute("white", "folders/images/be-white.svg");

      icons[5].setAttribute("white", "folders/images/linkedin-white.svg");

      icons[6].setAttribute("white", "folders/images/facebook-white.svg");

      //coloring social media header icons
      coloringIconsBlack2white();
    });
  });

arrowsAnimation();
loctionAnimation();
setInterval(loctionAnimation, 10000);

function arrowsAnimation() {
  let whiteArrow = document.querySelector("#animate-arrow-white");

  let x = 30;
  let y = 1180;
  setInterval(() => {
    if (x <= 1180) {
      whiteArrow.style.transform = `translateY(${x + 30}px)`;
      x += 30;
    } else if (y > 30) {
      whiteArrow.style.transform = `translateY(${y - 30}px)`;
      y -= 30;
    } else {
      x = 30;
      y = 1180;
    }
  }, 500);

  let blackArrow = document.querySelector("#animate-arrow-black");
  let a = 30;
  let b = 1180;
  setInterval(() => {
    if (a <= 1180) {
      blackArrow.style.transform = `translateX(${a + 30}px)`;
      a += 30;
    } else if (b > 30) {
      blackArrow.style.transform = `translateX(${b - 30}px)`;
      b -= 30;
    } else {
      a = 30;
      b = 1180;
    }
  }, 500);
}

function loctionAnimation() {
  let loc = document.querySelector("#location-about");
  let locText = document.querySelector("#location-about h4");
  let locIcon = document.querySelector("#location-about img");
  setTimeout(() => {
    loc.style.top = "355px";
    locText.style.color = locText.getAttribute("data-white");

    setTimeout(() => {
      locIcon.src = locIcon.getAttribute("data-white");
      locIcon.style.opacity = "0.7";
    }, 700);

    locIcon.style.opacity = "0.2";
  }, 5000);

  setTimeout(() => {
    loc.style.top = "375px";

    setTimeout(() => {
      locIcon.src = locIcon.getAttribute("data-black");
      locIcon.style.opacity = "0.7";
    }, 700);

    locIcon.style.opacity = "0.2";
    locText.style.color = locText.getAttribute("data-black");
  }, 10000);
}
/* //animate white arrow
let whiteArrow = document.querySelector("#animate-arrow-white");
setInterval(()=>{
setTimeout(()=>{

whiteArrow.style.transform = "translateY(55px)";

},2000);
whiteArrow.style.top = "0px";},2000); */
