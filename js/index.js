function calcularDescuento() {
    let productos = [];
    for (let i = 1; i <= 5; i++) {
        let value = document.getElementById(`product${i}`).value;
        if (value === "" || isNaN(value) || value < 0) {
            Swal.fire('Error', 'Por favor ingrese valores numéricos válidos en todos los campos.', 'error');
            return;
        }
        productos.push(parseFloat(value));
    }
    
    let subtotal = productos.reduce((acumulador, valorI) => acumulador + valorI, 0);
    let descuentoPorcentaje = 0;

    if (subtotal >= 1000 && subtotal < 5000) descuentoPorcentaje = 10;
    else if (subtotal >= 5000 && subtotal < 9000) descuentoPorcentaje = 20;
    else if (subtotal >= 9000 && subtotal < 13000) descuentoPorcentaje = 30;
    else if (subtotal >= 13000) descuentoPorcentaje = 40;
    
    let descuento = (subtotal * descuentoPorcentaje) / 100;
    let total = subtotal - descuento;
    
    document.getElementById("subtotal").value = `L${subtotal.toFixed(2)}`;
    document.getElementById("LabelDescuento").textContent = `Descuento ${descuentoPorcentaje}%`;
    document.getElementById("desc").value = `L${descuento.toFixed(2)}`;
    document.getElementById("total").value = `L${total.toFixed(2)}`;
}

function limpiar() {
    document.getElementById("discountForm").reset();
    document.getElementById("subtotal").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("total").value = "";
    document.getElementById("LabelDescuento").textContent = "Descuento 0%";
}