//colring social media icons Gray to Black
function coloringIconsGray2Black() {
  const possibleContainers = [
    "#home-header",
    "#social-media-sidebar",
    "#header-services",
    "#blog-header",
    "#partners-header",
    "#said-header",
    "#all-works-header",
    "#all-blogs",
    "#blogDetails-box",
  ];
  let icons = [];
  for (let selector of possibleContainers) {
    const container = document.querySelector(selector);
    if (container !== null) {
      icons = container.querySelectorAll(".icon");
      icons.forEach((ele) => {
        ele.addEventListener("mouseenter", () => {
          ele.src = ele.getAttribute("black");
        });
        ele.addEventListener("mouseleave", () => {
          ele.src = ele.getAttribute("gray");
        });
      });
    }
  }
}

//coloring social media icons Black to White
function coloringIconsBlack2white() {
  const possibleContainers = ["#aboutUs-header", "#contact-header"];
  let icons = [];
  for (let selctor of possibleContainers) {
    const container = document.querySelector(selctor);
    if (container !== null) {
      icons = container.querySelectorAll(".icon");
      icons.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          el.src = el.getAttribute("white");
        });
        el.addEventListener("mouseleave", () => {
          el.src = el.getAttribute("black");
        });
      });
    }
  }
}

//coloring social media icons White to Gray
function coloringIconsWhite2Gray() {
  const icons = document
    .querySelector("#cate-header")
    .querySelectorAll(".icon");

  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.src = icon.getAttribute("gray");
    });

    icon.addEventListener("mouseleave", () => {
      icon.src = icon.getAttribute("white");
    });
  });
}

//coloring social meadis icons white to black
function coloringIconsWhite2Black() {
  const icons = document
    .querySelector("#cate-header")
    .querySelectorAll(".icon");

  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.src = icon.getAttribute("black");
    });

    icon.addEventListener("mouseleave", () => {
      icon.src = icon.getAttribute("white");
    });
  });
}

function openRequestService() {
  document.getElementById("request-box").style.width = "967px";
  document.getElementById("request-box").style.height = "587px";
  document.getElementById("request-overLay").style.display = "block";
}
function closeRequestService() {
  document.getElementById("request-box").style.width = "0";
  document.getElementById("request-box").style.height = "0";
  document.getElementById("request-overLay").style.display = "none";
}

function closeRequestByOverlay() {
  const requestOverLay = document.querySelector("#request-overLay");
  requestOverLay.addEventListener("click", closeRequestService);
}

function openCloseSideBar() {
  const btn = document.querySelector(".sidebar-btn");
  btn.addEventListener("click", openSidebar);

  const overLay = document.querySelector("#overlay");
  overLay.addEventListener("click", closeSidebar);
}

function openSidebar() {
  if (window.innerWidth > 768) {
    document.getElementById("sidebar-container").style.width = "650px";
    document.getElementById("overlay").style.display = "block";
  } else {
    document.getElementById("sidebar-container").style.width = "100%";
    document.getElementById("overlay").style.display = "block";
  }
  document.body.style.overflow = "hidden";
  document.querySelector("#sidebar-container").style.overflow = "auto";
}

function closeSidebar() {
  document.getElementById("sidebar-container").style.width = "0";
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto";
}
