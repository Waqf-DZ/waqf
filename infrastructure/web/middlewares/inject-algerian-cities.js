const algerianCitiesSystem = require('../utils/algerian-cities-system')

module.exports = function (req, res, next) {
  res.locals.wilayas = JSON.stringify(algerianCitiesSystem.wilayas)
  res.locals.cities = JSON.stringify(algerianCitiesSystem.cities)
  next()
}
