export default function more() {
  const moreParents = document.querySelectorAll(".parent-more");

  if (moreParents.length) {
    moreParents.forEach(p => {
      const parentItems = p.querySelector("[data-more]");
      const items = parentItems.children;
      const btn = p.querySelector("[data-more-btn]");

      let numberShow = +parentItems.dataset.more
      const media = parentItems.dataset.moreMedia;
      const step = +parentItems.dataset.moreStep;
      
      if (window.matchMedia(`(max-width: ${media}px)`).matches) {
        Array.from(items).slice(numberShow).forEach(item => item.style.display = "none");
        
        numberShow += step;

        btn.addEventListener("click", () => {
          Array.from(items).slice(0,numberShow).forEach(item => item.style.display = "block");
          if (numberShow >= items.length) btn.remove();
          numberShow += step;
        })
      }
    })
  }
}