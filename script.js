// SAMPLE PRODUCTS
const products = [
  {id: 1, name: "Polyurethane Bush Set", priceZAR: 450},
  {id: 2, name: "3D Printed Throttle Body", priceZAR: 1200},
  {id: 3, name: "Suspension Mount Kit", priceZAR: 750},
];

// CART
let cart = [];

// RENDER PRODUCTS
const productGrid = document.getElementById('productGrid');

function renderProducts() {
  productGrid.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ZAR ${product.priceZAR}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(card);
  });
}

renderProducts();

// ADD TO CART
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

// RENDER CART
function renderCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.priceZAR;
    const div = document.createElement('div');
    div.innerHTML = `${item.name} - ZAR ${item.priceZAR} <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItems.appendChild(div);
  });
  document.getElementById('cartTotal').textContent = `Total: ZAR ${total}`;
}

// REMOVE FROM CART
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// CHECKOUT (PLACEHOLDER)
function checkout() {
  if(cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Checkout functionality coming soon!");
}

// ORDER TRACKING (BASIC)
function trackOrder(e) {
  e.preventDefault();
  const orderId = document.getElementById('orderId').value.trim();
  const result = document.getElementById('trackResult');
  if(orderId === "") {
    result.textContent = "Please enter a valid order ID.";
    return;
  }
  // Placeholder tracking logic
  result.textContent = `Order ${orderId} is being processed.`;
}
