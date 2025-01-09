export default function sectionsToggle() {
  const btnOpen = document.querySelector("#sections-open");
  const sections = document.querySelector("#sections");

  if (sections) {
    btnOpen.addEventListener("click", (e) => {
      e.stopPropagation();

      sectionsOpen();
    })

    function sectionsOpen() {
      document.body.classList.add("body-hidden");
      sections.classList.add("_open");

      const sectionsBody = sections.querySelector(".sections__body");

      sectionsBody.addEventListener("click", (e) => e.stopPropagation());
      document.body.addEventListener("click", sectionsClose);
    }

    function sectionsClose() {
      document.body.classList.remove("body-hidden");
      sections.classList.remove("_open");

      document.body.removeEventListener("click", sectionsClose);
    }
  }
}