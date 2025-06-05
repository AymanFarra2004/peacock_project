coloringIconsGray2Black();
openCloseSideBar();

const mouseMove = document.getElementById("mouse");
document.addEventListener("mousemove", (e) => {
  mouseMove.style.transform = `translate(${e.clientX - 50}px, ${
    e.clientY - 75
  }px)`;
});

