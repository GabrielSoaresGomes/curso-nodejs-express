const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.set('view engine', 'handlebars')
app.engine('handlebars', hbs.engine)

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Título 01',
            category: 'Categoria 01',
            body: 'Teste 01',
            comments: 1
        },
        {
            title: 'Título 02',
            category: 'Categoria 02',
            body: 'Teste 02',
            comments: 2
        },
        {
            title: 'Título 03',
            category: 'Categoria 03',
            body: 'Teste 03',
            comments: 3
        },
        {
            title: 'Título 04',
            category: 'Categoria 04',
            body: 'Teste 04',
            comments: 4
        }
    ]

    res.render('blog', {posts})
})

app.get('/post', (req, res) => {
    const post = {
        title: "Aprender NodeJS",
        category: "JavaScript",
        body: "Artigo irá te auxiliar no aprendizado nesta incrível linguagem",
        comments: 10
    }

    res.render('blogpost', {post})
})

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