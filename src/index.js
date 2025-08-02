document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".jurusan-carousel");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (carousel && prevBtn && nextBtn) {
    const card = carousel.querySelector(".jurusan-card");
    if (card) {
      const cardStyle = window.getComputedStyle(card);
      const cardMargin = parseFloat(cardStyle.marginRight) || 25;
      const scrollAmount = card.offsetWidth + cardMargin;

      nextBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });

      prevBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    }
  }

  const menuBtn = document.querySelector(".btn-menu");
  const closeBtn = document.querySelector(".menu-close-btn");
  const menuOverlay = document.querySelector(".menu-overlay");
  const submenuItems = document.querySelectorAll(".menu-links .has-submenu");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      if (menuOverlay) menuOverlay.classList.add("open");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      if (menuOverlay) menuOverlay.classList.remove("open");
      submenuItems.forEach((item) => {
        item.classList.remove("active");
        const submenu = item.querySelector(".submenu");
        if (submenu) submenu.classList.remove("open");
      });
    });
  }

  submenuItems.forEach((item) => {
    const triggerLink = item.querySelector("a");
    const submenu = item.querySelector(".submenu");

    if (triggerLink && submenu) {
      triggerLink.addEventListener("click", function (event) {
        event.preventDefault();

        const isAlreadyActive = item.classList.contains("active");

        submenuItems.forEach((otherItem) => {
          otherItem.classList.remove("active");
          otherItem.querySelector(".submenu").classList.remove("open");
        });

        if (!isAlreadyActive) {
          item.classList.add("active");
          submenu.classList.add("open");
        }
      });
    }
  });

  const videoWrapper = document.querySelector(".video-wrapper");

  if (videoWrapper) {
    const playButton = videoWrapper.querySelector(".play-button");
    const iframe = videoWrapper.querySelector("iframe");

    playButton.addEventListener("click", function () {
      videoWrapper.classList.add("video-playing");

      let currentSrc = iframe.getAttribute("src");
      if (currentSrc.includes("?")) {
        iframe.setAttribute("src", currentSrc + "&autoplay=1");
      } else {
        iframe.setAttribute("src", currentSrc + "?autoplay=1");
      }
    });
  }
  
  const navbar = document.querySelector(".navbar");
  const heroSection = document.getElementById("hero-section");
  
  if (navbar && heroSection) {
    const heroHeight = heroSection.offsetHeight;
    
    window.addEventListener("scroll", function () {
      if (window.scrollY > heroHeight) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });
  }
});
