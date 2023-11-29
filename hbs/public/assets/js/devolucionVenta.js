const formularioRegistro = document.getElementById('formularioDevolucion')
const inputs = document.querySelectorAll('#formularioDevolucion input')

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
    
        case "direccion":
            validarCampo(expresiones.direccion, e.target, 'direccion')
        break

    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formularioDevolucion__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.add('formularioDevolucion__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo__${campo} .formularioDevolucion__input-error`).classList.remove('formularioDevolucion__input-error-activo')
        campos[campo] = true
    }else {
        document.getElementById(`grupo__${campo}`).classList.add('formularioDevolucion__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formularioDevolucion__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo__${campo} .formularioDevolucion__input-error`).classList.add('formularioDevolucion__input-error-activo')
        campo[false]
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

        document.getElementById('formularioDevolucion__mensaje-exito').classList.add('formularioDevolucion__mensaje-exito-activo');
        setTimeout(() =>{
            document.getElementById('formularioDevolucion__mensaje-exito').classList.remove('formularioDevolucion__mensaje-exito-activo');
        }, 3000)
        document.querySelectorAll('.formularioDevolucion__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formularioDevolucion__grupo-correcto')
        })

    } else {
        document.getElementById('formularioDevolucion__mensaje').classList.add('formularioDevolucion__mensaje-activo')
        setTimeout(() =>{
            document.getElementById('formularioDevolucion__mensaje').classList.remove('formularioDevolucion__mensaje-activo')
        }, 3000)
    }

})