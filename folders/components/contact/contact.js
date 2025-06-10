fetch("folders/components/header/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("contact-header").innerHTML = data;

    let logo = document
      .querySelector("#contact-header")
      .querySelector(".logo-header");
    logo.src = "folders/images/peackok-logo-black.svg";

    let icons = document
      .querySelector("#contact-header")
      .querySelectorAll(".icon");

    icons.forEach((icon) => {
      icon.src = icon.getAttribute("black");
    });

    document
      .getElementById("contact-header")
      .querySelector(".sidebar-btn")
      .addEventListener("click", openSidebar);

    coloringIconsBlack2white();
    
  });

fetch("folders/rotating_text/rotatingText.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#contact-rotate-text").innerHTML = data;
  });


  const selected = document.querySelector(".selected-option");
  const optionsContainer = document.querySelector(".options");
  const options = document.querySelectorAll(".option");
  const sel = document.querySelector("#selection-arrow");
  const hiddenInput = document.getElementById("country-code");

  selected.addEventListener("click", () => {
    optionsContainer.style.display =
      optionsContainer.style.display === "block" ? "none" : "block";
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerHTML = option.innerHTML;
      hiddenInput.value = option.dataset.value;
      optionsContainer.style.display = "none";
    });
  });
   sel.addEventListener("click", () => {
    optionsContainer.style.display =
      optionsContainer.style.display === "block" ? "none" : "block";
    });

  document.addEventListener("click", (e) => {
    if (!document.getElementById("countrySelect").contains(e.target)) {
      optionsContainer.style.display = "none";
    }
  });



  document.querySelector("#contact-boxes form").onsubmit = function (e) {
    let email = document.querySelector("#email-input");
    let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let validation = emailReg.test(email.value);
    if (validation === false) {
      e.preventDefault(); 
    alert("Please enter a valid email address.");
    }
  };

