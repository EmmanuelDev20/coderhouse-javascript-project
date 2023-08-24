// // Print numbers list
// const printNumbers = document.getElementById('printNumbers');

// printNumbers.addEventListener('click', () => {
//   let init = parseInt(prompt("Por favor ingresa el primer número de la lista"));
//   let end = parseInt(prompt("Por favor ingresa el último número de la lista"));
//   printNumbersFunc( init, end )
// })

// function printNumbersFunc( initialNumber, finalNumber ) {
//   if(initialNumber < finalNumber) {
//     console.log("Nuevo listado con " + initialNumber + " como número inicial y " + finalNumber + " como último número:")
//     for( let i = initialNumber; i <= finalNumber; i++ ) {
//       console.log(i);
//     }
//   } else {
//     console.log('El número inicial debe ser menor al último número')
//   }
// }