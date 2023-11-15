const express = require('express')
const path = require('path') //Trabajar con rutas
const hbs = require('hbs') //Incorporar motor de plantillas

const formArray = [];
const app = express()
const port = 8080

// Configuración del middleware para analizar datos POST
app.use(express.urlencoded({ extended: true }));

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

// Inicio Gestion de acceso
app.get('/ingresar', (req, res)=>{
    res.render('auth/sign-in')
})

app.get('/registrar-usuario', (req, res)=>{
    res.render('auth/sign-up')
})

app.get('/recuperar-contrasena', (req, res)=>{
    res.render('auth/recoverpw')
})

app.get('/confirmacion', (req, res)=>{
    res.render('auth/confirm-mail')
})

app.get('/perfil', (req, res)=>{
    res.render('auth/user-account-setting')
})

app.get('/restablecer', (req, res)=>{
    res.render('auth/new-password')
})

// Fin Gestion de acceso

// Inicio Ventas

app.get('/clientes', (req, res)=>{
    res.render('clientes')
})
app.get('/beneficiarios', (req, res)=>{
    res.render('beneficiarios')
})
app.get('/formularioCliente', (req, res)=>{
    res.render('formularioCliente')
})
app.get('/formularioBeneficiario', (req, res)=>{
    res.render('formularioBeneficiario')
})
app.get('/formularioPedido', (req, res)=>{
    res.render('formularioPedido')
})
app.get('/pedidos', (req, res)=>{
    res.render('pedidos')
})
app.get('/ventas', (req, res)=>{
    res.render('ventas')
})
app.get('/devoluciones', (req, res)=>{
    res.render('devoluciones')
})

//Fin Ventas

//Rutinas
app.get('/rutinas', (req, res)=>{
    res.render('rutinas', { datos: formArray});
});

app.get('/nueva-rutina', (req, res)=>{
    res.render('formRutina')
});

app.post('/guardar-rutinas', (req, res)=>{
    const { nombreRutina, dia, exercise1, repeticion } = req.body;

    formArray.push ({ nombreRutina, dia, exercise1, repeticion });

    res.redirect('/rutinas');
});

// Fin rutinas

app.get('/plantilla', (req, res)=>{
    res.render('plantilla')
})

app.get('*', (req, res)=>{
    res.render('404')
})

app.listen(port, () => {
    console.log(`Escuchado por el puerto ${port}`)
})