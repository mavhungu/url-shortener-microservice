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
})