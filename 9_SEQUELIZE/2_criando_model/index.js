const express = require('express')
const exphbs = require('express-handlebars')

const conn = require('./db/conn')
const User = require('./models/User')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})


const PORT = 3000


conn.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Aplicação rondando na porta ${PORT}`)
    })
}).catch(error => {
    console.log(error)
})
