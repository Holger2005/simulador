/**
 * Función genérica para validar un input al perder el foco (onblur)
 * @param {string} inputId - ID del input a validar
 */
function validarInput(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;

    // Buscar si ya existe un elemento de error previo debajo del input/contenedor
    const contenedor = input.closest('.form-group');
    let errorSpan = contenedor.querySelector('.error-msg');

    // Si no existe, crear el elemento donde se mostrará el mensaje
    if (!errorSpan) {
        errorSpan = document.createElement('span');
        errorSpan.className = 'error-msg';
        contenedor.appendChild(errorSpan);
    }

    const valor = input.value.trim();
    // Expresión regular para validar enteros o decimales positivos
    const esNumeroValido = /^[0-9]+(\.[0-9]+)?$/.test(valor);

    // Validaciones
    if (valor === "") {
        errorSpan.textContent = "Este campo no puede estar vacío.";
        input.classList.add('input-error');
    } else if (!esNumeroValido) {
        errorSpan.textContent = "Ingrese solo números válidos (ej. 1000 o 12.5).";
        input.classList.add('input-error');
    } else {
        // Si no hay error, limpiar mensaje y estilos
        errorSpan.textContent = "";
        input.classList.remove('input-error');
    }
}

// Asignar eventos 'onblur' usando los mismos IDs existentes
document.addEventListener("DOMContentLoaded", function () {
    const idsAValidar = [
        "txtIngresos",
        "txtEgresos",
        "txtMonto",
        "txtPlazo",
        "txtTasaInteres"
    ];

    idsAValidar.forEach(function (id) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.onblur = function () {
                validarInput(id);
            };
        }
    });
});