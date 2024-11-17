function calcula() {
    // Obtener los valores del formulario
    let nombre = document.getElementById('nom').value;
    let sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
    let venta1 = parseFloat(document.getElementById('venta1').value);
    let venta2 = parseFloat(document.getElementById('venta2').value);
    let venta3 = parseFloat(document.getElementById('venta3').value);

    // Calcular la comisión para cada venta
    let comision1 = calcularComision(venta1);
    let comision2 = calcularComision(venta2);
    let comision3 = calcularComision(venta3);

    // Calcular el pago total
    let pagoTotal = sueldoBase + comision1 + comision2 + comision3;

    // Crear una fila para la tabla
    let tabla = document.getElementById('tablita');
    let nuevaFila = document.createElement('tr');

    // Crear celdas para cada columna
    let celdaNombre = document.createElement('td');
    celdaNombre.textContent = nombre;
    nuevaFila.appendChild(celdaNombre);

    let celdaSueldoBase = document.createElement('td');
    celdaSueldoBase.textContent = sueldoBase.toFixed(2);
    nuevaFila.appendChild(celdaSueldoBase);

    let celdaVenta1 = document.createElement('td');
    celdaVenta1.textContent = venta1.toFixed(2);
    nuevaFila.appendChild(celdaVenta1);

    let celdaVenta2 = document.createElement('td');
    celdaVenta2.textContent = venta2.toFixed(2);
    nuevaFila.appendChild(celdaVenta2);

    let celdaVenta3 = document.createElement('td');
    celdaVenta3.textContent = venta3.toFixed(2);
    nuevaFila.appendChild(celdaVenta3);

    let celdaPagoTotal = document.createElement('td');
    celdaPagoTotal.textContent = pagoTotal.toFixed(2);
    nuevaFila.appendChild(celdaPagoTotal);

    // Agregar la fila a la tabla
    tabla.appendChild(nuevaFila);
}

function calcularComision(venta) {
    if (venta < 2000) {
        return 0; // No hay comisión
    } else if (venta >= 2000 && venta <= 5000) {
        return venta * 0.05; // 5% de comisión
    } else {
        return venta * 0.10; // 10% de comisión
    }
}
