import Joi from 'joi'

// User validation rules
export default {
  getById: {
    id: Joi.number().required()
  }
}
