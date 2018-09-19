import express from 'express'
import environment from './config/environment'
import routes from './config/routes'
import connection from './config/connection'
import graphql from './config/graphql'
import {} from 'dotenv/config' 
import db from './database'
import passport from 'passport'

const app = express()
const port = process.env.PORT || 5000

environment(app, passport, db)
connection(app, db)
routes(app, passport)
graphql(app, db)


app.listen(port, () => {
  console.log(`running on port ${port}..`)
})