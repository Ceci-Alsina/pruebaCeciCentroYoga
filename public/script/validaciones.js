/* Cada campo del formulario tiene un manejador de eventos oninput que dá un mensaje de validación 
 que se activa si el campo no cumple con la validación especificada por el atributo pattern o 
 si el campo está vacío (atributo required en el HTML).*/
      document.addEventListener("DOMContentLoaded", function () {
        const formulario = document.getElementById('formularioContacto');
    
        // Validación para el nombre
        const nombre = document.getElementById("nombre");
        nombre.oninput = function() {
            nombre.setCustomValidity('');
            if (!nombre.validity.valid) {
                nombre.setCustomValidity("El nombre debe contener entre 1 y 15 letras y no puede estar vacío.");
            }
        };
    
        // Validación para el apellido
        const apellido = document.getElementById("apellido");
        apellido.oninput = function() {
            apellido.setCustomValidity('');
            if (!apellido.validity.valid) {
                apellido.setCustomValidity("El apellido debe contener entre 2 y 15 letras y no puede estar vacío.");
            }
        };
    
        // Validación para el email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,30}$/;
        const email = document.getElementById('email');
        email.oninput = function() {
            if (!emailPattern.test(email.value)) {
                email.setCustomValidity('Correo electrónico no válido');
            } else {
                email.setCustomValidity('');
            }
        };
    
        // Validación para el teléfono
        const telefono = document.getElementById("telefono");
        telefono.oninput = function() {
            telefono.setCustomValidity('');
            if (!telefono.validity.valid) {
                telefono.setCustomValidity("Introduzca un número de teléfono válido y asegúrese de que no esté vacío.");
            }
        };
    
        // Validación para el mensaje
        const mensaje = document.getElementById("mensaje");
        mensaje.oninput = function() {
            mensaje.setCustomValidity('');
            if (!mensaje.validity.valid) {
                mensaje.setCustomValidity("El mensaje no puede estar vacío.");
            }
        };
    
        // Agrega el evento submit para verificar la validez del formulario
        formulario.addEventListener('submit', function(event) {
            if (!formulario.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                // Activar las validaciones de los campos para mostrar mensajes
                nombre.oninput();
                apellido.oninput();
                email.oninput();
                telefono.oninput();
                mensaje.oninput();
            }
        });
    });