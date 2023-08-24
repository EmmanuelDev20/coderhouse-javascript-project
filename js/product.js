let cartElements = []

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = Number(urlParams.get('product'));
  getProduct(productId)

  cartElements = JSON.parse(localStorage.getItem('cart')) || []

  const cart = document.getElementById('cart')


  cart.addEventListener('click', deleteProduct)

  loadDataCart()

  const showCart = document.getElementById('showCart');
  showCart.addEventListener('click', () => {
    if (!cartContainer.classList.contains('show')) {
      cartContainer.classList.add('show')
    } else {
      cartContainer.classList.remove('show')
    }
  })
})

const probando = () => {
  console.log('probando')
}

let product = null

const getProduct = async (productId) => {
  try {
    const response = await fetch('../mockup/products.json')
    const products = await response.json()
    const index = products.findIndex((product) => product.id === productId)
    if (index > -1) {
      product = products[index]
      loadData(products[index])
    } else {
      console.log('Este producto no existe')
    }

  } catch (error) {
    console.log(error)
  }
}

const loadData = (product) => {
  const productContainer = document.querySelector('.product-container')
  
  const productDefined = `
    <div class="left">
      <img src="${product.image}" alt="">
    </div>

    <div class="right">
      <h2>${product.title}</h2>
      <p class="description">${product.description}</p>
      <p class="price">$${product.price}</p>
      <button class="addToCartProduct" id="addToCartBtn">Agregar al pedido 
        <img width="20px"
          src="./assets/shopping-cart-outline-svgrepo-com.svg" alt="ícono de carrito">
      </button>
    </div>
  `
  productContainer.innerHTML = productDefined
  const addToCartBtn = document.getElementById('addToCartBtn')
  addToCartBtn.addEventListener('click', addToCart)
}


const addToCart = (e) => {
  e.preventDefault()
  const { image, title, price, id } = product

  const infoProduct = {
    img: image,
    title: title,
    price: price,
    id: JSON.stringify(id),
    qty: 1
  }

  const exists = cartElements.some(product => product.id === infoProduct.id)

  if (exists) {
    const products = cartElements.map(product => {
      if (product.id === infoProduct.id) {
        product.qty++
        return product
      } else {
        return product
      }
    })
  } else {
    cartElements = [...cartElements, infoProduct]
  }

  Swal.fire({
    title: '¡Su producto fue agregado al carrito!',
    text: '¿Deseas continuar?',
    icon: 'success',
    confirmButtonText: 'Ok',
    color: '#FFFFFF',
    background: '#011627'
  })

  loadDataCart()
}



const loadDataCart = () => {

  cleanCart()

  cartElements.forEach(product => {
    const { img, title, qty, price, id } = product
    const div = document.createElement('div')
    div.classList.add('product-cart')
    div.innerHTML = `
      <img src="${img}" alt="imagen de producto en carrito">
      <div class="right">
        <header>${title}</header>
        <p>Cantidad: ${qty}</p>
        <p>${price}</p>
        <a href="#" class="delete-product" data-id="${id}">x</a>
      </div>
    `
    
    cart.appendChild(div)
  })

  saveLocal()
}


const saveLocal = () => {
  localStorage.setItem('cart', JSON.stringify(cartElements))
}

const cleanCart = () => {
  cart.innerHTML = ''
}

const deleteProduct = (e) => {
  e.preventDefault();

  if (e.target.classList.contains('delete-product')) {
    const productId = e.target.getAttribute('data-id')
    cartElements = cartElements.filter(product => product.id !== productId)
    loadDataCart()
  }
}