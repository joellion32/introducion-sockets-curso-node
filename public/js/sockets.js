var socket = io();
var data = document.getElementById('palabra');

// conectar al servidor del backend y escuchar lo que nos emite el servidor
socket.on('connect', function () {
    data.innerHTML = 'conectado al servidor';
    console.log('conectado al servidor');
});

socket.on('disconnect', function () {
    data.innerHTML = 'Desconexion al servidor';
    console.log('Desconexion con el servidor');
});

// Emit enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Joel Toribio',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('respuesta: ', resp);
});


// escuchar informacion
socket.on('enviarMensaje', function (data) {
    console.log(data);
});