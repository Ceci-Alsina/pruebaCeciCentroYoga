document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

function loadProducts() {
    fetch('http://localhost:3000/api/productos')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('productList');
            productList.innerHTML = '';
            products.forEach(product => {
                const productRow = document.createElement('tr');
                productRow.innerHTML = `
                    <td>${product.id_producto}</td>
                    <td>${product.nombre}</td>
                    <td>${product.precio}</td>
                    <td>${product.descripcion}</td>
                    <td>${product.stock}</td>
                    <td>${product.fk_categoria}</td>
                    <td><img src="../uploads/${product.imagen}" alt="${product.nombre}" class="small-img"></td>
                    <td>
                        <button class="btn btn-edit" onclick="editProduct(${product.id_producto})">Modificar</button>
                        <button class="btn btn-delete" onclick="deleteProduct(${product.id_producto})">Eliminar</button>
                    </td>
                `;
                productList.appendChild(productRow);
            });
        })
        .catch(error => console.error('Error:', error));
}

function showProductForm() {
    const formContainer = document.getElementById('productForm');
    formContainer.style.display = 'block';
    formContainer.innerHTML = `
        <form id="productFormContent" enctype="multipart/form-data">
            <input type="hidden" id="productId" name="productId">
            <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>
            </div>
            <div class="form-group">
                <label for="precio">Precio:</label>
                <input type="number" id="precio" name="precio" required>
            </div>
            <div class="form-group">
                <label for="descripcion">Descripción:</label>
                <textarea id="descripcion" name="descripcion" required></textarea>
            </div>
            <div class="form-group">
                <label for="stock">Stock:</label>
                <input type="number" id="stock" name="stock" required>
            </div>
            <div class="form-group">
                <label for="fk_categoria">Categoría:</label>
                <input type="number" id="fk_categoria" name="fk_categoria" required>
            </div>
            <div class="form-group">
                <label for="imagen">Imagen:</label>
                <input type="file" id="imagen" name="imagen">
            </div>
            <button type="submit" class="btn">Guardar Producto</button>
        </form>
    `;
    document.getElementById('productFormContent').addEventListener('submit', submitProductForm);
}

function closeProductForm() {
    const formContainer = document.getElementById('productForm');
    formContainer.style.display = 'none';
}

function submitProductForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productId = document.getElementById('productId').value;

    let url = 'http://localhost:3000/api/productos';
    let method = 'POST';
    if (productId) {
        url = `http://localhost:3000/api/productos/${productId}`;
        method = 'PUT';
    }

    fetch(url, {
        method: method,
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Producto guardado con éxito');
        loadProducts();
        event.target.reset();
        closeProductForm();
    })
    .catch(error => console.error('Error:', error));
}

function editProduct(id) {
    fetch(`http://localhost:3000/api/productos/${id}`)
        .then(response => response.json())
        .then(product => {
            showProductForm();
            document.getElementById('productId').value = product.id_producto;
            document.getElementById('nombre').value = product.nombre;
            document.getElementById('precio').value = product.precio;
            document.getElementById('descripcion').value = product.descripcion;
            document.getElementById('stock').value = product.stock;
            document.getElementById('fk_categoria').value = product.fk_categoria;
            // No cargar la imagen en el campo de archivo
        })
        .catch(error => console.error('Error:', error));
}

function deleteProduct(id) {
    fetch(`http://localhost:3000/api/productos/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Producto eliminado con éxito');
            loadProducts();
        } else {
            alert('Error al eliminar el producto');
        }
    })
    .catch(error => console.error('Error:', error));
}

function filterProducts() {
    const filterValue = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#productList tr');
    rows.forEach(row => {
        const categoryCell = row.cells[1]; // Columna de nombre (se busca por nombre de producto)
        if (categoryCell) {
            const category = categoryCell.textContent.toLowerCase();
            if (category.includes(filterValue)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    });
}
