//open & close sideBar
function openSidebar() {
  document.getElementById("container-sidebar").style.width = "650px";
  document.getElementById("overlay").style.display = "block";
}
function closeSidebar() {
  document.getElementById("container-sidebar").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}