export default function sectionCard() {
  const buttonsOpen = document.querySelectorAll(".section-card__search-btn");
  const sections = document.querySelectorAll(".section-card");

  if (sections.length && window.matchMedia("(max-width:479px)").matches) {
    sections.forEach((section) => {
      const currentBtn = section.querySelector(".section-card__search-btn");
      const currentBody = section.querySelector(".section-card__body");

      const maxHeight =
        currentBody.clientHeight > 480 ? currentBody.clientHeight : 480;

      currentBody.style.height = "220px";

      currentBtn.addEventListener("click", () => {
        currentBody.style.height = `${maxHeight}px`;
        currentBtn.remove();
      })
    });
  }
}
