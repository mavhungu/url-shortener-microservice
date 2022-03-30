require('dotenv').config()
require('./models/db')
const express = require('express')
const logger = require('morgan')
const path = require('path')
const cors = require('cors')
const hbs = require('hbs')
const { json, urlencoded } = require('body-parser')
const loggerMiddleware = require('./middleware/loggerMiddleware')
const {getShorturlByCodeHandler, postShorturlHandler} = require('./controllers/shorturlController')
const home = require('./router/home')

const app = express()

const port = process.env.PORT || 3000



app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'templates/views'))
hbs.registerPartials(path.join(__dirname,'templates/partials'))

app.use(logger('dev'))
app.use(cors())
app.use(json())
app.use(urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))

/*app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});*/

app.use('/',home)
// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});
app.post('/api/shorturl', loggerMiddleware, postShorturlHandler);
app.get('/api/shorturl/:short_url', loggerMiddleware, getShorturlByCodeHandler)


app.get('*', (req, res) => {
  res.status(404).send('Not found');
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})