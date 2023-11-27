document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('eliminarUsuarioModalForm');

    const expresiones = {
        documento: /^\d+$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        telefono: /^\d{10}$/,
        estado: /^[a-zA-ZÀ-ÿ\s]{1,50}$/
    };

    const campos = {
        documento: false,
        nombre: false,
        email: false,
        telefono: false,
        estado: false
    };

    function validarCampo(expresion, input, campo) {
        const errorSpan = document.getElementById(`${campo}-error`);

        if (expresion.test(input.textContent)) {
            errorSpan.textContent = '';
            campos[campo] = true;
        } else {
            errorSpan.textContent = `Formato inválido para ${campo}`;
            campos[campo] = false;
        }
    }

    function validarFormulario(event) {
        if (event.target.tagName === 'TD') {
            validarCampo(expresiones[event.target.dataset.validacion], event.target, event.target.dataset.validacion);
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
    form.addEventListener('click', validarFormulario);
});
