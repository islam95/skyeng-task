const modal = document.querySelector("#modal");
const tariffs = document.querySelectorAll(".tariff__item");
const closeBtn = document.querySelector("#btn-close");
const image = modal.querySelector(".tariff__image");

tariffs &&
  tariffs.forEach(tariff => {
    tariff.addEventListener("click", function() {
      const deviceName = this.dataset.tariff; // get device name from html dataset
      if (image.classList.length > 1) {
        image.className = "tariff__image"; // removes extra classes
      }
      image.classList.add(`tariff__image--${deviceName}`);

      const { title, paragraph, amount } = getTariffData(this);

      modal.querySelector(".tariff__title").innerHTML = title;
      modal.querySelector(".tariff__paragraph").innerHTML = paragraph;
      modal.querySelector(".tariff__price--amount").innerHTML = amount;

      toggleModal(modal);
    });
  });

// Cross svg button to close the modal
closeBtn &&
  closeBtn.addEventListener("click", function() {
    toggleModal(modal);
  });

// Close the modal when clicked outside area of the modal
window.addEventListener("click", function(e) {
  if (e.target === modal) {
    toggleModal(modal);
  }
});

const getTariffData = tariff => {
  const title = tariff.querySelector(".tariff__title").textContent;
  const paragraph = tariff.querySelector(".tariff__paragraph").textContent;
  const amount = tariff.querySelector(".tariff__price--amount").textContent;
  return { title, paragraph, amount };
};

// Toggles the modal by using css selector
const toggleModal = element => {
  element.classList.toggle("toggle-modal");
};
