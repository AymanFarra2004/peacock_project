const slider = document.getElementById("slider");
const rangeValue = document.getElementById("rangeValue");

function updateValuePosition() {
  const val = +slider.value;
  const min = +slider.min;
  const max = +slider.max;
  const percent = (val - min) / (max - min);

  const sliderWidth = slider.offsetWidth;
  const thumbSize = 20;
  const position = percent * (sliderWidth - thumbSize) + thumbSize / 2;

  rangeValue.innerText = val;
  rangeValue.style.right = `${position}px`;
  slider.style.background = `linear-gradient(to left, rgba(15, 121, 99, 1) ${
    percent * 100
  }%, rgba(15, 15, 228, 0.18) ${percent * 100}%)`;
}
slider.addEventListener("input", updateValuePosition);

closeRequestByOverlay();

const serviceValue = document.querySelector("#request-box select");
const serviceImg = document.querySelector("#request-images");
function updateserviceImage() {
  if (serviceValue.value == "motionGraphic-videoProduction") {
    serviceImg.style.transform = "translateX(0)";
  } else if (serviceValue.value == "digitalMarketing-platformMangement") {
    serviceImg.style.transform = "translateX(472px)";
  } else if (serviceValue.value == "webDevelopment") {
    serviceImg.style.transform = "translateX(944px)";
  } else if (serviceValue.value == "visualIdentity") {
    serviceImg.style.transform = "translateX(1416px)";
  } else if (serviceValue.value == "newsServices") {
    serviceImg.style.transform = "translateX(1888px)";
  } else if (serviceValue.value == "voicerServices") {
    serviceImg.style.transform = "translateX(2360px)";
  }
}
serviceValue.addEventListener("input", updateserviceImage);
