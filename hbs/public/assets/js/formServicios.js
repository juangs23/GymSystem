document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('editarpedidoModalForm');

    const expresiones = {
        servicioNombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
        instructor: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
        precio: /^\d+(\.\d{1,2})?$/,
        estado: /^[a-zA-ZÀ-ÿ\s]{1,50}$/
    };

    const campos = {
        servicioNombre: false,
        instructor: false,
        precio: false,
        estado: false
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
        if (event.target.type !== 'submit') {
            validarCampo(expresiones[event.target.name], event.target, event.target.name);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const isFormValid = Object.values(campos).every((campo) => campo);

        if (isFormValid) {
            form.submit();
        } else {
            // Manejar errores de validación, si los hay
            console.log('Formulario no válido');
        }
    }

    form.addEventListener('submit', handleSubmit);
    form.addEventListener('input', validarFormulario);
});
