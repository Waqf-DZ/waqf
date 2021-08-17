const rawWilayas = require('./dz_cities.json')
const rawCities = require('./dz_com.json')

const wilayas = rawWilayas.map((w) => {
  return {
    id: w.w_code,
    name: w.ar_name,
  }
})

const cities = rawCities.map((c) => {
  return {
    wilayaId: c.cw_id,
    name: c.com_name,
  }
})
module.exports = Object.freeze({
  wilayas,
  cities,
  getCitiesByWilayaId(wilayaId) {
    return cities.filter((c) => c.wilayaId == wilayaId)
  },
})
