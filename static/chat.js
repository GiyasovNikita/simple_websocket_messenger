const ws = new WebSocket("ws://localhost:8888/websocket");


ws.onmessage = function (event) {
    try {
        const data = JSON.parse(event.data);

        if (data.type === "welcome") {
            displayChatMessage("System", data.message);
        }

        if (data.type === "message") {
            const { sender, message } = data.data;
            displayChatMessage(sender, message);
        }

        if (data.type === "clients") {
            updateClientsList(data.clients);
        }
    } catch (error) {
        console.error("Error processing incoming message:", error, event.data);
    }
};

function displayChatMessage(sender, message) {
    const chat = document.getElementById("messages");
    const messageElement = document.createElement("div");
    messageElement.textContent = `${sender}: ${message}`;
    chat.appendChild(messageElement);
    chat.scrollTop = chat.scrollHeight;
}

function updateClientsList(clients) {
    const clientsList = document.getElementById("clients");
    clientsList.innerHTML = "<strong>Клиенты онлайн:</strong>";

    clients.forEach((client) => {
        const clientItem = document.createElement("div");
        clientItem.textContent = client;
        clientsList.appendChild(clientItem);
    });
}

function sendMessage() {
    const input = document.getElementById("input");
    if (!input) {
        console.error("Поле ввода с id='input' не найдено!");
        return;
    }

    const message = input.value.trim();
    console.log("Отправка сообщения:", message);
    if (message) {
        ws.send(message);
        input.value = "";
    }
}
