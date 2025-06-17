const upArrowPartners = document.querySelector(
  "#partners-change-arrows div:nth-child(1) img"
);
const downArrowPartners = document.querySelector(
  "#partners-change-arrows div:nth-child(2) img"
);
const logo1Group1 = document
  .querySelector("#partners-logo1")
  .querySelector("div:nth-of-type(1) img");
const logo2Group1 = document
  .querySelector("#partners-logo1")
  .querySelector("div:nth-of-type(4) img");
const logo1Group2 = document
  .querySelector("#partners-logo2")
  .querySelector("div:nth-of-type(1) img");
const logo2Group2 = document
  .querySelector("#partners-logo2")
  .querySelector("div:nth-of-type(4) img");

   
  

upArrowPartners.addEventListener("click", () => {
  if (
    upArrowPartners.src.includes(upArrowPartners.getAttribute("black")) &&
    window.innerWidth <= 768
  ) {
    logo2Group1.style.display = "none";
    logo1Group1.style.display = "block";

    logo2Group2.style.display = "none";
    logo1Group2.style.display = "block";

    const logo1 = document.querySelector("#partners-logo1");
    const logo2 = document.querySelector("#partners-logo2");

    //Logo arrangement 
    logo1.prepend(logo1.children[3]);
    logo2.prepend(logo2.children[3]);
  }

  if (upArrowPartners.src.includes(upArrowPartners.getAttribute("black"))) {
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
  if (
    downArrowPartners.src.includes(downArrowPartners.getAttribute("black")) &&
    window.innerWidth <= 768
  ) {
    logo2Group1.style.display = "block";
    logo1Group1.style.display = "none";
    
    logo2Group2.style.display = "block";
    logo1Group2.style.display = "none";
    
    const logo1 = document.querySelector("#partners-logo1");
    const logo2 = document.querySelector("#partners-logo2");
  
    //Logo arrangement
    logo1.appendChild(logo1.children[0]);
    logo2.appendChild(logo2.children[0]);
  }

  if (downArrowPartners.src.includes(downArrowPartners.getAttribute("black"))) {
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
