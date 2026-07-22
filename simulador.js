//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
    let cmpIngreso = document.getElementById("txtIngresos");
    let cmpEgreso = document.getElementById("txtEgresos");

    let ingresoStr = cmpIngreso.value;
    let egresoStr = cmpEgreso.value;

    let calcular = calcularDisponible(ingresoStr, egresoStr);

    let cmpspnDisponible = document.getElementById("spnDisponible");

    cmpspnDisponible.textContent = calcular;

    let capacidadPago= calcularCapacidadPago(calcular);
    
    let cmpspnCapacidadPago = document.getElementById("spnCapacidadPago");
    cmpspnCapacidadPago.textContent= capacidadPago;

    let cmpMonto = document.getElementById("txtMonto");
    let cmpTasa = document.getElementById("txtTasaInteres");
    let cmpPlazoAnios = document.getElementById("txtPlazo");

    let valueMonto = cmpMonto.value;
    let valueTasa = cmpTasa.value;
    let valuePlazoAnios = cmpPlazoAnios.value;

    let valorEnteroMonto = parseInt(valueMonto);
    let valorEnteroTasa = parseInt(valueTasa);
    let valorEnteroPlazaAnios = parseInt(valuePlazoAnios);


    let valorInteres= calcularInteresSimple(valorEnteroMonto, valorEnteroTasa, valorEnteroPlazaAnios)

    let cmpvalorInteres = document.getElementById("spnInteresPagar");
    cmpvalorInteres.textContent = valorInteres;

    let totalPagar = calcularTotalPagar(valorEnteroMonto, valorInteres);

    let cmpTotalPagar = document.getElementById("spnTotalPrestamo");
    cmpTotalPagar.textContent = totalPagar;

    let cuotaMensual = calcularCuotaMensual(totalPagar, valorEnteroPlazaAnios)
    let valorEnteroCuotaMensual = parseFloat(cuotaMensual.toFixed(2));

    let cmpCuotaMensual = document.getElementById("spnCuotaMensual");
    cmpCuotaMensual.textContent = valorEnteroCuotaMensual;

    let estadoCredito = aprobarCredito(capacidadPago, valorEnteroCuotaMensual);
    let cmpEstadoCredito = document.getElementById("spnEstadoCredito");
    
    if(estadoCredito == true){
        cmpEstadoCredito.textContent ="CREDITO APROBADO";
    }else{
        cmpEstadoCredito.textContent ="CREDITO RECHAZADO";
    }
}