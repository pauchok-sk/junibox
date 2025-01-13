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

      const checkedRadioIndex =
        Array.from(radios).findIndex((item) => item.checked === true) + 1;
      const offset = radios.length === 4 ? 12.5 : 16.5;

      if (checkedRadioIndex > 0) {
        const percent = checkedRadioIndex * (100 / radios.length);

        currentSlider.style.left = `${percent - offset}%`;
      } else {
        radios[0].checked = true;
        currentSlider.style.left = `${range.value}%`;
      }

      range.addEventListener("input", (e) => {
        const value = +e.target.value;
        currentSlider.style.left = `${value}%`;
      });

      range.addEventListener("change", (e) => {
        const value = +e.target.value;

        if (radios.length === 4) {
          if (value <= 25) {
            radios[0].checked = true;
            offsetSliderChange(offset);
          } else if (value <= 50) {
            radios[1].checked = true;
            offsetSliderChange(50 - offset);
          } else if (value <= 75) {
            radios[2].checked = true;
            offsetSliderChange(75 - offset);
          } else if (value <= 100) {
            radios[3].checked = true;
            offsetSliderChange(100 - offset);
          }
        } else if (radios.length === 3) {
          if (value <= 33) {
            radios[0].checked = true;
            offsetSliderChange(offset);
          } else if (value <= 66) {
            radios[1].checked = true;
            offsetSliderChange(66 - offset);
          } else if (value > 66) {
            radios[2].checked = true;
            offsetSliderChange(99 - offset);
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
