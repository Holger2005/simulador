//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
    let cmpIngreso = document.getElementById("txtIngresos");
    let cmpEgreso = document.getElementById("txtEgresos");

    let ingresoStr = cmpIngreso.value;
    let egresoStr = cmpEgreso.value;

    let calcular = calcularDisponible(ingresoStr, egresoStr);

    let cmpspnDisponible = document.getElementById("spnDisponible");

    cmpspnDisponible.textContent = calcular;

}