const wilayaInput = document.querySelector('[data-wilaya-input]')
const cityInput = document.querySelector('[data-city-input]')
const wilayas = window.WILAYAS
const cities = window.CITIES

function renderWilayas({ wilayaInput, wilayas }) {
  wilayaInput.innerHTML = wilayas
    .map((w) => `<option value="${w.name}">${w.name}</option>`)
    .join('')
}

function renderCities({ cityInput, cities }) {
  cityInput.innerHTML = cities
    .map((c) => `<option value="${c.name}">${c.name}</option>`)
    .join('')
}

function getCitiesByWilayaName(wilayaName) {
  const selectedWilaya = wilayas.find((w) => w.name == wilayaName)
  return cities.filter((c) => Number(c.wilayaId) == Number(selectedWilaya.id))
}

if (wilayaInput && cityInput && wilayas && cities) {
  renderWilayas({ wilayaInput, wilayas })
  wilayaInput.addEventListener('input', (e) => {
    const cities = getCitiesByWilayaName(e.target.value)
    renderCities({ cityInput, cities })
  })
}
