function isEmailValid(email) {
  const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) //eslint-disable-line
  const isValidEmail = regex.test(email)

  if (isValidEmail) {
    return true
  }
  return false
}

function isPhoneValid(phoneNumber) {
  const regex = new RegExp(/^(00213|\+213|0)(5|6|7)[0-9]{8}$/) //eslint-disable-line
  const isValidDzPhone = regex.test(phoneNumber)

  if (isValidDzPhone) {
    return true
  }
  return false
}

module.exports = {
  isEmailValid,
  isPhoneValid,
}
