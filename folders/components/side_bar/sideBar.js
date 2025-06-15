coloringIconsGray2Black();

const sidebarBtn = document.querySelector("#request-btn-sidebar");
sidebarBtn.addEventListener("click", openRequestService);
sidebarBtn.addEventListener("click", closeSidebar);


//لازم تراجعها ضروري جدا جد جدا جدا جدا
const sectionMap = {
    home: 'home-container',
    aboutUs: 'about-us-container',
    services: 'services-container',
    workUs: 'works-container',
    blogs: 'blog-agency-container',
    partners: 'partners-container',
    contactUs: 'contact-us-container'
  };

  const links = document.querySelectorAll('#list-sidebar a');

  function onScroll() {
    let currentSection = null;
    let scrollTop = window.scrollY;

    for (let [key, id] of Object.entries(sectionMap)) {
      const section = document.getElementById(id);
      const offset = section.offsetTop;

      if (scrollTop >= offset - 150) {
        currentSection = key;
      }
    }

    if (currentSection) {
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('load', onScroll);