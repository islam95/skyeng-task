const modal = document.querySelector("#modal");
const tariffs = document.querySelectorAll(".tariff__item");
const closeBtn = document.querySelector("#btn-close");

tariffs.forEach(tariff => {
  tariff.addEventListener("click", function() {
    console.log(tariff);
    toggleModal(modal);
  });
});

// Cross svg button to close the modal
closeBtn.addEventListener("click", function() {
  toggleModal(modal);
});

// Close the modal when clicked outside area of the modal
window.addEventListener("click", function(e) {
  if (e.target === modal) {
    toggleModal(modal);
  }
});

// Toggles the modal by using css selector
function toggleModal(element) {
  return element.classList.toggle("toggle-modal");
}
