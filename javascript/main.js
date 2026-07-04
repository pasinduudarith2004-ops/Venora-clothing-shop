let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;

document.addEventListener("DOMContentLoaded", () => {
    updateCartDisplay();
});

function addToCart() {
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    updateCartDisplay();
    alert("Item successfully added to Venora bag!");
}

function clearCart() {
    cartCount = 0;
    localStorage.setItem('cartCount', cartCount);
    updateCartDisplay();
    alert("Venora bag cleared!");
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cart-count');
    if (cartElement) {
        cartElement.innerText = cartCount;
    }
}