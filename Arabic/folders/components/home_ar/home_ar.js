/* document.addEventListener("DOMContentLoaded", () => {
    function animateImages(){
    setTimeout(() => {
      let white1 = document.querySelector(".white1");
      let black1 = document.querySelector(".black1");
      let purble1 = document.querySelector(".purble1");

      white1.style.gridRow = "1 / span 2";
      black1.style.gridRow = "3 / span 1";
    }, 2000);

    
    setTimeout(() => {
      let white1 = document.querySelector(".white1");
      let black1 = document.querySelector(".black1");
      let purble1 = document.querySelector(".purble1");

      white1.style.gridColumn = "1 / span 2";
      black1.style.gridColumn = "1 / span 2";
      if (purble1.src !== purble1.getAttribute("purble2")) {
        purble1.src = purble1.getAttribute("purble2");
      }
      purble1.style.gridColumn = "3";
    }, 4000);
    
    
    setTimeout(() => {
      let white1 = document.querySelector(".white1");
      let black1 = document.querySelector(".black1");

      if (white1.src !== white1.getAttribute("white2")) {
        white1.style.transition = "width 2s";
        white1.style.width = "415px";
        white1.style.height = "209px";
        white1.src = white1.getAttribute("white2");
        
      }
      
      if (black1.src !== black1.getAttribute("black2")) {
        black1.style.transition = "width 2s";
        black1.style.width = "415px";
        black1.style.height = "421px";
        setTimeout(()=>{
        black1.src = black1.getAttribute("black2");
      }, 1000)}
      white1.style.gridRow = "3";
      black1.style.gridRow = "1 / span 2";
    }, 6000);
    
    
    setTimeout(() => {
      let white1 = document.querySelector(".white1");
      let black1 = document.querySelector(".black1");
      let purble1 = document.querySelector(".purble1");

      if (purble1.src !== purble1.getAttribute("purble1")) {
        purble1.src = purble1.getAttribute("purble1");
      }
      if (white1.src !== white1.getAttribute("white1")) {
        white1.style.transition = "width 2s";
        white1.style.width = "415px";
        white1.style.height = "421px";
        white1.src = white1.getAttribute("white1");
      }
      if (black1.src !== black1.getAttribute("black1")) {
        black1.style.transition = "width 2s";
        black1.style.width = "415px";
        black1.style.height = "209px";
        black1.src = black1.getAttribute("black1");
      }

      if ((getComputedStyle(purble1).gridColumn !== "1 / span 1")) {
        purble1.style.gridColumn = "1 / span 1";
      }
      if (getComputedStyle(white1).gridColumn !== "2 / span 2") {
        white1.style.gridColumn = "2 / span 2";
      }
      if (getComputedStyle(black1).gridColumn !== "2 / span 2") {
        black1.style.gridColumn = "2 / span 2";
      }

      white1.style.gridRow = "2 / span 2";
      black1.style.gridRow = "1 / span 1";
    }, 8000);
}
animateImages();
setInterval(animateImages, 8000);
});
 */

/* document.addEventListener("DOMContentLoaded", () => {
  function animateImages() {
    //1
    setTimeout(() => {
      let white = document.querySelector(".white");
      let black = document.querySelector(".black");

      white.style.top = "0px";
      black.style.top = "425px";
    }, 2000);

    //2
    setTimeout(() => {
      let white = document.querySelector(".white");
      let black = document.querySelector(".black");
      let purble = document.querySelector(".purble");

      purble.style.borderTopRightRadius = "93px";
      purble.style.borderBottomRightRadius = "93px";
      purble.style.borderTopLeftRadius = "0px";
      purble.style.borderBottomLeftRadius = "0px";

      purble.style.left = "420px";
      white.style.right = "211px";
      black.style.right = "211px";
    }, 6000);

    //3
    setTimeout(() => {
      let white = document.querySelector(".white");
      let black = document.querySelector(".black");
      let purble = document.querySelector(".purble");
      
      white.style.height = "209px";
      black.style.height = "421px"
      white.style.top = "420px";
      black.style.top = "0px";
    }, 10000);

    //4
     setTimeout(() => {
      let white = document.querySelector(".white");
      let black = document.querySelector(".black");
      let purble = document.querySelector(".purble");

      purble.style.borderTopRightRadius = "0px";
      purble.style.borderBottomRightRadius = "0px";
      purble.style.borderTopLeftRadius = "93px";
      purble.style.borderBottomLeftRadius = "93px";
      
      purble.style.left = "0"
      white.style.height = "421px"
      black.style.height = "209px"
      white.style.top = "214px";
      black.style.top = "0px";
      white.style.right = "0px";
      black.style.right = "0px";
    }, 14000);
  }
  animateImages();
  setInterval(animateImages, 16000);
});
 */

console.log("KKKKKKK");
//home header
fetch("folders/components/header_ar/header_ar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("home-header").innerHTML = data;
    document
      .querySelector(".sidebar-btn")
      .addEventListener("click", openSidebar);
  });
//coloring social media header icons
coloringIconsGray2Black();

function animateImageMobile() {
  //1
  setTimeout(() => {
    const whiteMobile = document.querySelector("#images .purble-mobileEdition");
    const blackMobile = document.querySelector("#images .black-mobileEdition");

    whiteMobile.style.height = "150px";
    blackMobile.style.height = "310px";
    whiteMobile.style.width = "139px";
    blackMobile.style.width = "287px";

    whiteMobile.style.top = "214px";
    blackMobile.style.top = "7px";
    whiteMobile.style.right = "98px";
    blackMobile.style.right = "20px";
  }, 2000);

  //2
  setTimeout(() => {
    const whiteMobile = document.querySelector("#images .purble-mobileEdition");
    const blackMobile = document.querySelector("#images .black-mobileEdition");

    whiteMobile.style.height = "309px";
    blackMobile.style.height = "150px";
    whiteMobile.style.width = "287px";
    blackMobile.style.width = "139px";

    whiteMobile.style.top = "7px";
    blackMobile.style.top = "214px";
    whiteMobile.style.right = "20px";
    blackMobile.style.right = "89px";
  }, 6000);
}

function animateImageDesktop() {
  //1
  setTimeout(() => {
    const white = document.querySelector(".white");
    const black = document.querySelector(".black");
    white.style.height = "421px";
    black.style.height = "209px";

    white.style.top = "0px";
    black.style.top = "423px";
  }, 2000);

  //2
  setTimeout(() => {
    console.log("KSDGA")

    const white = document.querySelector(".white");
    const black = document.querySelector(".black");
    const purble = document.querySelector(".purble");

    purble.style.borderTopLeftRadius = "0px";
    purble.style.borderBottomLeftRadius = "0px";
    purble.style.borderTopRightRadius = "93px";
    purble.style.borderBottomRightRadius = "93px";

    purble.style.left = "420px";
    white.style.right = "210px";
    black.style.right = "210px";
  }, 6000);

  //3
  setTimeout(() => {
    const white = document.querySelector(".white");
    const black = document.querySelector(".black");

    white.style.height = "209px";
    black.style.height = "421px";
    white.style.top = "423px";
    black.style.top = "0px";
  }, 10000);

  //4
  setTimeout(() => {
    const white = document.querySelector(".white");
    const black = document.querySelector(".black");
    const purble = document.querySelector(".purble");

    purble.style.borderTopLeftRadius = "93px";
    purble.style.borderBottomLeftRadius = "93px";
    purble.style.borderTopRightRadius = "0px";
    purble.style.borderBottomRightRadius = "0px";

    white.style.height = "209px";
    black.style.height = "421px";

    purble.style.left = "0px";
    white.style.top = "423px";
    black.style.top = "0px";
    white.style.right = "0px";
    black.style.right = "0px";
  }, 14000);
}

if (window.innerWidth > 768) {
  animateImageDesktop();
  setInterval(animateImageDesktop, 16000);
} else {
  animateImageMobile();
  setInterval(animateImageMobile, 10000);
}

const requestHome = document
  .querySelector("#home-container")
  .querySelector("#request-btn-home");
requestHome.addEventListener("click", openRequestService);
