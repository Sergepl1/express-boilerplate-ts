import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'
import httpStatus from 'http-status'

import APIError from '../../utils/APIError'

const Schema = mongoose.Schema

const roles = [
  'user', 'admin'
]

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: Boolean,
    default: false
  },
  meta: {
    type: String,
    default: 'user',
    enum: roles
  }
}, {
  timestamps: true
})

userSchema.statics = {
    roles,

    async get() {

    },

    async getById(payload) {

    },

    async update(payload) {

    },

    async delete(payload) {

    },
}

export default mongoose.model('User', userSchema)
