let store

axios.get('https://rickandmortyapi.com/api/location')
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
      <a href="./locationDetails.html?${e.id}" class="locations__card">
        <p class="locations__card-header-text">${e.name}</p>
        <p class="locations__card-text">${e.type}</p>
      </a>
    `
    });
  } else {
    res.data.results.forEach(e => {
      el.innerHTML += `
      <a href="./locationDetails.html?${e.id}" class="locations__card">
        <p class="locations__card-header-text">${e.name}</p>
        <p class="locations__card-text">${e.type}</p>
      </a>
    `
    });
  }
}

function filter() {
  let data = document.getElementById("filterName").value;
  console.log(data);
  axios.get(`https://rickandmortyapi.com/api/location/?name=${data}`)
    .then(res => store = res)
    .then(res => showOutput(res, "reset"))
}