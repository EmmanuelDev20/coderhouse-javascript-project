 // class Persona {
// }
// const persona = {
//   nombre: 'Emmanuel',
//   edad: 39,
//   calle: 'Av. Siempre'
// }

// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.calle)
// console.log(persona['calle'])

// persona.edad = 36


// Create an object, first manner
// class Persona {
//   constructor(nombre, edad, calle) {
//     this.nombre = nombre,
//     this.edad = edad,
//     this.calle = calle
//   }

//   saludar() {
//     console.log("Hola soy", this.nombre)
//   }
// }

// const persona = new Persona('Emmanuel', 27, 'Sabalito')
// const persona2 = new Persona('Julian', 34, 'San Vito')

// Create an object, second manner
// function Cat(name) {
//   this.name = name
//   this.sound = 'Meow'
// }

// const cat = new Cat('minino')
// console.log(cat.sound)

// // Create an object, second manner
// function Persona(nombre, edad, calle) {
//   this.nombre = nombre
//   this.edad = edad
//   this.calle = calle

//   this.hablar = function() {
//     console.log('Hola soy', this.nombre)
//   }
// }

// const persona = new Persona('Homero', 43, 'Av 3')
// persona.hablar()



// NO FUNCIONÓ LA PROPIEDAD PRIVADA
//  class Veterinaria {
//   #telefono

//   constructor(nombre, direccion, telefono) {
//     this.nombre = nombre
//     this.direccion = direccion
//     this.#telefono = telefono
//   }
//   saludar() {
//     console.log('Bienvenido a: ' + this.nombre + ' y ' + this.#telefono)
//   }
//  }

//  const vet = new Veterinaria('Animales felices', 'Calle 13', '1234123412')
//  console.log(vet)

// class Mascota {
//   static cola = 'Larga'
//   pelaje = 'lacio'
//   static contadorMascotas = 0
//   #numero 

//   constructor(nombre, edad) {
//     this.nombre = nombre
//     this.edad = edad
//     this.#numero = ++Mascota.contadorMascotas
//   }

//   get numeroCreado() {
//     return this.#numero
//   }

//   get nombre() {
//     return this.nombre
//   }

//   set cambiarNombre(nombre) {
//     this.nombre = nombre
//   }
// }

// const mascota = new Mascota('Firulais', 3)
// const mascota2 = new Mascota('Roco', 3)
// const mascota3 = new Mascota('Teo', 2)

// console.log(Mascota.contadorMascotas)
// console.log(mascota1.numeroCreado)

// // Para acceder a la propiedad estática de la clase, debemos acceder directamente a la clase y a esa propiedad estática
// console.log(Mascota.cola)

// SEPARADOR
// const idUsuario = {}
// const usuarios = ['Firulais', 'Roco', 'Teo']

// usuarios.forEach((usuario, index) => idUsuario[`id_${ index }`] = usuario)

// console.log(idUsuario)

// SEPARADOR
// function f1() {
//   return this
// }

function Persona(nombre, edad, direccion) {
  this.nombre = nombre
  this.edad = edad
  this.direccion = direccion

  this.hablar = function() {
    console.log('Hola soy', this.nombre)
  }
}

const cadena = 'Hola'
console.log(cadena.length)
console.log(cadena.toLowerCase())
console.log(cadena.toUpperCase())

const persona1 = new Persona('Emmanuel', 23, 'Av. 13')

