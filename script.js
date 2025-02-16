document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.getElementById("cart-icon");
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeCart = document.getElementById("close-cart");

    // Open cart
    cartIcon.addEventListener("click", function() {
        cartSidebar.classList.add("open");
    });

    // Close cart
    closeCart.addEventListener("click", function() {
        cartSidebar.classList.remove("open");
    });

    // Load cart from localStorage when page loads
    loadCart();
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add an item to the cart
function addToCart(name, price, imageSrc) {
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1, imageSrc });
    }

    saveCart();
    updateCartUI();
}

function updateCartUI() {
    let cartContainer = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    let cartCounter = document.getElementById("cart-counter");

    if (!cartContainer || !cartTotal || !cartCounter) return; // Eviter erreurs si éléments manquants

    cartContainer.innerHTML = ""; // Vider les items précédents
    let total = 0;
    let itemCount = 0;

    cart.forEach((item, index) => {
        let itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
            <div class="cart-item-content">
                <img src="${item.imageSrc}" width="50">
                <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <button class="cart-remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(itemElement);

        total += item.price * item.quantity;
        itemCount += item.quantity;
    });

    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
    cartCounter.innerText = itemCount;
}
function removeFromCart(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1); // Supprimer complètement l'article si la quantité est 1
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartUI();
}
function addToCart(name, price, imageSrc) {
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1, imageSrc });
    }

    saveCart();
    updateCartUI();
}
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartUI();
}

