document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");
    const errorNombres = document.getElementById("errorNombres");
    const errorApellidos = document.getElementById("errorApellidos");
    const errorNumDocumento = document.getElementById("errorNumDocumento");
    const errorEmail = document.getElementById("errorEmail");
    const errorTelefono = document.getElementById("errorTelefono");
    const errorEdad = document.getElementById("errorEdad");
    const errorDireccion = document.getElementById("errorDireccion");
    const errorPassword = document.getElementById("errorPassword");
    const errorConfirmPassword = document.getElementById("errorConfirmPassword");
    const errorCondiciones = document.getElementById("errorCondiciones");

    form.addEventListener("submit", function (event) {
        let hasError = false;

        const nombres = document.getElementById("nombres").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const numDocumento = document.getElementById("num-documento").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const edad = document.getElementById("edad").value.trim();
        const direccion = document.getElementById("direccion").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const condicionesChecked = document.getElementById("customCheck1").checked;

        // Validar campos vacíos
        if (nombres === "") {
            errorNombres.textContent = "Por favor, ingresa tu nombre";
            hasError = true;
        } else {
            errorNombres.textContent = "";
        }

        if (apellidos === "") {
            errorApellidos.textContent = "Por favor, ingresa tus apellidos";
            hasError = true;
        } else {
            errorApellidos.textContent = "";
        }

        if (numDocumento === "") {
            errorNumDocumento.textContent = "Por favor, ingresa tu número de documento";
            hasError = true;
        } else if (!/^\d{10}$/.test(numDocumento)) {
            errorNumDocumento.textContent = "El documento debe tener 10 dígitos numéricos";
            hasError = true;
        } else {
            errorNumDocumento.textContent = "";
        }

        if (email === "") {
            errorEmail.textContent = "Por favor, ingresa tu correo electrónico";
            hasError = true;
        } else if (!isValidEmail(email)) {
            errorEmail.textContent = "Ingresa un correo electrónico válido";
            hasError = true;
        } else {
            errorEmail.textContent = "";
        }

       

        if (telefono === "") {
            errorTelefono.textContent = "Por favor, ingresa tu número de teléfono";
            hasError = true;
        } else if (!isValidColombianPhoneNumber(telefono)) {
            errorTelefono.textContent = "Ingresa un número de teléfono válido en Colombia";
            hasError = true;
        } else {
            errorTelefono.textContent = "";
        }

        if (edad === "") {
            errorEdad.textContent = "Por favor, ingresa tu edad";
            hasError = true;
        } else if (!isValidAge(edad)) {
            errorEdad.textContent = "Ingresa una edad válida entre 18 y 70 años";
            hasError = true;
        } else {
            errorEdad.textContent = "";
        }

        if (direccion === "") {
            errorDireccion.textContent = "Por favor, ingresa tu dirección";
            hasError = true;
        } else {
            errorDireccion.textContent = "";
        }

         // Validar contraseña
         if (password === "") {
            errorPassword.textContent = "Por favor, ingresa una contraseña";
            hasError = true;
        } else if (!isValidPassword(password)) {
            errorPassword.textContent = "La contraseña debe tener al menos una letra mayúscula y un número";
            hasError = true;
        } else {
            errorPassword.textContent = "";
        }

        // Validar confirmación de contraseña
        if (confirmPassword === "") {
            errorConfirmPassword.textContent = "Por favor, confirma tu contraseña";
            hasError = true;
        } else if (password !== confirmPassword) {
            errorConfirmPassword.textContent = "Las contraseñas no coinciden";
            hasError = true;
        } else {
            errorConfirmPassword.textContent = "";
        }

        // Validar checkbox de condiciones de uso
        if (hasError) {
            event.preventDefault();
        } else {
            // Si no hay errores, redireccionar y mostrar la alerta
            event.preventDefault(); // Previene el envío automático del formulario
    
            // Aquí puedes cambiar 'tu-login.html' por la ruta de tu página de inicio de sesión
            window.location.href = 'tu-login.html';
    
            // Mostrar la alerta
            alert("Datos registrados con éxito");
        }
    });
});

function isValidColombianPhoneNumber(phoneNumber) {
    // Expresión regular para validar el número de teléfono en Colombia
    const phoneRegex = /^\d{7,10}$/; // Se asume que los números en Colombia tienen entre 7 y 10 dígitos
    return phoneRegex.test(phoneNumber);
}

function isValidPassword(password) {
    // Expresión regular para validar la contraseña (al menos una letra mayúscula y un número)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    return passwordRegex.test(password);
}