const form = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messageList = document.getElementById('messageList');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = messageInput.value;
    messageInput.value = '';

    fetch('/addMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle successful response, e.g., update the message list
    })
    .catch(error => {
        console.error(error);
        // Handle error
    });
});