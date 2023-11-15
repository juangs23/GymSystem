const form = document.getElementById('registration-form');

form.addEventListener('submit', function (e) {
  let valid = true;
  
  // Validación del Nombre Completo
  const nombreCompleto = document.getElementById('nombreCompleto');
  const nombreCompletoError = document.getElementById('nombreCompleto-error');
  if (nombreCompleto.value.trim() === '') {
    nombreCompletoError.textContent = 'Este campo es obligatorio';
    valid = false;
  } else {
    nombreCompletoError.textContent = '';
  }

  // Validación del Tipo de Documento
  const tipoDocumento = document.getElementById('tipoDocumento');
  const tipoDocumentoError = document.getElementById('tipoDocumento-error');
  if (tipoDocumento.value === '') {
    tipoDocumentoError.textContent = 'Seleccione un tipo de documento';
    valid = false;
  } else {
    tipoDocumentoError.textContent = '';
  }

  // Validación del Número de Documento
  const numeroDocumento = document.getElementById('numeroDocumento');
  const numeroDocumentoError = document.getElementById('numeroDocumento-error');
  if (numeroDocumento.value.trim() === '') {
    numeroDocumentoError.textContent = 'Este campo es obligatorio';
    valid = false;
  } else {
    numeroDocumentoError.textContent = '';
  }

  // Validación del Correo Electrónico
  const correoElectronico = document.getElementById('correoElectronico');
  const correoElectronicoError = document.getElementById('correoElectronico-error');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correoElectronico.value)) {
    correoElectronicoError.textContent = 'Ingrese un correo electrónico válido';
    valid = false;
  } else {
    correoElectronicoError.textContent = '';
  }

  // Validación de la Dirección
  const direccion = document.getElementById('direccion');
  const direccionError = document.getElementById('direccion-error');
  if (direccion.value.trim() === '') {
    direccionError.textContent = 'Este campo es obligatorio';
    valid = false;
  } else {
    direccionError.textContent = '';
  }

  // Validación del Contacto
  const contacto = document.getElementById('contacto');
  const contactoError = document.getElementById('contacto-error');
  if (contacto.value.trim() === '') {
    contactoError.textContent = 'Este campo es obligatorio';
    valid = false;
  } else {
    contactoError.textContent = '';
  }

  if (!valid) {
    e.preventDefault(); // Evita que se envíe el formulario si hay errores
  }
});