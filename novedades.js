function aplicarFiltros() {
    var minPrecio = parseFloat(document.getElementById("min-price").value);
    var maxPrecio = parseFloat(document.getElementById("max-price").value);
    var disponibilidad = document.getElementById("disponibilidad").checked;
    var checkboxes = document.getElementsByName('categoria');
    var categoriasSeleccionadas = obtenerCategoriasSeleccionadas(checkboxes);

    var productos = document.getElementsByClassName("product");
    for (var i = 0; i < productos.length; i++) {
      var producto = productos[i];
      var precioProducto = parseFloat(producto.getAttribute("data-price"));
      var disponible = producto.getAttribute("data-disponible");
      // Verificar si el producto cumple con los filtros de precio y la disponibilidad esten xd 
      var mostrar = true;
      if (!isNaN(minPrecio) && precioProducto < minPrecio) {
        mostrar = false;
      }
      if (!isNaN(maxPrecio) && precioProducto > maxPrecio) {
        mostrar = false;
      }
      if (disponibilidad && disponible !== "disponible") {
        mostrar = false;
      }
      if (categoriasSeleccionadas.length > 0 && !categoriasSeleccionadas.includes(categoria)) {
        mostrar = false;
      }
      // Mostrar u ocultar el producto según el resultado
      if (mostrar) {
        producto.style.display = "block";
      } else {
        producto.style.display = "none";
      }
    }
  }

  // Función para obtener las categorías seleccionadas
function obtenerCategoriasSeleccionadas(checkboxes) {
    var categoriasSeleccionadas = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        categoriasSeleccionadas.push(checkboxes[i].value);
      }
    }
    return categoriasSeleccionadas;
  }

