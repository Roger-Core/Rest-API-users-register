const express = require('express')
const path = require('path')
const colors = require('colors')

//Initialization
const app = express()

//Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Routes
app.use(require('./routes/users'))

//Start Server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000 '.red, app.get('port'))
})