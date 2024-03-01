let store

axios.get('https://rickandmortyapi.com/api/character')
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
      <a href="./pages/characterDetails.html?${e.id}" class="characters__card">
        <img src="${e.image}" alt="" class="characters__card-img">
        <div class="characters__text-container">
          <div class="characters__header">${e.name}</div>
          <div class="characters__text">${e.species}</div>
        </div>
      </a>
    `
    });
  } else {
    res.data.results.forEach(e => {
      el.innerHTML += `
      <a href="./pages/characterDetails.html?${e.id}" class="characters__card">
        <img src="${e.image}" alt="" class="characters__card-img">
        <div class="characters__text-container">
          <div class="characters__header">${e.name}</div>
          <div class="characters__text">${e.species}</div>
        </div>
      </a>
    `
    });
  }
}

function filter() {
  let data = document.getElementById("filterName").value;
  console.log(data);
  axios.get(`https://rickandmortyapi.com/api/character/?name=${data}`)
    .then(res => store = res)
    .then(res => showOutput(res, "reset"))
}