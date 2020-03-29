const {io} = require('../../server/app');

// conexion desde el fronted y detectar cuando un usuario desde el frontend se conecta y se desconecta
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escuchar cliente 
    client.on('enviarMensaje', (data, callback) => {
      console.log(data);
      client.broadcast.emit('enviarMensaje', data);
    });


    // enviar mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido Administrador'
    });
}); 