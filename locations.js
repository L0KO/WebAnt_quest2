let store

axios.get('https://rickandmortyapi.com/api/location')
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

window.onload = function(){
  let modal = document.getElementById("myModal");

  let myBtn = document.getElementById("filters__advanced");

  var span = document.getElementsByClassName("close")[0];
  
  myBtn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }  
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};