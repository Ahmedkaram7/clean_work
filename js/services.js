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

// hover on iamge services
let officeImage = document.querySelector(".office-image");
officeImage.addEventListener("mouseover", () => {
  officeImage.src = "images/services/person-taking-care-office.jpg";
});

officeImage.addEventListener("mouseleave", () => {
  officeImage.src = "images/services/people-taking-care-office-cleaning.jpg";
});

let kitchenImage = document.querySelector(".kitchen-image");
kitchenImage.addEventListener("mouseover", () => {
  kitchenImage.src = "images/services/woman-holding-rag-detergent-cleaning-cooker.jpg";
});
kitchenImage.addEventListener("mouseleave", () => {
  kitchenImage.src = "images/services/young-smiling-woman-wearing-rubber-gloves-cleaning-stove.jpg";
});

let carImage = document.querySelector(".car-image");
carImage.addEventListener("mouseover", () => {
  carImage.src = "images/services/man-polishing-car-inside.jpg";
});
carImage.addEventListener("mouseleave", () => {
  carImage.src = "images/services/man-polishing-car-inside-car-service.jpg";
});

let factoryImage = document.querySelector(".factory-image");
factoryImage.addEventListener("mouseover", () => {
  factoryImage.src = "images/services/close-up-mop-cleaning-industrial-plant-floor.jpg";
});
factoryImage.addEventListener("mouseleave", () => {
  factoryImage.src =
    "images/services/professional-industrial-cleaner-protective-uniform-cleaning-floor-food-processing-plant.jpg";
});
