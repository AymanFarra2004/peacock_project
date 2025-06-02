function partnersChangeArrows() {
  const upArrow = document.querySelector(
    "#partners-change-arrows div:nth-child(1) img"
  );
  const downArrow = document.querySelector(
    "#partners-change-arrows div:nth-child(2) img"
  );

  upArrow.addEventListener("click", () => {
    if (upArrow.getAttribute("src") === upArrow.getAttribute("black")) {
      if (
        upArrow.style.transform === "scaleY(-1)" ||
        downArrow.style.transform === "scaleY(-1)"
      ) {
        upArrow.style.transform = "scaleY(1)";
        downArrow.style.transform = "scaleY(1)";
      } else {
        upArrow.style.transform = "scaleY(-1)";
        downArrow.style.transform = "scaleY(-1)";
      }

      upArrow.src = upArrow.getAttribute("gray");
      downArrow.src = downArrow.getAttribute("black");
    }
  });

  downArrow.addEventListener("click", () => {
    if (downArrow.getAttribute("src") === downArrow.getAttribute("black")) {
      if (
        upArrow.style.transform === "scaleY(-1)" ||
        downArrow.style.transform === "scaleY(-1)"
      ) {
        upArrow.style.transform = "scaleY(1)";
        downArrow.style.transform = "scaleY(1)";
      } else {
        downArrow.style.transform = "scaleY(-1)";
        upArrow.style.transform = "scaleY(-1)";
      }

      downArrow.src = upArrow.getAttribute("gray");
      upArrow.src = downArrow.getAttribute("black");
    }
  });
}

fetch("folders/components/header/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#partners-header").innerHTML = data;

    coloringIconsGray2Black();

    document
      .querySelector("#partners-header")
      .querySelector(".sidebar-btn")
      .addEventListener("click", openSidebar);
    coloringIconsGray2Black();
  });
