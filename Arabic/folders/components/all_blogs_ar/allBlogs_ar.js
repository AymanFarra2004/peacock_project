coloringIconsGray2Black();
openCloseSideBar();
openBlogDetails();

const mouseMove = document.getElementById("mouse");
document.addEventListener("mousemove", (e) => {
  mouseMove.style.transform = `translate(${e.clientX - 50}px, ${
    e.clientY - 75
  }px)`;
});
function openBlogDetails() {
  const btn1 = document.querySelector("#all-blogs-load-more");
  const btn2 = document.querySelector("#all-blogs-load-more img");
  btn1.addEventListener("click", function () {
    window.location.href = "../blog_details/blogDetails.html";
  });
  console.log(btn2);
  btn2.addEventListener("click", function () {
    window.location.href = "../blog_details/blogDetails.html";
  });
}
document.querySelector(".sidebar-btn").addEventListener("click", openSidebar);
