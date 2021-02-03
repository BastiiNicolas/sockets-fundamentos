var socket = io();
socket.on('connect', function() {

    console.log('Conectado al servidor.');
});

socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor.');
});

// Emit para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Bastian',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);
});

// Escuchar información.
socket.on('enviarMensaje', function(mensaje, callback) {

    console.log('Servidor', mensaje);
});