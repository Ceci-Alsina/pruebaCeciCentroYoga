document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

function loadProducts() {
    fetch('http://localhost:3000/api/productos')
        .then(response => response.json())
        .then(products => {
            const productContainer = document.getElementById('productContainer');
            productContainer.innerHTML = '';
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('col-lg-4', 'col-md-6', 'mb-4');
                productCard.innerHTML = `
                    <div class="card h-100">
                        <img src="../uploads/${product.imagen}" class="card-img-top" alt="${product.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${product.nombre}</h5>
                            <p class="card-text">${product.descripcion}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Precio: $${product.precio}</small>
                        </div>
                    </div>
                `;
                productContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error:', error));
}
