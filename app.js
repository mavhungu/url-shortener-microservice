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
})