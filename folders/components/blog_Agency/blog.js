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

function openAllBlogsPage() {
  document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "folders/components/all_blogs/allBlogs.html";
});
}

function blogChangeArrows() {
  const upArrow = document.querySelector(
    "#blog-change-arrows div:nth-child(1) img"
  );
  const downArrow = document.querySelector(
    "#blog-change-arrows div:nth-child(2) img"
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

      downArrow.src = downArrow.getAttribute("gray");
      upArrow.src = upArrow.getAttribute("black");
    }
  });
}
