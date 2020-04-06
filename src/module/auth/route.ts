import express = require('express')
import validator from 'express-validation'

import authController from './controller'
import { create } from './validation'

const router = express.Router()
router.post('/register', validator(create), authController.register) // validate and register
router.post('/login', authController.login) // login
router.get('/confirm', authController.confirm)

export default router
