let productos = [
    { id: 1, nombre: "Asus3050", categoria: "Placa de video", precio: 1000, stock: 20 },
    { id: 2, nombre: "Asus3060", categoria: "Placa de video", precio: 1500, stock: 15 },
    { id: 3, nombre: "Asus3060ti", categoria: "Placa de video", precio: 2000, stock: 5 },
    { id: 4, nombre: "Asus3070", categoria: "Placa de video", precio: 2300, stock: 12 },
    { id: 5, nombre: "Asus3080", categoria: "Placa de video", precio: 2600, stock: 5 },
    { id: 6, nombre: "Asus3090", categoria: "Placa de video", precio: 3000, stock: 6 },
    { id: 7, nombre: "Intel I5", categoria: "Procesador", precio: 700, stock: 20 },
    { id: 8, nombre: "Intel I7", categoria: "Procesador", precio: 900, stock: 30 },
    { id: 9, nombre: "AMD 5", categoria: "Procesador", precio: 750, stock: 17 },
    { id: 10, nombre: "AMD 7", categoria: "Procesador", precio: 1000, stock: 24 },
    { id: 11, nombre: "RAM 8 GB", categoria: "Memoria RAM", precio: 200, stock: 80 },
    { id: 12, nombre: "RAM 16 GB", categoria: "Memoria RAM", precio: 350, stock: 54 },
    { id: 13, nombre: "HDD 1TB", categoria: "Almacenamiento", precio: 400, stock: 24 },
    { id: 14, nombre: "SSD 500 GB", categoria: "Almacenamiento", precio: 450, stock: 45 },
    { id: 15, nombre: "M2 500GB", categoria: "Almacenamiento", precio: 500, stock: 4 },
    { id: 16, nombre: "Mother G520", categoria: "Placa madre", precio: 300, stock: 14 },
    { id: 17, nombre: "Mother P670", categoria: "Placa madre", precio: 500, stock: 4 },
    { id: 18, nombre: "Mother Z770", categoria: "Placa madre", precio: 800, stock: 24 }
  ];
  
  let carrito = [];
  
  alert("👾🖥️ ARMATE LA PC GAMER DEL MOMENTO 🖥️🎮");
  
  function obtenerCategorias() {
    let categorias = [];
  
    for (const producto of productos) {
      if (!categorias.includes(producto.categoria)) {
        categorias.push(producto.categoria);
      }
    }
  
    return categorias;
  }
  
  function obtenerProductosPorCategoria(categoria) {
    return productos.filter(producto => producto.categoria === categoria);
  }
  
  function mostrarProductos() {
    let categorias = obtenerCategorias();
  
    let opciones = "Elija una categoría ingresando el número correspondiente:\n";
  
    for (let i = 0; i < categorias.length; i++) {
      opciones += i + 1 +". " + categorias[i] + "\n";
    }
  
    opciones += "0. Volver al menú";
  
    let categoriaSeleccionada = parseInt(prompt(opciones));
   
    if (categoriaSeleccionada === 0) {
      return 0;
    }
  
    let productosCategoria = obtenerProductosPorCategoria(categorias[categoriaSeleccionada - 1]);
  
    if (productosCategoria.length === 0) {
      alert("No hay productos disponibles en esta categoría.");
      return 0;
    }
  
    opciones = "Productos disponibles en la categoría " + categorias[categoriaSeleccionada - 1] +":\n";
  
    for (let i = 0; i < productosCategoria.length; i++) {
      opciones += i + 1 + ". " + productosCategoria[i].nombre + " - Precio: $" + productosCategoria[i].precio + "\n";
    }
  
    opciones += "0. Volver al menú";
  
    let productoSeleccionado = parseInt(prompt(opciones));
  
    if (productoSeleccionado < 1 || productoSeleccionado > productosCategoria.length || isNaN(productoSeleccionado)) {
      alert("Dato inválido. Por favor, seleccione una opción válida.");
      return 0;
    }
  
    return productosCategoria[productoSeleccionado - 1];
  
  }
  
  function agregarAlCarrito(productoSeleccionado) {
    if (productoSeleccionado.stock > 0) {
      carrito.push(productoSeleccionado);
      productoSeleccionado.stock--;
      alert("Producto " + productoSeleccionado.nombre + " agregado al carrito.");
    } else {
      alert("No hay stock disponible para el producto" + productoSeleccionado.nombre + ".");
    }
  }
  
  function mostrarCarrito() {
    let carritoInfo = "Carrito de Compras:\n\n";
  
    if (carrito.length === 0) {
      carritoInfo += "El carrito está vacío.";
    } else {
      let total = 0;
  
      for (const producto of carrito) {
        carritoInfo += "Nombre: " + producto.nombre + " - Precio: $" + producto.precio + "\n";
        total += producto.precio;
      }
  
      carritoInfo += "\nTotal a pagar: $" + total;
    }
  
    alert(carritoInfo);
  }
  
  function mostrarMetodosDePago() {
    let metodosDePago = [
      "Tarjeta de crédito",
      "Transferencia bancaria",
      "PayPal",
      "Efectivo contra entrega",
    ];
  
    let opciones = "Seleccione un método de pago:\n";
  
    for (let i = 0; i < metodosDePago.length; i++) {
      opciones += i + 1 + ". " + metodosDePago[i] + "\n";
    }
  
    opciones += "0. Volver al menú";
  
    return parseInt(prompt(opciones));
  }
  
  function realizarPago(opcionMetodoPago) {
    if (opcionMetodoPago === 0) {
      return; 
    }
  
    let metodoPago = "";
  
    switch (opcionMetodoPago) {
      case 1:
        metodoPago = "Tarjeta de crédito";
        break;
      case 2:
        metodoPago = "Transferencia bancaria";
        break;
      case 3:
        metodoPago = "PayPal";
        break;
      case 4:
        metodoPago = "Efectivo contra entrega";
        break;
      default:
        alert("Opción inválida. No se realizará el pago.");
        return; 
    }
  
    let email = prompt(
      "Gracias por elegirnos. Usted seleccionó " + metodoPago + ".\n\n" +
        "Por favor, ingrese su correo electrónico para recibir el procedimiento a seguir:"
    );
  
    if (email) {
      alert(
        "Gracias por su compra. Se enviará la información de pago a la dirección de correo electrónico: " + email
      );
    } else {
      alert("No se ha ingresado un correo electrónico. La compra no se ha realizado.");
    }
  }
  
  
  let opcion;
  do {
    opcion = prompt("Seleccione una opción:\n1. Ver productos\n2. Mostrar carrito\n3. Realizar pago\n4. Salir");
  
    switch (opcion) {
      case "1":
        let productoSeleccionado = mostrarProductos();
        if (productoSeleccionado === 0) {
          break;
        }
        agregarAlCarrito(productoSeleccionado);
        break;
      case "2":
        mostrarCarrito();
        break;
      case "3":
        let metodoSeleccionado = mostrarMetodosDePago();
        realizarPago(metodoSeleccionado);
        if (metodoSeleccionado === 0) {
          break;
        }
        break;
      case "4":
        alert("Gracias por visitar nuestra tienda. !Hasta Luego¡");
        break;
      default:
        alert("Opción inválida. Por favor, seleccione una opción válida.");
        break;
    }
  } while (opcion !== "4");