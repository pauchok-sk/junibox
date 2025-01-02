export default function dropCatalog() {
  const catalogBtn = document.querySelector("#catalog-btn");
  const catalog = document.querySelector("#catalog");

  if (catalog) {
    catalogBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (catalog.classList.contains("_open")) {
        closeCatalog();
      } else {
        openCatalog();
      }
    })

    function openCatalog() {
      catalog.addEventListener("click", (e) => e.stopPropagation());
      catalog.classList.add("_open");
      document.body.classList.add("body-hidden");

      catalogBtn.classList.add("_active");
      document.addEventListener("click", closeCatalog)
    }
    function closeCatalog() {
      catalog.addEventListener("click", (e) => e.stopPropagation());
      catalog.classList.remove("_open");
      document.body.classList.remove("body-hidden");

      catalogBtn.classList.remove("_active");
      document.removeEventListener("click", closeCatalog)
    }
  }
}