import passportJWT from 'passport-jwt'

import config from '../config/index'
import User from '../module/auth/model'

const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

export const jwtOptions = {
  secretOrKey: config.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

export const jwt = new JwtStrategy(jwtOptions, (jwtPayload, done) => {
  console.log(jwtPayload)
  User.findById(jwtPayload.sub, (err, user) => {
    if (err) {
      return done(err, null)
    }

    if (user) {
      return done(null, user)
    } else {
      return done(null, false)
    }
  })
})
