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