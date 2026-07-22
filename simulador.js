/**
 * Valida que el input no esté vacío y contenga solo números.
 * Inyecta un nodo span con la clase 'error-msg' dejando el diseño al CSS.
 * @param {string} inputId - ID existente del input
 */
function validarInput(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;

    const contenedor = input.closest('.form-group');
    if (!contenedor) return;

    // Buscar si ya existe el elemento span de error
    let errorSpan = contenedor.querySelector('.error-msg');

    // Si no existe, lo creamos asignándole únicamente la clase CSS
    if (!errorSpan) {
        errorSpan = document.createElement('span');
        errorSpan.className = 'error-msg';
        contenedor.appendChild(errorSpan);
    }

    const valor = input.value.trim();
    // Expresión regular que valida enteros o decimales positivos
    const esNumeroValido = /^[0-9]+(\.[0-9]+)?$/.test(valor);

    // Lógica de evaluación
    if (valor === "") {
        errorSpan.textContent = "Este campo no puede estar vacío.";
        input.classList.add('input-error');
    } else if (!esNumeroValido) {
        errorSpan.textContent = "Ingrese solo números (ej. 1000 o 12.5).";
        input.classList.add('input-error');
    } else {
        errorSpan.textContent = "";
        input.classList.remove('input-error');
    }
}

// Asignación de eventos 'onblur' a los IDs existentes en el HTML
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