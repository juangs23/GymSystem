const formularioRegistro = document.getElementById('formularioRegistro')
const inputs = document.querySelectorAll('#formularioRegistro input')

const expresiones = {
	nombres: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
    apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    documento: /^[A-Za-z0-9\s-]{10}$/,
	password:  /^(?=.*[A-Z])(?=.*\d).+$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    edad: /^(1[8-9]|[2-5][0-9]|6[0-5])$/,
    direccion: /^[A-Za-z0-9\s#áéíóúÁÉÍÓÚüÜ.,-]+$/,
	telefono: /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/
}

const campos = {
    nombres: false, 
    apellidos: false, 
    documento: false, 
    correo: false, 
    telefono: false, 
    edad: false,
    direccion: false,
    password: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombres":
            validarCampo(expresiones.nombres, e.target, 'nombres')
        break
        case "apellidos":
            validarCampo(expresiones.apellidos, e.target, 'apellidos')
        break
        case "documento":
            validarCampo(expresiones.documento, e.target, 'documento')
        break
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo')
        break
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono')
        break
        case "edad":
            validarCampo(expresiones.edad, e.target, 'edad')
        break
        case "direccion":
            validarCampo(expresiones.direccion, e.target, 'direccion')
        break
        case "password":
            validarCampo(expresiones.password, e.target, 'password')
            validarPassword2()
        break
        case "confirmarPassword":
            validarPassword2()
        break
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formularioRegistro__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.add('formularioRegistro__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo__${campo} .formularioRegistro__input-error`).classList.remove('formularioRegistro__input-error-activo')
        campos[campo] = true
    }else {
        document.getElementById(`grupo__${campo}`).classList.add('formularioRegistro__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formularioRegistro__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo__${campo} .formularioRegistro__input-error`).classList.add('formularioRegistro__input-error-activo')
        campo[false]
    }
}

const validarPassword2 = () =>{
    const inputPassword1 = document.getElementById('password')
    const inputPassword2 = document.getElementById('confirmarPassword')

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__confirmarPassword`).classList.add('formularioRegistro__grupo-incorrecto')
        document.getElementById(`grupo__confirmarPassword`).classList.remove('formularioRegistro__grupo-correcto')
        document.querySelector(`#grupo__confirmarPassword i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__confirmarPassword i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo__confirmarPassword .formularioRegistro__input-error`).classList.add('formularioRegistro__input-error-activo')
        campos['password'] = false
    } else {
        document.getElementById(`grupo__confirmarPassword`).classList.remove('formularioRegistro__grupo-incorrecto')
        document.getElementById(`grupo__confirmarPassword`).classList.add('formularioRegistro__grupo-correcto')
        document.querySelector(`#grupo__confirmarPassword i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__confirmarPassword i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo__confirmarPassword .formularioRegistro__input-error`).classList.remove('formularioRegistro__input-error-activo')
        campos['password'] = true
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formularioRegistro.addEventListener('submit', (e) =>{
    e.preventDefault();

    const terminos = document.getElementById('terminos')
    if (campos.nombres && campos.apellidos && campos.documento && campos.correo && campos.edad && campos.telefono && 
        campos.direccion && campos.password && terminos.checked) {
        formularioRegistro.reset()

        document.getElementById('formularioRegistro__mensaje-exito').classList.add('formularioRegistro__mensaje-exito-activo');
        setTimeout(() =>{
            document.getElementById('formularioRegistro__mensaje-exito').classList.remove('formularioRegistro__mensaje-exito-activo');
        }, 3000)
        document.querySelectorAll('.formularioRegistro__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formularioRegistro__grupo-correcto')
        })

    } else {
        errorCondiciones.textContent = '';
    }
});

const form = document.getElementById('registroForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Resto del código de validación...

    const errorElements = document.querySelectorAll('.error-message');
    const hasErrors = Array.from(errorElements).some((errorElement) => errorElement.textContent !== '');

    if (!checkbox.checked || hasErrors) {
        // Validación del checkbox al momento de enviar el formulario
        if (!checkbox.checked) {
            errorCondiciones.textContent = 'Debe aceptar las condiciones para continuar';
        }
        return; // No envía el formulario si hay errores
    }

    alert('Formulario válido. Redirigiendo al login...');
    // Resto del código para redirigir al usuario...
});
