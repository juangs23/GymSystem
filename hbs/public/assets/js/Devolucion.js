function agregarProducto() {
    var nuevoProductoContainer = document.createElement("div");
    nuevoProductoContainer.className ="productoContainer"

    var nuevoSelect = document.createElement("select");
    nuevoSelect.name = "productos[]";

    var opciones = document.getElementById("selectProducto").innerHTML;
    nuevoSelect.innerHTML = opciones;
    nuevoSelect.style.width = "300px"   

    var labelCantidad = document.createElement("label");
    labelCantidad.innerHTML = "Cantidad: ";
    labelCantidad.style.marginLeft = "200px"

    var labelValor = document.createElement("label");
    labelValor.innerHTML = "Valor: ";
    labelValor.style.marginLeft = "100px"

    var labelValorP = document.createElement("label");
    labelValorP.innerHTML = "$ 23.000 ";



    var nuevaCantidad = document.createElement("input");
    nuevaCantidad.type = "number";
    nuevaCantidad.style.width = "90px "
    nuevaCantidad.value = "1";  
    nuevaCantidad.min = "1";
    

    var btnEliminar = document.createElement("button");
    btnEliminar.type = "button";
    btnEliminar.className = "btn btn-soft-danger mt-2"; // Agrega la clase deseada
    btnEliminar.innerHTML = '<i class="fa-solid fa-minus fa-lg"></i>';
    btnEliminar.onclick = function () {
        document.getElementById("productosAgregados").removeChild(nuevoProductoContainer);
        document.getElementById("productosAgregados").removeChild(btnEliminar);
        document.getElementById("productosAgregados").removeChild(brElement);

        
    };

    var brElement = document.createElement("div");
    brElement.innerHTML = '&nbsp;'; // Espacio en blanco

    

    nuevoProductoContainer.appendChild(nuevoSelect);
    nuevoProductoContainer.appendChild(labelCantidad);
    nuevoProductoContainer.appendChild(nuevaCantidad);
    nuevoProductoContainer.appendChild(labelValor);
    nuevoProductoContainer.appendChild(labelValorP);
    
    

    document.getElementById("productosAgregados").appendChild(nuevoProductoContainer);
    document.getElementById("productosAgregados").appendChild(btnEliminar);
    document.getElementById("productosAgregados").appendChild(brElement);
    
    


}
