export const slidePanel = () => {
  const leftSlidePanel = document.querySelector(".slide-panel--left");
  const scrollStack = document.querySelector("#scroll-stack");
  let lastY = 0

  const options = {
    root: null,
    rootMargin: "-30%",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const currentY = entry.boundingClientRect.y;

      leftSlidePanel.classList.toggle("show", entry.isIntersecting);

      if (!entry.isIntersecting) {
        if (currentY < lastY) {
          scrollStack.style.setProperty("opacity", 0);
        }
      } else {
        scrollStack.style.setProperty("opacity", 1);
      }

      lastY = currentY;
    });
  }, options);

  observer.observe(scrollStack);
};
