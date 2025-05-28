function coloringIconsBlack2white() {
  let icons = document.querySelectorAll(".about-icon");

  icons.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.src = el.getAttribute("white");
    });
    el.addEventListener("mouseleave", () => {
      el.src = el.getAttribute("black");
    });
  });
}

fetch("/folders/components/header/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("about-header").innerHTML = data;

    let logo = document
      .querySelector("#about-header")
      .querySelector("#logo-header");
    logo.src = "folders/images/peackok-logo-black.svg";

    let icons = document
      .querySelector("#about-header")
      .querySelectorAll(".icon");
    //whatsapp
    icons[0].classList.add("about-icon");
    icons[0].removeAttribute("gray");
    icons[0].setAttribute("white", "folders/images/whatsapp-white.svg");
    icons[0].src = icons[0].getAttribute("black");

    //X
    icons[1].classList.add("about-icon");
    icons[1].removeAttribute("gray");
    icons[1].setAttribute("white", "folders/images/x-white.svg");
    icons[1].src = icons[1].getAttribute("black");

    icons[2].classList.add("about-icon");
    icons[2].removeAttribute("gray");
    icons[2].setAttribute("white", "folders/images/telegram-white.svg");
    icons[2].src = icons[2].getAttribute("black");

    icons[3].classList.add("about-icon");
    icons[3].removeAttribute("gray");
    icons[3].setAttribute("white", "folders/images/instgram-white.svg");
    icons[3].src = icons[3].getAttribute("black");

    icons[4].classList.add("about-icon");
    icons[4].removeAttribute("gray");
    icons[4].setAttribute("white", "folders/images/be-white.svg");
    icons[4].src = icons[4].getAttribute("black");

    icons[5].classList.add("about-icon");
    icons[5].removeAttribute("gray");
    icons[5].setAttribute("white", "folders/images/linkedin-white.svg");
    icons[5].src = icons[5].getAttribute("black");

    icons[6].classList.add("about-icon");
    icons[6].removeAttribute("gray");
    icons[6].setAttribute("white", "folders/images/facebook-white.svg");
    icons[6].src = icons[6].getAttribute("black");

    //coloring social media header icons
    coloringIconsBlack2white();
  });

function arrowsAnimation() {
  let whiteArrow = document.querySelector("#animate-arrow-white");

  let x = 40;
  let y = 1180;
  setInterval(() => {
    if (x <= 1180) {
      whiteArrow.style.transform = `translateY(${x + 40}px)`;
      x += 55;
    } else if (y > 40) {
      whiteArrow.style.transform = `translateY(${y - 40}px)`;
      y -= 40;
    } else {
      x = 40;
      y = 1180;
    }
  }, 700);

  let blackArrow = document.querySelector("#animate-arrow-black");
  let a = 40;
  let b = 1180;
  setInterval(() => {
    if (a <= 1180) {
      blackArrow.style.transform = `translateX(${a + 40}px)`;
      a += 55;
    } else if (b > 40) {
      blackArrow.style.transform = `translateX(${b - 40}px)`;
      b -= 40;
    } else {
      a = 40;
      b = 1180;
    }
  }, 700);
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
