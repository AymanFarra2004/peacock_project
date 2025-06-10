  const upArrowPartners = document.querySelector(
    "#partners-change-arrows div:nth-child(1) img"
  );
  const downArrowPartners = document.querySelector(
    "#partners-change-arrows div:nth-child(2) img"
  );

  upArrowPartners.addEventListener("click", () => {
    if (upArrowPartners.getAttribute("src") === upArrowPartners.getAttribute("black")) {
      if (
        upArrowPartners.style.transform === "scaleY(-1)" ||
        downArrowPartners.style.transform === "scaleY(-1)"
      ) {
        upArrowPartners.style.transform = "scaleY(1)";
        downArrowPartners.style.transform = "scaleY(1)";
      } else {
        upArrowPartners.style.transform = "scaleY(-1)";
        downArrowPartners.style.transform = "scaleY(-1)";
      }

      upArrowPartners.src = upArrowPartners.getAttribute("gray");
      downArrowPartners.src = downArrowPartners.getAttribute("black");
    }
  });

  downArrowPartners.addEventListener("click", () => {
    if (downArrowPartners.getAttribute("src") === downArrowPartners.getAttribute("black")) {
      if (
        upArrowPartners.style.transform === "scaleY(-1)" ||
        downArrowPartners.style.transform === "scaleY(-1)"
      ) {
        upArrowPartners.style.transform = "scaleY(1)";
        downArrowPartners.style.transform = "scaleY(1)";
      } else {
        downArrowPartners.style.transform = "scaleY(-1)";
        upArrowPartners.style.transform = "scaleY(-1)";
      }

      downArrowPartners.src = upArrowPartners.getAttribute("gray");
      upArrowPartners.src = downArrowPartners.getAttribute("black");
    }
  });


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
