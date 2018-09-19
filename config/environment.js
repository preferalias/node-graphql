import bodyParser from 'body-parser'
import cors from 'cors'
import config from './config'
import session from 'express-session'
import passportConfig from './passport'

export default (app, passport, db) => {

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(session(config.sessionOptions))
  app.use(cors(config.corsOptions))

  /* use passport */
  app.use(passport.initialize())
  app.use(passport.session())
  passportConfig(passport, db.user)

}