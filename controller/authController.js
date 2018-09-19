import jwt from 'jsonwebtoken'

const signUp = (req, res) => {
  res.json({
    error: false,
    message: 'New user has been created'
  })
}

const signIn = (req, res) => {
  const user = {
    username: req.body.username
  }
  jwt.sign({user}, 'secretkey', { expiresIn: '12h' }, (err, token) => {
    res.json({
      error: false,
      isAuthenticated: true,
      token,
      message: 'Login success'
    })
  })

}

const failureLogin = (req, res) => {
  res.json({
    error: false, 
    isAuthenticated : false,
    message: "Unauthorize"
  })
}

const resAuthentication = (req, res ) => {
  res.json({
    error: false,
    isAuthenticated: true,
    authData: res.locals.authData,
    message: 'authen success'
  })
}

const verifyToken = (req) => {
  const bearerHeader = req.headers['authorization']
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    return bearerToken
  } else {
    return "" 
  }
}

const checkAuthentication = (req, res, next) => {
  const token = verifyToken(req)
  jwt.verify(token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403)
    } else {
      res.locals.authData = authData
      next()
    }
  })
}


export default {
  signIn,
  signUp,
  checkAuthentication,
  resAuthentication,
  verifyToken,
  failureLogin,
}