import express from 'express';
import { Request, Response } from 'express';

import config from './config/index'
import  cors from 'cors'
import bodyParser  from 'body-parser'
import errorHandler from '../middlewares/error-handler'
import apiRouter from './routes'
import passport  from 'passport'
import passportJwt from '../services/passport'

const app = express()
app.use(bodyParser.json())
app.use(cors())

// passport
app.use(passport.initialize())
passport.use('jwt', passportJwt.jwt)

app.use('/api', apiRouter)
app.use(errorHandler.handleNotFound)
app.use(errorHandler.handleError)


export default app;
