const charForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

const socket = io();

// Message from server
socket.on('message', function (message) {
    console.log(message);
    outputMessage(message);

    // Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message submit
charForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get message text
    const msg = e.target.elements.msg.value;

    // Emit message to the server
    socket.emit('chatMessage', msg);

    // Clear input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

// Output message to DOM
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = '<p class="meta">'
        + message.username + ' ' +
        '<span>'
        + message.time
        +'</span></p>' +
        '<p class="text">' +
        message.text +
        '</p>';
    document.querySelector('.chat-messages').appendChild(div);
}

// (function () {
//     let element = function (id) {
//         return document.getElementById(id);
//     };
//
//     // Get element
//     let status = element('status');
//     let messages = element('messages');
//     let textarea = element('textarea');
//     let username = element('username');
//     let clearBtn = element('clear');
//
//     // set default status
//     let statusDefault = status.textContent;
//
//     let setStatus = function (s) {
//         // set status
//         status.textContent = s;
//
//         if(s !== statusDefault){
//             let delay = setTimeout(function () {
//                 setStatus(statusDefault);
//             }, 4000);
//         }
//     };
//
//     // connect to socket.io
//     let socket = io.connect('http://localhost:4000');
//
//     // check for connection
//     if (socket !== undefined){
//         console.log('Connected to socket...');
//     }
//     else{
//         console.log('Something wrong with socket..');
//     }
// })();