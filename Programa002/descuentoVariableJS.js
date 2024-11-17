// Agregar nuevos servicios o productos dinámicamente
document.getElementById('agregar-servicio').addEventListener('click', () => {
    const serviciosDiv = document.getElementById('servicios');
    const nuevoServicio = document.createElement('div');
    nuevoServicio.classList.add('servicio');
    nuevoServicio.innerHTML = `
        <label for="servicio-select">Selecciona un servicio:</label>
        <select class="servicio-select">
            <option value="500">Carillas ($500 MXN)</option>
            <option value="1200">Coronas ($1200 MXN)</option>
            <option value="300">Caries ($300 MXN)</option>
            <option value="10000">Rehabilitación con Implantes ($10,000 MXN)</option>
            <option value="1500">Blanqueamiento ($1500 MXN)</option>
            <option value="8000">Ortodoncia ($8,000 MXN)</option>
            <option value="3500">Endodoncia ($3,500 MXN)</option>
            <option value="4000">Periodoncia ($4,000 MXN)</option>
            <option value="7000">Cirugía ($7,000 MXN)</option>
        </select>
        
        <label>Descuento (%):</label>
        <input type="number" class="descuento-servicio" placeholder="Descuento (%)" step="0.01">
    `;
    serviciosDiv.appendChild(nuevoServicio);
});

// Calcular el costo total
document.getElementById('calcular').addEventListener('click', () => {
    const servicios = document.querySelectorAll('.servicio');
    let totalSinDescuento = 0;
    let totalConDescuento = 0;

    servicios.forEach((servicio) => {
        const select = servicio.querySelector('.servicio-select');
        const descuentoInput = servicio.querySelector('.descuento-servicio');

        const costo = parseFloat(select.value) || 0;
        const descuento = parseFloat(descuentoInput.value) || 0;

        totalSinDescuento += costo;
        totalConDescuento += costo - (costo * (descuento / 100));
    });

    document.getElementById('total-sin-descuento').textContent = `$${totalSinDescuento.toFixed(2)}`;
    document.getElementById('total-con-descuento').textContent = `$${totalConDescuento.toFixed(2)}`;
});
