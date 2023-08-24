// const products = []

// let productoNuevo = prompt("Ingrese el producto o ESC para salir")

// const loadProducts = (product) => {
  //   while(product != "ESC") {
    //     if(products.includes(product)) {
      //       alert("Este producto ya está agregado")
      //     } else {
        //       products.push(product)
        //     }
        
        //     product = prompt("Ingrese otro producto o ESC para salir")
        //   }
        //   console.log(products)
        // }
        
        // loadProducts(productoNuevo)

let productsContainer = document.getElementById('productsContainer')

document.addEventListener('DOMContentLoaded', () => {
  cargarDatos()
})

async function cargarDatos() {
  try {
    const response = await fetch('../mockup/products.json')
    const data = await response.json()
    console.log('data', data)
  } catch (error) {
    console.log('error', error)
  }
}