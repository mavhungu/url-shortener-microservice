<<<<<<< HEAD
require('dotenv').config()
require('./models/db')
const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 3000

const home = require('./router/home')
const timestampRouter =  require('./router/timestamp.router')
const timestampDateRouter = require('./router/timestampdateRouter')

app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'templates/views'))
hbs.registerPartials(path.join(__dirname,'templates/partials'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',home)
app.post('/api/shorturl', loggerMiddleware, postShorturlHandler)
app.get('/api/shorturl/:short_url', loggerMiddleware, getShorturlByCodeHandler)

app.get('*', (req, res) => {
  res.status(404).send('Not found');
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
=======
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const cors = require('cors')

const port = process.env.PORT || 3000

const app = express()

const home = require('./router/home')

app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'templates/partials'))
hbs.registerPartials(path.join(__dirname,'templates/partials'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',home)


app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
>>>>>>> 7271604d3a1b12c08f6c59294580be2bed13692c
})