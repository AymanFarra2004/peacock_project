fetch("folders/components/header/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#header-services").innerHTML = data;
    coloringIconsGray2Black();
  });

fetch("folders/rotating_text/rotatingText.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#rotating-text-top").innerHTML = data;
  });

fetch("folders/rotating_text/rotatingText.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#rotating-text-bottom").innerHTML = data;
  });

serMouse.forEach((el, i) => {
  el.addEventListener("mouseenter", () => {
    cutArea[i].style.visibility = "visible";
  });
  el.addEventListener("mouseleave", () => {
    cutArea[i].style.visibility = "hidden";
  });
});