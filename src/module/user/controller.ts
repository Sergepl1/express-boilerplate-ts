import User from './model'

export const get = async (req, res, next) => {
  try {
    const users = await User.get()
    return res.json({ message: 'OK', users })
  } catch (error) {
    next(error)
  }
}

export const getById = async (req, res, next) => {
    try {
        const user = await User.getById(req.query.id)
        return res.json({ message: 'OK', user })
    } catch (error) {
        next(error)
    }
}

export const update = async (req, res, next) => {
    try {
        const user = await User.update(req.query.id)
        return res.json({ message: 'OK', user })
    } catch (error) {
        next(error)
    }
}

export const delete = async (req, res, next) => {
    try {
        const user = await User.delete(req.query.id)
        return res.json({ message: 'OK', user })
    } catch (error) {
        next(error)
    }
}