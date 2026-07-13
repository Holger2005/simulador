//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos) {

    let calcular = ingresos - egresos;
    let redondiarCalcular = calcular.toFixed(2);
    let calcularRedondeado = parseFloat(calcular.toFixed(2));
    if (calcularRedondeado < 0) {
        return calcularRedondeado = 0;
    } else if(calcularRedondeado >= 0){
        return calcularRedondeado;
    }
}