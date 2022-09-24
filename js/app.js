const toggleButton = document.getElementById("contact");
const card = document.getElementById("card");
const collapsableCard = new bootstrap.Collapse(card, { toggle: false });
toggleButton.addEventListener("click", function () {
  collapsableCard.toggle();
});

console.log("Hi there! - Jasmine T. 💁");
