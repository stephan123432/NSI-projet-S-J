<script>
    function addToCart(name, price) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if item already exists in cart
        let existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity if already in cart
        } else {
            cart.push({ name, price, quantity: 1 }); // Add new item
        }

        // Save cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update cart counter
        updateCartCounter();
    }

    function updateCartCounter() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cart-counter').textContent = totalItems;
    }

    // Run on page load to keep counter updated
    document.addEventListener("DOMContentLoaded", updateCartCounter);
</script>
