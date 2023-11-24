const formularioproductos = document.getElementById('formularioProductos');
const inputs = document.querySelectorAll('#formularioProductos input');


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

inputs.forEach((input)=>{
    input.addEventListener('keyup',()=>{
        console.log('tecla levantada');
    });
})

formulario.addEvenListener('submit',(e) => {
    e.preveventDefault();
})