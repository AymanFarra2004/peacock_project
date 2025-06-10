console.log("Kosom hamas");

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
    rangeValue.style.left = `${position}px`;
    slider.style.background = `linear-gradient(to right, rgba(15, 121, 99, 1) ${
      percent * 100
    }%, rgba(15, 15, 228, 0.18) ${percent * 100}%)`;
  }
  console.log("ascasc");
  console.log(slider);
  slider.addEventListener("input", updateValuePosition);


closeRequestByOverlay();