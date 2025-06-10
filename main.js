console.log(window.innerWidth);

//sideBar
fetch("folders/components/side_bar/sideBar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("sidebar-container").innerHTML = data;
    
    
    const sidebarjsId = "sidebarScript-js";
    if (!document.getElementById(sidebarjsId)) {
      const sidebarScirpt = document.createElement("script");
      sidebarScirpt.id = sidebarjsId;
      sidebarScirpt.src = "folders/components/side_bar/sideBar.js";
      document.head.appendChild(sidebarScirpt);
    }
  });


const headerjsId = "headerScript-js";
if (!document.getElementById(headerjsId)) {
  const headerScirpt = document.createElement("script");
  headerScirpt.id = headerjsId;
  headerScirpt.src = "folders/components/header/header.js";
  document.head.appendChild(headerScirpt);
}

//request service
fetch("folders/components/request_service/requestService.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("requestService-container").innerHTML = data;

    const requestjsId = "requestScript-js";
    if (!document.getElementById(requestjsId)) {
      const requestScirpt = document.createElement("script");
      requestScirpt.id = requestjsId;
      requestScirpt.src = "folders/components/request_service/request.js";
      document.head.appendChild(requestScirpt);
      console.log("hhhh");
    }
  });

//home
fetch("folders/components/home/home.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("home-container").innerHTML = data;
    
    
    const homejsId = "homeScript-js";
    if (!document.getElementById(homejsId)) {
      const homeScirpt = document.createElement("script");
      homeScirpt.id = homejsId;
      homeScirpt.src = "folders/components/home/home.js";
      document.head.appendChild(homeScirpt);
    }
  });

//mouse wrap
const mouseMove = document.getElementById("mouse");
document.addEventListener("mousemove", (e) => {
  mouseMove.style.transform = `translate(${e.clientX - 50}px, ${
    e.clientY - 75
  }px)`;
});

//about US
fetch("folders/components/about_Us/aboutUs.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("about-us-container").innerHTML = data;
    
    
    const aboutjsId = "aboutScript-js";
    if (!document.getElementById(aboutjsId)) {
      const aboutScirpt = document.createElement("script");
      aboutScirpt.id = aboutjsId;
      aboutScirpt.src = "folders/components/about_Us/aboutUs.js";
      document.head.appendChild(aboutScirpt);
    }
  });

//services
fetch("folders/components/our_services/services.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#services-container").innerHTML = data;
    
    
    const servicesjsId = "servicesScript-js";
    if (!document.getElementById(servicesjsId)) {
      const servicesScirpt = document.createElement("script");
      servicesScirpt.id = servicesjsId;
      servicesScirpt.src = "folders/components/our_services/services.js";
      document.head.appendChild(servicesScirpt);
    }
  });

//imprtatnt works page
fetch("folders/components/important_Works/importantWorks.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("works-container").innerHTML = data;

    //coloring social media sideBar icons
    
    
    const catejsId = "cateScript-js";
    if (!document.getElementById(catejsId)) {
      const cateScirpt = document.createElement("script");
      cateScirpt.id = catejsId;
      cateScirpt.src = "folders/components/important_Works/importantWorks.js";
      document.head.appendChild(cateScirpt);
    }
  });

//blog Agency page
fetch("folders/components/blog_Agency/blog.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("blog-agency-container").innerHTML = data;

    
    const blogjsId = "blogScript-js";
    if (!document.getElementById(blogjsId)) {
      const blogScirpt = document.createElement("script");
      blogScirpt.id = blogjsId;
      blogScirpt.src = "folders/components/blog_Agency/blog.js";
      document.head.appendChild(blogScirpt);
    }
  });

//partners page
fetch("folders/components/partners/partners.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("partners-container").innerHTML = data;


    const partnersjsId = "partnersScript-js";
    if (!document.getElementById(partnersjsId)) {
      const partnersScirpt = document.createElement("script");
      partnersScirpt.id = partnersjsId;
      partnersScirpt.src = "folders/components/partners/partners.js";
      document.head.appendChild(partnersScirpt);
    }
  });

//said about us page
fetch("folders/components/said_aboutUs/saidAboutUs.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("said-aboutUs-container").innerHTML = data;
    
    const saidjsId = "saidScript-js";
    if (!document.getElementById(saidjsId)) {
      const saidScirpt = document.createElement("script");
      saidScirpt.id = saidjsId;
      saidScirpt.src = "folders/components/said_aboutUs/saidAboutUs.js";
      document.head.appendChild(saidScirpt);
    }
  });

//contact us page
fetch("folders/components/contact/contact.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("contact-us-container").innerHTML = data;

    
    const contactjsId = "contactScript-js";
    if (!document.getElementById(contactjsId)) {
      const contactScirpt = document.createElement("script");
      contactScirpt.id = contactjsId;
      contactScirpt.src = "folders/components/contact/contact.js";
      document.head.appendChild(contactScirpt);
    }
  });
