let prevData = parent.document.URL.substring(parent.document.URL.indexOf('?') + 1);

axios.get(`https://rickandmortyapi.com/api/character/${prevData}`)
  .then(res => showOutput(res))

function showOutput(res) {
  let top = document.getElementById('top')
  top.innerHTML += `
      <img src="${res.data.image}" alt="" class="main__img">
      <h1 class="main__top-h1-text">${res.data.name}</h1>
      `
  let gender = document.getElementById('gender')
  gender.innerHTML += `
      <p class="main__info-li-sub-text">${res.data.gender}</p>
      `
  let status = document.getElementById('status')
  status.innerHTML += `
      <p class="main__info-li-sub-text">${res.data.status}</p>
      `
  let specie = document.getElementById('specie')
  specie.innerHTML += `
      <p class="main__info-li-sub-text">${res.data.species}</p>
      `
  let origin = document.getElementById('origin')
  origin.innerHTML += `
      <p class="main__info-li-sub-text">${res.data.origin.name}</p>
      `
  let type = document.getElementById('type')
  if (res.type == null || res.type === '' || res.type === undefined) {
    type.innerHTML += `
      <p class="main__info-li-sub-text">Unknown</p>
      `
  } else {
    type.innerHTML += `
      <p class="main__info-li-sub-text">${res.data.type}</p>
      `
  }
  let location = document.getElementById('location')
  location.innerHTML += `
      <a href="./locationDetails.html?${res.data.location.url.substring(res.data.location.url.length - 1)}">
      <div>
        <p class="main__info-li-main-text">Location</p>
        <p class="main__info-li-sub-text">${res.data.location.name}</p>
      </div>
      <img src="../img/characterDetails/navigation_chevron_right_24px.svg" alt="" class="main__location-arrow">
      </a>
      `
  let episodes = document.getElementById('episodes')
  res.data.episode.forEach(e => {
    if (res.data.episode.indexOf(e) < 4){
      axios.get(`${e}`)
      .then(res => {
        episodes.innerHTML +=`
        <li class="main__info-episodes-li">
          <a href="./episodeDetails.html?${res.data.id}">
            <div>
              <p class="main__info-li-main-text">${res.data.episode}</p>
              <p class="main__info-li-sub-text">${res.data.name}</p>
              <p class="main__info-li-date-text">${res.data.air_date}</p>
            </div>
            <img src="../img/characterDetails/navigation_chevron_right_24px.svg" alt="" class="main__location-arrow">
          </a>
        </li>
        `
      })
    }
  });
}