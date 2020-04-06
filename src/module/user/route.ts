import express = require('express')
import validator from 'express-validation'

import controller from './controller'
import { getById } from './validation'

const router = express.Router()
router.get('/', controller.get)
router.get('/:id$', validator(getById), controller.getById)
router.put('/:id$', validator(getById), controller.update)
router.delete('/:id$', validator(getById), controller.delete)

export default router
