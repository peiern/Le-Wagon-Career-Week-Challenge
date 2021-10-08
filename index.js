const url = 'https://teclead.de/recruiting/radios';
const stations = document.querySelector('.stations');

fetch(url)
.then(res => res.json())
.then((data) => {

  data.radios.map(radio => {
    // <--- array [0] --->
    // radioName = data.radios[0].name;
    // radioFrequency = data.radios[0].frequency;
    // radioImage = data.radios[0].image;

    // const radioOneDetails = document.querySelector('#station-1');
    // radioOneDetails.innerHTML = `${radioName} <strong>${radioFrequency}</strong>`;

    const radioDetails = `
    <div class="radio">
      <div class="image hide">
        <i class="fas fa-minus-circle"></i>
        <img src="${radio.image}">
        <i class="fas fa-plus-circle"></i>
      </div>
      ${radio.name}
      <p><strong>${radio.frequency} FM</strong></p>
    </div>`;
    stations.insertAdjacentHTML("beforeend", radioDetails);
  });

  // addEventListener on click
  // on click, show image of clicked radio
  // hide the rest
  // show footer of clicked radio (if same radio then show, else hide)

  const radioStations = Array.from(document.querySelectorAll(".radio"));

  const resetImg = () => {
    radioStations.forEach(radioStation => {
      const img = radioStation.querySelector(".image");
      img.classList.add("hide");
    })
  };

  radioStations.forEach(radioStation => {
    radioStation.addEventListener("click", (event) => {

      resetImg()
      const img = radioStation.querySelector(".image");
      img.classList.remove("hide");

      const footerStation = document.querySelector(".footer p");
      footerStation.innerHTML =  `${radio.name}`;

      // get the current station
      // const currentStation = "test"

      // // update html in footer
      // footerStation.innerHTML = currentStation
    });
  })

});
