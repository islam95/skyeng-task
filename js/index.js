const modal = document.getElementById("modal");
const tariff = document.querySelector(".tariff__item");
const closeBtn = document.getElementById("btn-close");

tariff.onclick = function() {
  modal.style.display = "block";
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}