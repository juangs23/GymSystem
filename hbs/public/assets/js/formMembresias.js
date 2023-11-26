document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('FormularioMembresias');

    const expresiones = {
        nombres: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
        servicioagg: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        cantidad: /^[0-9]+$/,
        fechaInicio: /^\d{2}\/\d{2}\/\d{4}$/,
        costoTotal: /^\d+(\.\d{1,2})?$/,
        fechaFin: /^\d{2}\/\d{2}\/\d{4}$/,
        precioVenta: /^\d+(\.\d{1,2})?$/
    };

    const campos = {
        Nombremembresia: false,
        servicioagg: false,
        Frecuencia: false,
        cantidad: false,
        fechaInicio: false,
        costoTotal: false,
        fechaFin: false,
        precioVenta: false
    };

    function validarCampo(expresion, input, campo) {
        const errorSpan = document.getElementById(`${campo}-error`);

        if (expresion.test(input.value)) {
            errorSpan.textContent = '';
            campos[campo] = true;
        } else {
            errorSpan.textContent = `Formato inválido para ${campo}`;
            campos[campo] = false;
        }
    }

    function validarFormulario(event) {
        switch (event.target.name) {
            case 'Nombremembresia':
                validarCampo(expresiones.nombres, event.target, 'Nombremembresia');
                break;
            case 'servicioagg':
                validarCampo(expresiones.servicioagg, event.target, 'servicioagg');
                break;
            case 'Frecuencia':
                campos['Frecuencia'] = true; // Se puede personalizar según tus necesidades
                break;
            case 'cantidad':
                validarCampo(expresiones.cantidad, event.target, 'cantidad');
                break;
            case 'fechaInicio':
                validarCampo(expresiones.fechaInicio, event.target, 'fechaInicio');
                break;
            case 'costoTotal':
                validarCampo(expresiones.costoTotal, event.target, 'costoTotal');
                break;
            case 'fechaFin':
                validarCampo(expresiones.fechaFin, event.target, 'fechaFin');
                break;
            case 'precioVenta':
                validarCampo(expresiones.precioVenta, event.target, 'precioVenta');
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const isFormValid = Object.values(campos).every((campo) => campo);

        if (isFormValid) {
            form.submit();
        } else {
            // Handle validation errors, if any
            console.log('Formulario no válido');
        }
    }

    form.addEventListener('submit', handleSubmit);
    form.addEventListener('input', validarFormulario);
});
