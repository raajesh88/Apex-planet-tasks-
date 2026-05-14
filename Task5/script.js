// Shopping Cart Array
let cart = [];

// Add to Cart Function
function addToCart(productName) {
  cart.push(productName);

  displayCart();
}

// Display Cart
function displayCart() {
  const cartList = document.getElementById("cartList");

  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
            ${item}
            <button onclick="removeItem(${index})">
                Remove
            </button>
        `;

    cartList.appendChild(li);
  });
}

// Remove Item
function removeItem(index) {
  cart.splice(index, 1);

  displayCart();
}
