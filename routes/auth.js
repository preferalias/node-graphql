import authController from '../controller/authController'

export default (app, passport) => {

  app.post('/signup', passport.authenticate('local-signup'), authController.signUp)

  app.post('/signin', passport.authenticate('local-signin', {
    failureRedirect: '/failureLogin'
  }) , authController.signIn)

  app.get('/failureLogin', authController.failureLogin)

  app.get('/checkAuthentication',
    authController.checkAuthentication,
    authController.resAuthentication
  )
}