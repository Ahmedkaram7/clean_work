let drowpdown = document.querySelector("#downdrop p");
let drowpdownElement = document.querySelector(".heddin");
let span = document.querySelector(".heddin span");

drowpdown.addEventListener("click", () => {
  // console.log("test");
  if (drowpdownElement.style.display === "none") {
    drowpdownElement.style.display = "flex";
  } else {
    drowpdownElement.style.display = "none";
  }
});
