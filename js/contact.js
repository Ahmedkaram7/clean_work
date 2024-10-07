let downdrop = document.getElementById("downdrop");
const selectBtn = document.querySelector(".select-btn");
const sBtnText = document.querySelector(".sBtn-text");
const options = document.querySelectorAll(".options li");

selectBtn.addEventListener("click", () => {
  downdrop.classList.toggle("actives");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectSpanValue = option.querySelector(".option-text").textContent;
    sBtnText.innerText = selectSpanValue;
    downdrop.classList.remove("actives");
  });
});
