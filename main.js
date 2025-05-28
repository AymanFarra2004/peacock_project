//header style
document.addEventListener("DOMContentLoaded", function () {
  const cssId = "headerStyle-css";
  if (!document.getElementById(cssId)) {
    const headerLink = document.createElement("link");
    headerLink.id = cssId;
    headerLink.rel = "stylesheet";
    headerLink.href = "folders/components/header/headerStyle.css";
    document.head.appendChild(headerLink);
  }
});

//sideBar style
const sideBarCssId = "sidebar-css";
if (!document.getElementById(sideBarCssId)) {
  const sidebarLink = document.createElement("link");
  sidebarLink.id = sideBarCssId;
  sidebarLink.rel = "stylesheet";
  sidebarLink.href = "folders/components/side_bar/sideBarStyle.css";
  document.head.appendChild(sidebarLink);
}

//sideBar
fetch("folders/components/side_bar/sideBar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("sidebar-container").innerHTML = data;
    //coloring social media sideBar icons
    coloringIconsGray2Black();
  });

//open & close sideBar
function openSidebar() {
  document.getElementById("container-sidebar").style.width = "519px";
  document.getElementById("overlay").style.display = "block";
}
function closeSidebar() {
  document.getElementById("container-sidebar").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}

//home style
const homeStyleCSSId = "home-css";
if (!document.getElementById(homeStyleCSSId)) {
  const homeLink = document.createElement("link");
  homeLink.id = homeStyleCSSId;
  homeLink.rel = "stylesheet";
  homeLink.href = "folders/components/home/homeStyle.css";
  document.head.appendChild(homeLink);
}

//home
fetch("folders/components/home/home.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("home-container").innerHTML = data;
  });

//mouse wrap
const mouseMove = document.getElementById("mouse");
document.addEventListener("mousemove", (e) => {
  mouseMove.style.transform = `translate(${e.clientX - 65}px, ${
    e.clientY - 90
  }px)`;
});

//about us Style
const aboutusStyleCSSId = "aboutus-css";
if (!document.getElementById(aboutusStyleCSSId)) {
  const homeLink = document.createElement("link");
  homeLink.id = aboutusStyleCSSId;
  homeLink.rel = "stylesheet";
  homeLink.href = "folders/components/about_Us/aboutUsStyle.css";
  document.head.appendChild(homeLink);
}

//about US
fetch("folders/components/about_Us/aboutUs.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("about-us-container").innerHTML = data;

    arrowsAnimation();
    loctionAnimation();
    setInterval(loctionAnimation, 10000);
  });
