# Простейший мессенджер с использованием WebSocket и Redis
Этот проект представляет собой простейший мессенджер, который использует WebSocket для двусторонней связи между клиентами и сервером, а также Redis для реализации механизма Pub/Sub (публикация/подписка). Все сообщения отправляются и принимаются в реальном времени через WebSocket и Redis.

### Описание
- WebSocket используется для обмена сообщениями между клиентами и сервером в реальном времени.
- Redis используется как брокер сообщений, который реализует механизм Pub/Sub для того, чтобы все подключенные клиенты могли получать сообщения.
- Сервер написан с использованием Python фреймворка Tornado.

### Установка и запуск
1. Клонирование репозитория
    ```bash
    git clone https://github.com/GiyasovNikita/simple_websocket_messenger.git
    cd simple_websocket_messenger
    ```

2. Запустите Redis
    ```bash
    redis-server.exe  redis.windows.conf
    ```

3. Запустите приложение
    ```bash
      python main.py
    ```
   Сервер будет слушать на порту 8888.

4. Откройте браузер
   ```
   http://localhost:8888
   ```
   
   Вам будет доступна веб-страница с чатом, где вы можете отправлять сообщения, а все пользователи, подключенные к серверу, будут видеть эти сообщения в реальном времени.