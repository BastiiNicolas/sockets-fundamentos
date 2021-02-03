const { io } = require('../server')



io.on('connection', (client) => {

    console.log('Usuario conectado.');
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicación.'
    })

    client.on('disconnect', () => {

        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        /*  if (mensaje.usuario) {
             callback({ resp: 'Todo salío bien.' });
         } else {
             callback({ resp: 'Todo salío mal.' });
         } */

    });

});