//colring social media icons Gray to Black
function coloringIconsGray2Black() {
  const possibleContainers = [
    "#home-header",
    "#social-media-sidebar",
    "#header-services",
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
  let icons = document.querySelector("#about-header").querySelectorAll(".icon");

  icons.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.src = el.getAttribute("white");
    });
    el.addEventListener("mouseleave", () => {
      el.src = el.getAttribute("black");
    });
  });
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
