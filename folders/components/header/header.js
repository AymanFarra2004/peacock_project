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
      icons.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          el.src = el.getAttribute("black");
        });
        el.addEventListener("mouseleave", () => {
          el.src = el.getAttribute("gray");
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
