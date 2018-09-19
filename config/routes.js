import products from '../routes/products'
import auth from '../routes/auth'

export default (app, passport) => {
  /* root */
  app.get('/' , (req, res) => {
    res.send("Hello World!!")
  })

  app.use('/api', products)
  auth(app, passport)
}