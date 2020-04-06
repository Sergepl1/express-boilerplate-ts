import express from 'express'
import authRouter from './module/auth/route'
import userRouter from './module/user/route'
import auth from './middlewares/authorization'

const router = express.Router()
router.get('/status', (req, res) => { res.send({status: 'OK'}) }) // api status

router.use('/auth', authRouter) // mount auth paths
router.use(auth())
router.use('/user', userRouter) // mount auth paths


export default router
