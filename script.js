function calcular() {
    // Obtener valores
    const tasaParalelo = parseFloat(document.getElementById("tasaParalelo").value);
    const tasaOficial = parseFloat(document.getElementById("tasaOficial").value);
    const precioCalcular = parseFloat(document.getElementById("precioCalcular").value);
    const porcentajeDescuento = parseFloat(document.getElementById("porcentajeDescuento").value);

    // Paso 1: Calculo de Diferencia de Tasas
    const diferenciaTasas = 100 - ((100 * tasaOficial) / tasaParalelo);
    document.getElementById("diferenciaTasas").value = diferenciaTasas.toFixed(2); // Mostrar porcentaje

    // Paso 2: Calculo del precio en Bolívares (BS)
    const precioBS = precioCalcular * tasaParalelo;
    document.getElementById("precioBS").value = precioBS.toFixed(2);

    // Paso 3: Calculo del Dólar Aumento
    const dolarAumento = precioBS / tasaOficial;
    document.getElementById("dolarAumento").value = dolarAumento.toFixed(2);

    // Paso 4: Calculo del Descuento en USD
    const descuentoUSD = dolarAumento - (dolarAumento * porcentajeDescuento / 100);
    document.getElementById("descuentoUSD").value = descuentoUSD.toFixed(2);
}
