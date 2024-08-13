const socket = io();
//Dom Elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let button = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('action');

button.addEventListener('click',function(){
    socket.emit('chat:message',{
        username: username.value,
        message: message.value
    });
    console.log();
});