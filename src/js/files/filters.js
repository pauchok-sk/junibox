export default function filtres() {
  const btn = document.querySelector("#filters-btn");
  const filtres = document.querySelector("#filters");
  const filtresClose = document.querySelector("#filters-close");

  if (filtres) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      handleOpen();
    });

    filtresClose.addEventListener("click", (e) => {
      e.stopPropagation();

      handleClose();
    });

    function handleOpen() {
      filtres.classList.add("_open");
      document.body.classList.add("body-hidden");

      filtres.addEventListener("click", (e) => e.stopPropagation());

      document.body.addEventListener("click", handleClose);
    }

    function handleClose() {
      filtres.classList.remove("_open");
      document.body.classList.remove("body-hidden");

      document.body.removeEventListener("click", handleClose);
    }
  }
}
