const express = require('express')
const path = require('path')
const hbs = require('hbs')
const cors = require('cors')

const port = process.env.PORT || 3000

const app = express()




app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})