import httpStatus from 'http-status'

// hanlde not found error
export const handleNotFound = (req, res, next) => {
  res.status(httpStatus.NOT_FOUND)
  res.json({
    'message': 'Requested resource not found'
  })
  res.end()
}

// handle errors
export const handleError = (err, req, res, next) => {
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR)
  res.json({
    message: err.message,
    extra: err.extra,
    errors: err
  })
  res.end()
}
