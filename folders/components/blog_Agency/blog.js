fetch("folders/components/header/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#blog-header").innerHTML = data;

    document
      .querySelector("#blog-agency-container")
      .querySelector(".sidebar-btn")
      .addEventListener("click", openSidebar);
    coloringIconsGray2Black();
  });

fetch("folders/rotating_text/rotatingText.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#blog-rotate-text").innerHTML = data;
  });
