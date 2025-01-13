export default function ranges() {
  const ranges = document.querySelectorAll(".selection-simple__range");

  if (ranges.length) {
    ranges.forEach((range) => {
      const currentSlider = range
        .closest(".selection-simple__wrapper-range")
        .querySelector(".selection-simple__slider");
      const radios = range
        .closest(".selection-simple__wrapper-range")
        .querySelectorAll(".selection-simple__input-radio");

      radios[0].checked = true;

      currentSlider.style.left = `${range.value}%`;

      range.addEventListener("input", (e) => {
        const value = +e.target.value;
        currentSlider.style.left = `${value}%`;
      });

      range.addEventListener("change", (e) => {
        const value = +e.target.value;

        if (radios.length === 4) {
          if (value <= 25) {
            radios[0].checked = true;
            offsetSliderChange(25 / 2);
          } else if (value <= 50) {
            radios[1].checked = true;
            offsetSliderChange(50 - 25 / 2);
          } else if (value <= 75) {
            radios[2].checked = true;
            offsetSliderChange(75 - 25 / 2);
          } else if (value <= 100) {
            radios[3].checked = true;
            offsetSliderChange(100 - 25 / 2);
          }
        }
      });

      function offsetSliderChange(value) {
        currentSlider.style.left = `${value}%`;
        range.value = value;
      }
    });
  }
}
