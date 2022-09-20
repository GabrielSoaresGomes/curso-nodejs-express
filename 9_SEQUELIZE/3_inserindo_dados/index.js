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

app.get('/users/create', (req, res) => {
    res.render('addUser')
})

app.post('/users/create', async (req, res) => {
    let {name, occupation, newsletter} = req.body

    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    await User.create({name, occupation, newsletter})
    res.render('home')
})

app.get('/', (req, res) => {
    res.redirect('home')
})


const PORT = 3000


conn.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Aplicação rondando na porta ${PORT}`)
    })
}).catch(error => {
    console.log(error)
})
