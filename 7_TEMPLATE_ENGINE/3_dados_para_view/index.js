const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs.engine())

app.get('/', (req, res) => {

    const user = {
        name: 'Gabriel',
        surname: 'Gomes',
        age: 18
    }

    const teste = '<h1>Um teste qualquer</h1>'

    res.render('home', {usuario: user, teste})
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})