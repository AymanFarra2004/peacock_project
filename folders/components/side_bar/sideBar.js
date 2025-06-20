coloringIconsGray2Black();

const sidebarBtn = document.querySelector("#request-btn-sidebar");
sidebarBtn.addEventListener("click", openRequestService);
sidebarBtn.addEventListener("click", closeSidebar);

//لازم تراجعها ضروري جدا جد جدا جدا جدا
const sectionMap = [
  "home-container",
  "about-us-container",
  "services-container",
  "works-container",
  "blog-agency-container",
  "partners-container",
  "contact-us-container",
];

const links = document.querySelectorAll("#list-sidebar a");

function onScroll() {
  let currentSection = null;
  let scrollTop = window.scrollY;

  sectionMap.forEach((secId) =>{
    const section = document.getElementById(secId);
    const offset = section.offsetTop;

    if (scrollTop >= offset - 150) {
      currentSection = secId;
    }
  });

  if (currentSection) {
    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }
}
links.forEach((link) => {
  link.addEventListener("click", () => {
    closeSidebar(); // أغلق السايد بار عند الضغط على أي رابط
  });
});

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
