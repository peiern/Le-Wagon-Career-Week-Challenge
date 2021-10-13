const url = 'https://teclead.de/recruiting/radios';
const stations = document.querySelector('.stations');

fetch(url)
.then(res => res.json())
.then((data) => {

  data.radios.forEach(radio => {
    const radioDetails = `
      <div class="image hide">
        <i class="fas fa-minus-circle"></i>
        <img src="${radio.image}">
        <i class="fas fa-plus-circle"></i>
      </div>
      <div class="radio">
        <p class="radio-name">${radio.name}</p>
        <p><strong>${radio.frequency} FM</strong></p>
      </div>`;
    stations.insertAdjacentHTML("beforeend", radioDetails);
  });

  // hide the rest
  // show footer of clicked radio (if same radio then show, else hide)

  const showDetails = (event) => {
    const allRadioImage = document.querySelectorAll(".image");
    allRadioImage.forEach((radioImage) => {
      radioImage.classList.add("hide");
    });

    const radioStation = event.currentTarget.previousElementSibling;
    radioStation.classList.remove("hide");

    const footerDetails = document.querySelector(".footer-details");
    footerDetails.classList.remove("hide");

    const footerStation = event.currentTarget.querySelector(".radio-name").innerText;
    const footerStationName = footerDetails.querySelector(".footer-radio-name");
    footerStationName.innerText = footerStation;
  };

  // addEventListener on click
  const allRadios = document.querySelectorAll(".radio");
    allRadios.forEach(radio => {
    radio.addEventListener("click", showDetails);
    });
});
