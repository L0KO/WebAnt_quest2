let store

axios.get('https://rickandmortyapi.com/api/episode')
  .then(res => store = res)
  .then(res => showOutput(res))
// .then(data => console.log(data))

document.addEventListener("click", function (e) {
  if (e.target.className == "characters__button") {
    // alert(`${store}`);
    axios.get(`${store.data.info.next}`)
      .then(res => store = res)
      .then(res => showOutput(res))
    // .then(data => console.log(data))
  }
});

function showOutput(res, type) {
  let el = document.getElementById('res')
  if (type == "reset") {
    el.innerHTML = ""
    res.data.results.forEach(e => {
      el.innerHTML += `
      <a href="./episodeDetails.html?${e.id}" class="episodes__card">
        <p class="locations__card-header-text">${e.name}</p>
        <p class="locations__card-text">${e.air_date}</p>
      </a>
    `
    });
  } else {
    res.data.results.forEach(e => {
      el.innerHTML += `
      <a href="./episodeDetails.html?${e.id}" class="episodes__card">
        <p class="locations__card-header-text">${e.name}</p>
        <p class="locations__card-text">${e.air_date}</p>
        <p class="locations__card-text_bold">${e.episode}</p>
      </a>
    `
    });
  }
}

function filter() {
  let data = document.getElementById("filterName").value;
  console.log(data);
  axios.get(`https://rickandmortyapi.com/api/episode/?name=${data}`)
    .then(res => store = res)
    .then(res => showOutput(res, "reset"))
}