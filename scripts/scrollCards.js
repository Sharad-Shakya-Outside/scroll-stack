export const scrollCards = () => {
  const accordion = document.querySelector(".accordion");
  const accordionItem = accordion.querySelectorAll(".accordion__item");
  const scrollStackCards = document.querySelector(".scroll-stack__cards");
  let activeItem = 0;

  window.addEventListener("scroll", collapseStateChange);

  function collapseStateChange() {
    let scrollStackCardsArea = scrollStackCards.getBoundingClientRect();
    let scrollStackArea = document.querySelector('.scroll-stack').getBoundingClientRect();

    if (scrollStackCardsArea.y === 48) {
      if (Math.abs(scrollStackArea.y) <= (scrollStackCardsArea.height + scrollStackCardsArea.y + 100)) {
        activeItem = 0;
      } else if (Math.abs(scrollStackArea.y) <= (scrollStackCardsArea.height + scrollStackCardsArea.y + 500)) {
        activeItem = 1;
      } else if (Math.abs(scrollStackArea.y) <= (scrollStackCardsArea.height + scrollStackCardsArea.y + 800)) {
        activeItem = 2;
      }

      accordionItem.forEach((item, index) => {
        if (index === activeItem) {
          item.setAttribute("collapse", "active");
        } else {
          item.setAttribute("collapse", "inactive")
        }
      })
    }
  }
};
