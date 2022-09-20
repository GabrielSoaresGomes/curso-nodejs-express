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

app.get('/users/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({raw: true, where: {id: id} })

    res.render('userView', {user})
})

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({raw: true, where: {id: id}})

    res.render('userEdit', {user})
})

app.post('/users/update', async (req, res) => {
    let {id, name, occupation, newsletter} = req.body

    newsletter = newsletter === "on" // Verify is newsletter is equal a on, if is, the value is true else is false
    const userData = {
        id, name,occupation, newsletter
    }
    await User.update(userData, {where: {id:id}})

    res.redirect('/')
})

app.get('/', async (req, res) => {
    const users = await User.findAll({raw: true})
    res.render('home', {users})
})

app.post('/users/create', async (req, res) => {
    let {name, occupation, newsletter} = req.body

    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    await User.create({name, occupation, newsletter})
    res.redirect('/')
})

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id

    await User.destroy({where: {id: id} })
    res.redirect('/')
})

const PORT = 3000

conn.sync()
// conn.sync({force:true})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Aplicação rondando na porta ${PORT}`)
        })
    })
    .catch(error => {
        console.log(error)
    })
