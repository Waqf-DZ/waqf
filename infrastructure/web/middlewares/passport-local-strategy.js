const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { signInUser, getUser } = require('../../../use-cases/index')
const { WRONG_CREDENTIALS } = require('../config/flash-messages')

const localStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    console.log('passport local strategy', { email, password })
    try {
      const user = await signInUser({ email, password })
      if (!user) {
        return done(null, false, { message: WRONG_CREDENTIALS })
      }
      return done(null, user)
    } catch (e) {
      done(e)
    }
  }
)

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await getUser({ id })
    done(null, user)
  } catch (e) {
    done(e)
  }
})

passport.use('local', localStrategy)

module.exports = passport
