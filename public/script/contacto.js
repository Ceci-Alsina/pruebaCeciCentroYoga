document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const formData = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        edad: document.querySelector('input[name="edad"]:checked').value,
        genero: document.getElementById('genero').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        mensaje: document.getElementById('mensaje').value
    };

    fetch('http://localhost:3000/api/contactos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Contacto enviado con éxito');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el contacto');
    });
});
