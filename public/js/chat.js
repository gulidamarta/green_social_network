const charForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

const socket = io();

//document.getElementsByClassName("chat_link")[0].focus();

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

function addMessageToDB(message){
    console.log(message);
    // let new_message = new Messages();
    // new_message.user_id = user.id;
    // new_message.username = message.username;
    // new_message.text = message.text;
    // new_message.date = Date();
    // new_message.chat_room_id = "5ea59bcd2f869e62241c583a";

}

// Output message to DOM
function outputMessage(message) {
    addMessageToDB(message);

    const div = document.createElement('div');
    div.classList.add('message');
    //document.getElementsByClassName('p_last_chat_msg').innerHTML = message.text;
    div.innerHTML = '<p class="meta">'
        + message.username + ' ' +
        '<span>'
        + message.time
        +'</span></p>' +
        '<p class="text">' +
        message.text +
        '</p>';
    document.querySelector('.chat-messages').appendChild(div);
    document.querySelector('.p_last_chat_msg_selected').innerHTML='Me: ' + message.username;
}