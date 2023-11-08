const express = require('express')
const path = require('path') //Trabajar con rutas
const hbs = require('hbs') //Incorporar motor de plantillas

const app = express()
const port = 8080

app.use(express.static('public'))

// Asignar la ubicacion de los archivos hbs
app.set('views', path.join(__dirname+'/public/views'))
// Ingenieria de las vistas hbs
app.set('view engine', 'hbs')
// Configuracion del directorio que guardara los archivos partials hbs
hbs.registerPartials(__dirname + '/public/views/partials')

app.get('/', (req, res)=>{
    res.render('index', {
        "nombre":"Juan Ortiz",
        "email":"juanes@gmail.com"
    })//Redireccionar hacia el archivo hbs
})

app.get('/sign-in', (req, res)=>{
    res.render('sign-in')
})

app.get('/rutinas', (req, res)=>{
    res.render('rutinas')
})

app.get('/plantilla', (req, res)=>{
    res.render('plantilla')
})

app.get('*', (req, res)=>{
    res.render('404')
})



app.listen(port, () => {
    console.log(`Escuchado por el puerto ${port}`)
})