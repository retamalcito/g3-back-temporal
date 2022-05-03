const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.AUTH0_JWKSURI,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: [process.env.AUTH0_JWT_ALGORITHM],
})

const auth0 = {
  jwtCheck: jwtCheck,
}

module.exports = auth0
