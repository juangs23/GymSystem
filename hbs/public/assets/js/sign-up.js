
// Validar nombres en tiempo real
const nombresInput = document.getElementById('nombres');
nombresInput.addEventListener('input', () => {
    const nombres = nombresInput.value.trim();
    const errorElement = document.getElementById('errorNombres');
    const letterRegex = /^[a-zA-Z\s]*$/; // Expresión regular para validar letras y espacios

    if (nombres === '') {
        errorElement.textContent = 'Ingrese sus nombres';
    } else if (!letterRegex.test(nombres)) {
        errorElement.textContent = 'Los nombres solo deben contener letras';
    } else {
        errorElement.textContent = '';
    }
});


// Validar apellidos en tiempo real
const apellidosInput = document.getElementById('apellidos');
apellidosInput.addEventListener('input', () => {
    const apellidos = apellidosInput.value.trim();
    const errorElement = document.getElementById('errorApellidos');
    const letterRegex = /^[a-zA-Z\s]*$/; // Expresión regular para validar letras y espacios
    
    if (apellidos === '') {
        errorElement.textContent = 'Ingrese sus apellidos';
    } else if (!letterRegex.test(apellidos)) {
        errorElement.textContent = 'Los apellidos solo deben contener letras';
    } else {
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
    }

    alert('Formulario válido. Redirigiendo al login...');
    // Resto del código para redirigir al usuario...
});
