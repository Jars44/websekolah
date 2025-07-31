document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".jurusan-carousel");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (carousel && prevBtn && nextBtn) {
    const card = carousel.querySelector(".jurusan-card");
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

  const menuBtn = document.querySelector(".btn-menu");
  const closeBtn = document.querySelector(".menu-close-btn");
  const menuOverlay = document.querySelector(".menu-overlay");

  if (menuBtn && menuOverlay && closeBtn) {
    menuBtn.addEventListener("click", () => {
      menuOverlay.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
      menuOverlay.classList.remove("open");
    });
  }
});
