require('dotenv').config()
const db = require('./db/models/index')
const app = require('./app')

async function main() {
  try {
    await db.sequelize.authenticate()
    // eslint-disable-next-line no-console
    console.log('Connection to the database has been established successfully.')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', error)
  }

  app.listen(process.env.PORT)
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${process.env.PORT}.`)
}

main()
