

const messages = [
    "Ты моя самая большая радость! ❤️",
    "Люблю тебя до луны и обратно! 🌙✨",
    "Ты делаешь мой мир ярче! 🌸💖",
    "Ты моё счастье! 😊💞",
    "Ты моё сердечко! 💕"
];

function showMessage() {
    const message = document.getElementById("loveMessage");
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.innerText = randomMessage;
    message.style.opacity = 1;
    setTimeout(() => { message.style.opacity = 0; }, 2000);
}