let libros = []
let usuarios = []

function registrarLibro() {
let isbn = prompt("Ingrese el ISBN del libro:")
let titulo = prompt("Ingrese el título del libro:")
let autor = prompt("Ingrese el autor del libro:")
    
let libro = {
    isbn: isbn,
    titulo: titulo,
    autor: autor,
    disponible: true
    }
    
libros.push(libro)
console.log(`El libro '${titulo}' ha sido registrado con éxito.`)
}

function registrarUsuario() {
let id = Number(prompt("Ingrese el ID del usuario:"))
let nombre = prompt("Ingrese el nombre del usuario:")
let correo = prompt("Ingrese el correo del usuario:")
    
let usuario = {
    id: id,
    nombre: nombre,
    correo: correo,
    prestamos: []
    }
    
usuarios.push(usuario)
console.log(`Usuario '${nombre}' registrado con éxito.`)
}

function prestarLibro() {
let idUsuario = Number(prompt("Ingrese el ID del usuario:"))
let isbnLibro = prompt("Ingrese el ISBN del libro a prestar:")
    
let usuario = usuarios.find(u => u.id === idUsuario)
let libro = libros.find(l => l.isbn === isbnLibro)
    
if (!usuario) {
    console.log("Usuario no encontrado.")
    return
    }
if (!libro) {
    console.log("Libro no encontrado.")
    return
    }
if (!libro.disponible) {
    console.log("El libro ya está prestado.")
    return
    }
    
usuario.prestamos.push(isbnLibro)
libro.disponible = false
console.log(`El libro '${libro.titulo}' ha sido prestado a '${usuario.nombre}'.`)
}

function devolverLibro() {
let idUsuario = Number(prompt("Ingrese el ID del usuario:"))
let isbnLibro = prompt("Ingrese el ISBN del libro a devolver:")
    
let usuario = usuarios.find(u => u.id === idUsuario)
let libro = libros.find(l => l.isbn === isbnLibro)
    
if (!usuario || !libro) {
    console.log("Usuario o libro no encontrado.")
    return
    }
    
let index = usuario.prestamos.indexOf(isbnLibro)
if (index === -1) {
    console.log("Este usuario no tiene prestado ese libro.")
    return
    }
    
usuario.prestamos.splice(index, 1)
libro.disponible = true
console.log(`El libro '${libro.titulo}' ha sido devuelto.`)
}

function librosPrestadosPorUsuario() {
let idUsuario = Number(prompt("Ingrese el ID del usuario:"))
let usuario = usuarios.find(u => u.id === idUsuario)
    
if (!usuario) {
    console.log("Usuario no encontrado.")
    return
    }
    
let librosPrestados = usuario.prestamos.map(isbn => {
    let libro = libros.find(l => l.isbn === isbn)
    return libro ? libro.titulo : "Desconocido"
    })
    
console.log(`Libros prestados a '${usuario.nombre}':`, librosPrestados.length > 0 ? librosPrestados : "Ninguno")
}

function exportarDatosBiblioteca() {
let json = JSON.stringify({ libros, usuarios }, null, 2)
    console.log("Datos exportados en formato JSON:", json)
}

function importarDatosBiblioteca() {
let json = prompt("Ingrese los datos en formato JSON:")
    try {
let datos = JSON.parse(json)
        libros = datos.libros || []
        usuarios = datos.usuarios || []
        console.log("Datos importados correctamente.")
    } catch (error) {
console.log("Error al importar datos. Verifique el formato JSON.")
    }
}

function menu() {
let opcion
    do {
        opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Registrar libro\n" +
            "2. Registrar usuario\n" +
            "3. Prestar libro\n" +
            "4. Devolver libro\n" +
            "5. Ver libros prestados por usuario\n" +
            "6. Exportar datos a JSON\n" +
            "7. Importar datos desde JSON\n" +
            "8. Salir"
        )

    switch (opcion) {
        case "1":
            registrarLibro()
            break
        case "2":
            registrarUsuario()
            break
        case "3":
            prestarLibro()
            break
        case "4":
            devolverLibro()
            break
        case "5":
            librosPrestadosPorUsuario()
            break
        case "6":
            exportarDatosBiblioteca()
            break
        case "7":
            importarDatosBiblioteca()
            break
        case "8":
            console.log("Saliendo del sistema de biblioteca.")
            break
        default:
            console.log("Opción no válida, intente de nuevo.")
        }
    } while (opcion !== "8")
}

menu()



