let store

axios.get('https://rickandmortyapi.com/api/episode')
  .then(res => store = res)
  .then(res => showOutput(res))

document.addEventListener("click", function (e) {
  if (e.target.className == "characters__button") {
    axios.get(`${store.data.info.next}`)
      .then(res => store = res)
      .then(res => showOutput(res))
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

function dropList() {
  let x = document.getElementById("header__popup");
  let y = document.getElementById("body");

  if (x.className === "header__popup") {
    x.className += " responsive";
    y.className += " responsive";
    x.innerHTML = `
    <ol class="header__popup-ol">
      <li class="header__popup-li"><a href="../index.html" class="header__element">Characters</a></li>
      <li class="header__popup-li"><a href="./locations.html" class="header__element">Locations</a></li>
      <li class="header__popup-li"><a href="./episodes.html" class="header__element">Episodes</a></li>
    </ol>
    `
  } else {
    x.className = "header__popup"
    y.className = "body"
    x.innerHTML = ``
  }
}