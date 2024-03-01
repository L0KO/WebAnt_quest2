let prevData = parent.document.URL.substring(parent.document.URL.indexOf('?') + 1);

axios.get(`https://rickandmortyapi.com/api/location/${prevData}`)
  .then(res => showOutput(res))

function showOutput(res) {
  let top = document.getElementById('top')
  top.innerHTML += `
      <h1 class="main__top-h1-text location__top-h1-text">${res.data.name}</h1>
      <div class="main-location__top-row-container">
        <div>
          <p class="main-location__top-text_bold">Type</p>
          <p class="main-location__top-text_grey">${res.data.type}</p>
        </div>
        <div>
          <p class="main-location__top-text_bold">Dimention</p>
          <p class="main-location__top-text_grey">${res.data.dimension}</p>
        </div>
      </div>
      `
  let bottom = document.getElementById('bottom')
  res.data.residents.forEach(e => {
    axios.get(`${e}`)
    .then(res =>{
      bottom.innerHTML += `
      <a href="./characterDetails.html?${res.data.id}" class="characters__card">
        <img src="${res.data.image}" alt="" class="characters__card-img">
        <div class="characters__text-container">
          <div class="characters__header">${res.data.name}</div>
          <div class="characters__text">${res.data.species}</div>
        </div>
      </a>
      `
    })
  });
}