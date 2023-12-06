export default function menuHamburger() {
  const btnMobile = document.querySelector('[data-btn="mobile"]');

  function toggleMenu(event) {
    if (event.type === "touchstart") {
      event.preventDefault();
    }
    const nav = document.querySelector("nav");
    nav.classList.toggle(btnMobile.dataset.btn);
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
}
