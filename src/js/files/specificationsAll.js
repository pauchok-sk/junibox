export default function specificationsAll() {
  const btnSpecifications = document.querySelector(".product-info__specifications-btn");
  const specifications = document.querySelector(".product-info__specifications");

  if (specifications) {
    btnSpecifications.addEventListener("click", () => {
      specifications.classList.remove("_hidden");
      btnSpecifications.remove();
    })
  }
}