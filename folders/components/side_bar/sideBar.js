//open & close sideBar
function openSidebar() {
  document.getElementById("sidebar-container").style.width = "650px";
  document.getElementById("overlay").style.display = "block";
}
function closeSidebar() {
  document.getElementById("sidebar-container").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}

function openCloseSideBar() {
  const btn = document.querySelector(".sidebar-btn");
  btn.addEventListener("click", openSidebar);

  const overLay = document.querySelector("#overlay");
  overLay.addEventListener("click", closeSidebar);
}