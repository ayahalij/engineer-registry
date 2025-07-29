const express = require('express')
const methodOverride = require('method-override')
const engineerRoutes = require('./controllers/engineerRoutes')
const jsxViewEngine = require('jsx-view-engine')
const morgan = require('morgan')

const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', jsxViewEngine())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(morgan('dev'))

app.use('/engineers', engineerRoutes)

app.get('/', (req, res) => {
  res.redirect('/engineers')
})

module.exports = app
