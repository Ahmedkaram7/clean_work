let button = document.getElementById("bar");
let links = document.querySelector("#links");

links.style.maxHeight = "0px";

function showNav() {
  if (links.style.maxHeight === "0px") {
    links.style.maxHeight = "600px";
  } else {
    links.style.maxHeight = "0px";
  }
}
button.addEventListener("click", showNav);

// dropdown links
let buttonPageLink = document.getElementById("pages-btn");
let linksOfPages = document.getElementById("links-of-page ");

buttonPageLink.addEventListener("click", (event) => {
  linksOfPages.classList.toggle("show");
  event.stopPropagation();
});

window.addEventListener("click", () => {
  linksOfPages.classList.remove("show");
});
