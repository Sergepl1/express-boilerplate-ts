import passport from 'passport'
import bluebird from 'bluebird'

import User from '../module/auth/model'
import APIError from '../utils/APIError'
import httpStatus from 'http-status'

// handleJWT with roles
const handleJWT = (req, res, next, roles) => async (err, user, info) => {
  const error = err || info
  const logIn = bluebird.promisify(req.logIn)
  const apiError = new APIError(
    error ? error.message : 'Unauthorized',
    httpStatus.UNAUTHORIZED
  )

  // log user in
  try {
    if (error || !user) { throw error }
    await logIn(user, { session: false })
  } catch (e) {
    return next(apiError)
  }

  // see if user is authorized to do the action
  if (!roles.includes(user.role)) {
    return next(new APIError('Forbidden', httpStatus.FORBIDDEN))
  }

  req.user = user

  return next();
}

// exports the middleware
const authorize = (roles = User.roles) => (req, res, next) =>
  passport.authenticate(
    'jwt',
    { session: false },
    handleJWT(req, res, next, roles)
  )(req, res, next)

export default authorize