console.log(window.innerWidth)
coloringIconsGray2Black();
openCloseSideBar();
categoriesAllWorks();
document.querySelector(".sidebar-btn").addEventListener("click", openSidebar);
const mouseMove = document.getElementById("mouse");
document.addEventListener("mousemove", (e) => {
  mouseMove.style.transform = `translate(${e.clientX - 50}px, ${
    e.clientY - 75
  }px)`;
});

function categoriesAllWorks() {
  const categories = document.querySelectorAll("#all-works-nav ul li");
  const cards = document.querySelectorAll("#all-works section > div");

  /*   const seeAll = categories[0];
  const motionGraphics = categories[1];
  const videoEditing = categories[2];
  const uiUx = categories[3];
  const android = categories[4];
  const ios = categories[5];
  const web = categories[6];

  seeAll.addEventListener("click", () => {
    categories.forEach((cate) => {
      cate.style.color = "rgba(180, 180, 180, 1)";
    });
    seeAll.style.color = "rgba(30, 164, 139, 1)";

    cards.forEach((card) => {
      card.style.display = "block";
    });
  });


  motionGraphics.addEventListener("click", () => {
    categories.forEach((cate) => {
      cate.style.color = "rgba(180, 180, 180, 1)";
    });
    motionGraphics.style.color = "rgba(30, 164, 139, 1)";

    cards.forEach((card) => {
      card.style.display = "none";
      if (card.classList.contains("motion-graphics")) {
        card.style.display = "block";
      }
    });
  });
  
  
  videoEditing.addEventListener("click", () => {
    categories.forEach((cate) => {
      cate.style.color = "rgba(180, 180, 180, 1)";
    });
    videoEditing.style.color = "rgba(30, 164, 139, 1)";

    cards.forEach((card) => {
      card.style.display = "none";
      if (card.classList.contains("video-editing")) {
        card.style.display = "block";
      }
    });
  });

  uiUx.addEventListener("click", () => {
    categories.forEach((cate) => {
      cate.style.color = "rgba(180, 180, 180, 1)";
    });
    uiUx.style.color = "rgba(30, 164, 139, 1)";
  
    cards.forEach((card) => {
      card.style.display = "none";
      if (card.classList.contains("ui-ux")) {
        card.style.display = "block";
      }
    });
  });


  android.addEventListener("click", () => {
    categories.forEach((cate) => {
      cate.style.color = "rgba(180, 180, 180, 1)";
    });
    android.style.color = "rgba(30, 164, 139, 1)";
  
    cards.forEach((card) => {
      card.style.display = "none";
      if (card.classList.contains("android")) {
        card.style.display = "block";
      }
    });
  });


  ios.addEventListener("click", () => {
    categories.forEach((cate) => {
      cate.style.color = "rgba(180, 180, 180, 1)";
    });
    ios.style.color = "rgba(30, 164, 139, 1)";
  
    cards.forEach((card) => {
      card.style.display = "none";
      if (card.classList.contains("ios")) {
        card.style.display = "block";
      }
    });
  });


  web.addEventListener("click", () => {
    categories.forEach((cate) => {
      cate.style.color = "rgba(180, 180, 180, 1)";
    });
    web.style.color = "rgba(30, 164, 139, 1)";
  
    cards.forEach((card) => {
      card.style.display = "none";
      if (card.classList.contains("web")) {
        card.style.display = "block";
      }
    });
  }); */
  categories.forEach((category) => {
    category.addEventListener("click", function () {
      categories.forEach((c) => {
        c.style.color = "rgba(180, 180, 180, 1)";
      });

      this.style.color = "rgba(30, 164, 139, 1)";

      const filter = this.getAttribute("data-filter");

      cards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block";
        } else {
          if (card.classList.contains(filter)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        }
      });
    });
  });
}
