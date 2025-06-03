document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in, .fade-in-delayed");
  fadeElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, i * 400);
  });
});
