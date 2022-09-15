const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs.engine())

app.get('/dashboard', (req, res) => {
    const items = ['Item a', 'Item b', 'Item c']
    res.render('dashboard', {items})
})

app.get('/', (req, res) => {

    const user = {
        name: 'Gabriel',
        surname: 'Gomes',
        age: 18
    }

    const auth = true

    const approved = true

    const teste = '<h1>Um teste qualquer</h1>'

    res.render('home', {usuario: user, teste, auth, approved})
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})