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
<<<<<<<<< Temporary merge branch 1
        document.getElementById('formularioRegistro__mensaje').classList.add('formularioRegistro__mensaje-activo')
        setTimeout(() =>{
            document.getElementById('formularioRegistro__mensaje').classList.remove('formularioRegistro__mensaje-activo')
        }, 3000)
=========
        errorElement.textContent = '';
    }
});


// Validar número de documento en tiempo real
const numDocumentoInput = document.getElementById('num-documento');
numDocumentoInput.addEventListener('input', () => {
    const numDocumento = numDocumentoInput.value.trim();
    const errorElement = document.getElementById('errorNumDocumento');
    const numberRegex = /^[0-9]+$/; // Expresión regular para validar números
    
    if (numDocumento.length !== 10 || !numDocumento.match(numberRegex)) {
        errorElement.textContent = 'El número de documento debe tener 10 dígitos';
    } else {
        errorElement.textContent = '';
    }
});

// Validar correo de documento en tiempo real
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim();
    const errorElement = document.getElementById('errorEmail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo electrónico

    if (email === '') {
        errorElement.textContent = 'Ingrese un correo electrónico';
    } else if (!emailRegex.test(email)) {
        errorElement.textContent = 'Ingrese un correo electrónico válido';
    } else {
        errorElement.textContent = '';
    }
});

// Validar telefono en tiempo real
const telefonoInput = document.getElementById('telefono');
telefonoInput.addEventListener('input', () => {
    const telefono = telefonoInput.value.trim();
    const errorElement = document.getElementById('errorTelefono');
    const telefonoRegex = /^\d{7,10}$/; // Expresión regular para validar números de teléfono colombianos

    if (telefono === '') {
        errorElement.textContent = 'Ingrese un número de teléfono';
    } else if (!telefonoRegex.test(telefono)) {
        errorElement.textContent = 'Ingrese un número de teléfono válido para Colombia';
    } else {
        errorElement.textContent = '';
    }
});

// Validar edad en tiempo real
const edadInput = document.getElementById('edad');
edadInput.addEventListener('input', () => {
    const edad = edadInput.value.trim();
    const errorElement = document.getElementById('errorEdad');

    const minAge = 18;
    const maxAge = 65;

    const parsedEdad = parseInt(edad);
    if (isNaN(parsedEdad) || parsedEdad < minAge || parsedEdad > maxAge) {
        errorElement.textContent = `La edad debe estar entre ${minAge} y ${maxAge} años`;
    } else {
        errorElement.textContent = '';
    }
});

// Validar direccion en tiempo real
const direccionInput = document.getElementById('direccion');
const errorElement = document.getElementById('errorDireccion');

direccionInput.addEventListener('input', () => {
    const direccion = direccionInput.value.trim();

    if (direccion === '') {
        errorElement.textContent = 'Ingrese una dirección';
    } else {
        errorElement.textContent = '';
    }
});


// Validar contrasena en tiempo real
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorPassword = document.getElementById('errorPassword');
const errorConfirmPassword = document.getElementById('errorConfirmPassword');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value.trim();
    const upperCaseRegex = /[A-Z]/; // Para verificar si hay al menos una mayúscula
    const numberRegex = /\d/; // Para verificar si hay al menos un número

    if (password.length < 8 || password.length > 12) {
        errorPassword.textContent = 'La contraseña debe tener entre 8 y 12 caracteres';
    } else if (!upperCaseRegex.test(password)) {
        errorPassword.textContent = 'La contraseña debe contener al menos una letra mayúscula';
    } else if (!numberRegex.test(password)) {
        errorPassword.textContent = 'La contraseña debe contener al menos un número';
    } else {
        errorPassword.textContent = '';
    }
});

confirmPasswordInput.addEventListener('input', () => {
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (password !== confirmPassword) {
        errorConfirmPassword.textContent = 'Las contraseñas no coinciden';
    } else {
        errorConfirmPassword.textContent = '';
    }
});




const checkbox = document.getElementById('customCheck1');
const errorCondiciones = document.getElementById('errorCondiciones');

checkbox.addEventListener('change', () => {
    if (!checkbox.checked) {
        errorCondiciones.textContent = 'Debe aceptar las condiciones para continuar';
    } else {
        errorCondiciones.textContent = '';
    }
});

const form = document.getElementById('registroForm');

form.addEventListener('button', (event) => {
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
>>>>>>>>> Temporary merge branch 2
    }

})