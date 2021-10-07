const url = 'https://teclead.de/recruiting/radios';
const stations = document.querySelector('.stations');
const nowPlaying = document.querySelector('.now-playing');

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
      ${radio.name}
      <p><strong>${radio.frequency}</strong></p>
    </div>
    <div class="image">
      <i class="fas fa-minus-circle"></i>
      <img src="${radio.image}">
      <i class="fas fa-plus-circle"></i>
    </div>`;

    const playing = `
    <div class="footer">
      <h6>CURRENTLY PLAYING</h6>
      <p>${radio.name}</p>
    </div>`;
    stations.insertAdjacentHTML("beforeend", radioDetails);
    nowPlaying.insertAdjacentHTML("beforeend", playing);
  });
  // const selecting = document.querySelector('.radio');
  // onClickEvent(selecting);
});

// addEventListener on click
// on click, show image of clicked radio
// hide the rest
// show footer of clicked radio (if same radio then show, else hide)

// const onClickEvent =
//   selecting.addEventListener('click', (event) => {
//     const img = document.querySelector('.image')
//     if (event.currentTarget.innerHTML === selecting) {
//       img.classList.add('image');
//     } else {
//       img.classList.remove('image');
//     }
//     console.log('hello');


//   });