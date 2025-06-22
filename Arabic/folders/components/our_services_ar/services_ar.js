fetch("folders/components/header_ar/header_ar.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#header-services").innerHTML = data;
    coloringIconsGray2Black();

    //open side bar
    document
      .querySelector("#services-container")
      .querySelector(".sidebar-btn")
      .addEventListener("click", openSidebar);
  });

fetch("folders/rotating_text_ar/rotatingText_ar.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#rotating-text-top").innerHTML = data;
  });

fetch("folders/rotating_text_ar/rotatingText_ar.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#rotating-text-bottom").innerHTML = data;
  });

/* const serMouse = document.querySelectorAll(".mouse-services");
const cutArea = document.querySelectorAll(".cut-corner");
serMouse.forEach((el, i) => {
  el.addEventListener("mouseenter", () => {
    cutArea[i].style.visibility = "visible";
  });
  el.addEventListener("mouseleave", () => {
    cutArea[i].style.visibility = "hidden";
  });
}); */
const services = [
  "newsServices",
  "voicerServices",
  "digitalMarketing-platformMangement",
  "webDevelopment",
  "motionGraphic-videoProduction",
  "visualIdentity",
];

/*   const cutArea = document.querySelector(".newsServices .cut-corner");
cutArea.addEventListener("click", () => {
  serviceValue.value = "newsServices";
  console.log(serviceValue.value);
  openRequestService();
}) */
services.forEach((ser) => {
  const cutArea = document.querySelector(`.${ser} .cut-corner`);
  
  cutArea.addEventListener("click", () => {
    if(ser === "newsServices"){
      serviceValue.value = "newsServices";
      updateserviceImage();
      openRequestService();
    } else if (ser === "voicerServices"){
      serviceValue.value = "voicerServices";
      updateserviceImage();
      openRequestService();
    }
     else if (ser === "digitalMarketing-platformMangement") {
      serviceValue.value = "digitalMarketing-platformMangement";
      updateserviceImage();
      openRequestService();
    }
     else if (ser === "webDevelopment"){
      serviceValue.value = "webDevelopment";
      updateserviceImage();
      openRequestService();
    }
     else if (ser === "motionGraphic-videoProduction"){
      serviceValue.value = "motionGraphic-videoProduction";
      updateserviceImage();
      openRequestService();
    }
     else if (ser === "visualIdentity"){
      serviceValue.value = "visualIdentity";
      updateserviceImage();
      openRequestService();
    }
  });
});
