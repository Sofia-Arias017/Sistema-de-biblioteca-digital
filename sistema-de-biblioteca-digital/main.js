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
