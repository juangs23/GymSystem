const formularioproveedores = document.getElementById('formularioProveedores');
const inputs = document.querySelectorAll('#formularioProveedores input');


const expresiones = {
	Nombreproveedor: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, 
    Contactoproveedor: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    Telefono: /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/,
	Direccion:  /^[A-Za-z0-9\s#áéíóúÁÉÍÓÚüÜ.,-]+$/,
    Nit:/^[0-9]+$/
}

const campos={
    Nombreproveedor:false,
    Contactoproveedor:false,
    Telefono:false,
    Direccion:false,
    Nit:false
}


const validarformularioproveedor = (e)=> {
    switch(e.target.name){
        case "Nombreproveedor":
            validarcampo(expresiones.Nombreproveedor, e.target,"Nombreproveedor");
            break
    }
    switch(e.target.name){
        case "Contactoproveedor":
            validarcampo(expresiones.Contactoproveedor, e.target,"Contactoproveedor");
            break
    }
    switch(e.target.name){
        case "Telefono":
            validarcampo(expresiones.Telefono, e.target,"Telefono");
            break
    }
    switch(e.target.name){
        case "Direccion":
            validarcampo(expresiones.Direccion, e.target,"Direccion");
            break
    }
    switch(e.target.name){
        case "Nit":
            validarcampo(expresiones.Nit, e.target,"Nit");
            break
    }


}


const validarcampo = (expresion,input,campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo]=true;
    }else {
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[campo]=false;
    }


}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarformularioproveedor);
    input.addEventListener('blur',validarformularioproveedor);
    });

formularioproveedores.addEventListener('submit',(e) => {
    e.preventDefault();
    if(campos.Nombreproveedor && campos.Contactoproveedor && campos.Telefono && campos.Direccion && campos.Nit){
        formularioproveedores.reset()
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Guardado correctamente"
          });
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono)=>{
            icono.classList.remove('formulario__grupo-correcto')
        });
    } else {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "Ingrese los datos correctamente"
          });
    }
});