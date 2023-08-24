let cartElements = []

document.addEventListener('DOMContentLoaded', () => {
  getProducts()
  const productosContainer = document.getElementById('productosContainer')
  const cart = document.getElementById('cart')
  const cartContainer = document.getElementById('cartContainer')
  // const cart = document.getElementById('cartProducts')
  productosContainer.addEventListener('click', addToCart)
  cart.addEventListener('click', deleteProduct)

  cartElements = JSON.parse(localStorage.getItem('cart')) || []
  loadDataCart()

  const showCart = document.getElementById('showCart');
  showCart.addEventListener('click', () => {
    console.log('mostrar')
    if (!cartContainer.classList.contains('show')) {
      cartContainer.classList.add('show')
    } else {
      cartContainer.classList.remove('show')
    }
  })
})

const getProducts = async () => {
  try {
    const response = await fetch('../mockup/products.json')
    const products = await response.json()
    loadData(products)
  } catch (error) {
    console.log(error)
  }
}

const loadData = (products) => {
  let body = ''

  products.forEach(product => {
    body += `
  <article>
  <div class="delivery_now">
    Entrega inmediata
  </div>
  <div class="image-container">
    <img loading="lazy" class="main-image" src="${product.image}" alt="">
    <div href="#" class="overlay">
      <a href="product.html?product=${product.id}" data-id="${product.id}" class="overlay-link" style="z-index: 999;">
        <svg class="size" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="white" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
        </svg>
      </a>
    </div>
  </div>
  <h3>${product.title}</h3>

  <div class="price-container">
    <p>$${product.price}</p>
    <span>* IVA incluido</span>
  </div>
  <button class="addToCart">Agregar al pedido <img class="addToCartImg" width="20px"
      src="./assets/shopping-cart-outline-svgrepo-com.svg" alt=""></button>
</article>
  `
  })

  productosContainer.innerHTML = body
}

const addToCart = (e) => {
  if (e.target.classList.contains('addToCart')) {
    const selectedProduct = e.target.parentElement
    readProduct(selectedProduct)
  }

  if (e.target.classList.contains('addToCartImg')) {
    const selectedProduct = e.target.parentElement.parentElement
    readProduct(selectedProduct)
  }
}

const readProduct = (product) => {
  const infoProduct = {
    img: product.querySelector('img').src,
    title: product.querySelector('h3').textContent,
    price: product.querySelector('.price-container p').textContent,
    id: product.querySelector('a').getAttribute('data-id'),
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

  if(cartElements.length > 0) {
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
  } else {
    const p = document.createElement('p')
    p.innerHTML = '* No hay productos en el carrito.'
    cart.appendChild(p)
  }


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