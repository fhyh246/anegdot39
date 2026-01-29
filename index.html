<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>PENTAGON BREAKER: УЛЬТИМАТИВНАЯ ВЕРСИЯ</title>
    <style>
        :root {
            --neon-green: #00ff41;
            --dark-bg: #050505;
            --terminal-text: #00e600;
            --warning-red: #ff3300;
            --blue-link: #00aaff;
            --grey-text: #888;
        }

        body {
            background-color: var(--dark-bg);
            color: var(--terminal-text);
            font-family: 'Consolas', 'Courier New', monospace;
            margin: 0;
            display: flex;
            flex-direction: column;
            height: 100vh;
            overflow: hidden;
            user-select: none;
            position: relative;
        }

        /* Фоновый код Matrix */
        #matrix-bg {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            color: rgba(0, 255, 0, 0.08); /* Чуть светлее, чтобы было видно */
            font-size: 10px;
            overflow: hidden;
            z-index: -1;
            white-space: pre;
            line-height: 1; /* Плотнее строки */
        }

        .header-bar {
            background: rgba(0, 10, 0, 0.8);
            border-bottom: 2px solid var(--neon-green);
            padding: 10px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            text-transform: uppercase;
        }

        .currency-display {
            display: flex;
            justify-content: space-around;
            padding: 15px;
            background: rgba(0, 20, 0, 0.6);
            border-bottom: 1px solid var(--neon-green);
        }

        .currency-item {
            text-align: center;
            padding: 0 10px;
        }
        .currency-label { font-size: 10px; opacity: 0.7; }
        .currency-value { font-size: 20px; font-weight: bold; color: var(--neon-green); }

        .main-interaction {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        #hack-btn {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            border: 3px solid var(--neon-green);
            background: none;
            color: var(--neon-green);
            font-family: 'Consolas', monospace;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 0 15px var(--neon-green);
            transition: all 0.1s ease-out;
            text-shadow: 0 0 5px var(--neon-green);
        }

        #hack-btn:active {
            background: var(--neon-green);
            color: var(--dark-bg);
            box-shadow: 0 0 30px var(--neon-green);
            transform: scale(0.95);
        }

        .status-panel {
            margin-top: 20px;
            font-size: 12px;
            text-align: center;
            min-height: 40px;
        }
        .status-line { margin: 5px 0; }
        .temp-bar-container {
            width: 80%;
            max-width: 300px;
            height: 10px;
            background: #333;
            margin: 10px auto;
            border: 1px solid var(--neon-green);
            position: relative;
        }
        #temp-bar {
            height: 100%;
            width: 0%;
            background: linear-gradient(to right, #008800, var(--neon-green), var(--warning-red));
            transition: width 0.1s linear;
        }

        .shop-area {
            background: rgba(0, 15, 0, 0.95);
            border-top: 2px solid var(--neon-green);
            height: 35vh; /* Высота меню */
            overflow-y: auto;
            padding: 10px;
            display: flex;
            flex-direction: column;
        }

        .tab-buttons {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
        }
        .tab-btn {
            background: none;
            border: 1px solid var(--neon-green);
            color: var(--neon-green);
            padding: 8px 15px;
            margin: 0 3px;
            cursor: pointer;
            font-family: inherit;
            font-size: 12px;
            transition: background 0.2s, color 0.2s;
        }
        .tab-btn.active { background: var(--neon-green); color: var(--dark-bg); }

        .upgrade-list { flex-grow: 1; }
        .upgrade-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid rgba(0, 50, 0, 0.5);
            margin-bottom: 5px;
            font-size: 12px;
        }
        .upgrade-card:hover { background: rgba(0, 30, 0, 0.5); }

        .upgrade-info h4 { margin: 0; font-size: 14px; color: var(--neon-green); }
        .upgrade-info p { margin: 2px 0; font-size: 10px; color: var(--grey-text); }
        .upgrade-cost { font-weight: bold; color: var(--neon-green); }

        .buy-btn {
            background: var(--neon-green);
            color: var(--dark-bg);
            border: none;
            padding: 8px 12px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.2s;
        }
        .buy-btn:disabled { background: #003300; color: #006600; cursor: not-allowed; }

        /* Отчивки */
        #achievements-panel {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 400px;
            background: rgba(0, 0, 0, 0.95);
            border: 2px solid var(--neon-green);
            padding: 20px;
            box-shadow: 0 0 30px var(--neon-green);
            display: none; /* Скрыто по умолчанию */
            z-index: 1000;
            text-align: left;
        }
        .achievement-item {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            color: var(--grey-text);
        }
        .achievement-item.unlocked { color: var(--neon-green); }
        .achievement-item span { margin-left: 10px; }
        .close-btn {
            background: var(--warning-red);
            color: #fff;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            margin-top: 15px;
            font-size: 12px;
        }

        /* Визуальные эффекты */
        .glitch-effect { animation: glitch 0.1s linear infinite; }
        @keyframes glitch {
            0% { transform: translate(1px, 1px); filter: hue-rotate(0deg); }
            20% { transform: translate(-2px, -1px); filter: hue-rotate(90deg); }
            40% { transform: translate(-1px, 2px); }
            60% { transform: translate(3px, -1px); filter: hue-rotate(180deg); }
            80% { transform: translate(-2px, 0px); }
            100% { transform: translate(1px, 1px); filter: hue-rotate(0deg); }
        }

        .data-float {
            position: absolute;
            color: var(--neon-green);
            font-size: 14px;
            pointer-events: none;
            animation: floatUp 1s ease-out forwards;
        }
        @keyframes floatUp {
            to { transform: translateY(-50px) translateX(20px); opacity: 0; }
        }

        /* Звуки */
        audio { display: none; }
    </style>
</head>
<body id="game-body">

    <audio id="click-sfx" src="sfx/click.mp3" preload="auto"></audio>
    <audio id="buy-sfx" src="sfx/buy.mp3" preload="auto"></audio>
    <audio id="alert-sfx" src="sfx/alert.mp3" preload="auto"></audio>
    <audio id="ambient-sfx" src="sfx/ambient.mp3" loop preload="auto"></audio>

    <div id="matrix-bg"></div>

    <div class="header-bar">
        <span>СТАТУС: ПРОГРЕСС</span>
        <div>
            <button class="tab-btn" onclick="showAchievements()">ОТЧИВКИ</button>
            <button class="tab-btn" onclick="resetGame()" style="border-color: var(--warning-red); color: var(--warning-red);">СБРОС</button>
        </div>
    </div>

    <div class="currency-display">
        <div class="currency-item">
            <div class="currency-label">БИТКОИНЫ</div>
            <div class="currency-value" id="btc-val">0.000000</div>
        </div>
        <div class="currency-item">
            <div class="currency-label">ДАННЫЕ</div>
            <div class="currency-value" id="data-val">0.00 GB</div>
        </div>
        <div class="currency-item">
            <div class="currency-label">КУРС BTC/GB</div>
            <div class="currency-value" id="exchange-rate">1.00</div>
        </div>
    </div>

    <div class="main-interaction" id="main-display">
        <button id="hack-btn" onclick="doHack(event)">ВЗЛОМ</button>
        <div class="status-panel">
            <div class="status-line">Температура: <span id="temp-display">0</span>°C</div>
            <div class="temp-bar-container"><div id="temp-bar"></div></div>
            <div class="status-line" id="system-status">Система стабильна.</div>
        </div>
    </div>

    <div class="shop-area">
        <div class="tab-buttons">
            <button class="tab-btn active" data-tab="hardware">ЖЕЛЕЗО</button>
            <button class="tab-btn" data-tab="software">СОФТ</button>
            <button class="tab-btn" data-tab="exchange">ОБМЕН</button>
        </div>
        <div id="shop-container" class="upgrade-list">
            </div>
    </div>

    <div id="achievements-panel">
        <h3 style="color: var(--neon-green);">ДОСТИЖЕНИЯ</h3>
        <div id="achievements-list">
            </div>
        <button class="close-btn" onclick="hideAchievements()">ЗАКРЫТЬ</button>
    </div>

    <script>
        // Игровое состояние
        let state = {
            btc: 0,
            data: 0,
            clickPower: 0.00001, // BTC за клик
            autoDataPerSecond: 0, // GB в секунду
            multiplier: 1, // Общий множитель
            temperature: 0, // Текущая температура
            coolingEfficiency: 0.1, // Насколько хорошо сбивается темп.
            traceLevel: 0, // Уровень слежки
            exchangeRate: 1.0, // Курс BTC/GB
            achievements: {
                firstHack: { name: "Первый Взлом", desc: "Успешно взломать систему.", unlocked: false },
                btcMillionaire: { name: "Крипто-Миллионер", desc: "Накопить 1 BTC.", unlocked: false },
                dataHoarder: { name: "Мастер Данных", desc: "Накопить 1000 GB данных.", unlocked: false },
                overclocked: { name: "Разгонщик", desc: "Температура достигла 90°C.", unlocked: false },
                cleanGetaway: { name: "Чистый Уход", desc: "Успешно сбросить слежку 5 раз.", unlocked: false }
            },
            upgrades: {
                hardware: [
                    { id: 'gpu', name: "Видеокарта (GPU)", desc: "+0.00002 BTC/клик", costBTC: 0.0001, costData: 0, level: 0 },
                    { id: 'cooler', name: "Жидкостное Охлаждение", desc: "-0.05 Темп. за такт", costBTC: 0.0005, costData: 0, level: 0 },
                    { id: 'ssd', name: "SSD-Накопитель", desc: "+0.1 GB/клик", costBTC: 0, costData: 0.001, level: 0 }
                ],
                software: [
                    { id: 'botnet', name: "Ботнет-ферма", desc: "+5 GB/сек", costBTC: 0.001, costData: 100, level: 0 },
                    { id: 'proxy', name: "Анонимайзер (Proxy)", desc: "-0.05% Слежки за такт", costBTC: 0.002, costData: 200, level: 0 },
                    { id: 'ai_core', name: "Ядро ИИ", desc: "Множитель x2 к BTC/клик", costBTC: 0.01, costData: 0, level: 0 }
                ]
            }
        };

        // Загрузка/Сохранение
        function loadGame() {
            const saved = localStorage.getItem('hackerSimSave');
            if (saved) {
                state = JSON.parse(saved);
                // Проверяем новые ачивки, если они добавлены в код после последнего сохранения
                for (let achId in state.achievements) {
                    if (!state.achievements[achId].name && state.achievements[achId].unlocked === undefined) {
                        state.achievements[achId] = { ...state.achievements[achId], ...state.achievements[achId] }; // Обновляем ачивку новыми полями
                    }
                }
            }
            updateUI();
            renderShop('hardware'); // Рендерим магазин при загрузке
        }

        function saveGame() {
            localStorage.setItem('hackerSimSave', JSON.stringify(state));
            const toast = document.getElementById('save-toast');
            // Если есть элемент "save-toast", показываем его
            if (toast) {
                toast.style.display = 'block';
                setTimeout(() => toast.style.display = 'none', 1000);
            }
        }

        // SFX
        const sfx = {
            click: new Audio('sfx/click.mp3'), // Замени на реальные пути к звукам
            buy: new Audio('sfx/buy.mp3'),
            alert: new Audio('sfx/alert.mp3'),
            ambient: new Audio('sfx/ambient.mp3')
        };
        // Попытка воспроизвести фоновую музыку (потребуется взаимодействие пользователя)
        document.addEventListener('click', () => {
            if (sfx.ambient.paused) {
                sfx.ambient.play().catch(e => console.log("Ambient audio blocked:", e));
            }
        }, { once: true });


        // Основные действия
        function doHack(e) {
            sfx.click.play();
            let btcGain = state.clickPower * state.multiplier;
            let dataGain = 0.1 * state.multiplier;

            state.btc += btcGain;
            state.data += dataGain;
            state.temperature += 1; // Температура растет с каждым кликом
            state.traceLevel += 0.5; // Уровень слежки растет

            if (navigator.vibrate) navigator.vibrate(25);

            // Визуальный глитч
            document.getElementById('game-body').classList.add('glitch-effect');
            setTimeout(() => document.getElementById('game-body').classList.remove('glitch-effect'), 100);

            // Всплывающее число
            const float = document.createElement('div');
            float.className = 'data-float';
            float.innerText = `+${btcGain.toFixed(6)} BTC`;
            float.style.left = e.clientX + "px";
            float.style.top = e.clientY + "px";
            document.body.appendChild(float);
            setTimeout(() => float.remove(), 1000);

            checkAchievements('hack'); // Проверка ачивок
            updateUI();
        }

        function buyUpgrade(category, index) {
            const up = state.upgrades[category][index];
            let canBuy = false;

            if (up.costBTC > 0 && state.btc >= up.costBTC) {
                canBuy = true;
                state.btc -= up.costBTC;
            } else if (up.costData > 0 && state.data >= up.costData) {
                canBuy = true;
                state.data -= up.costData;
            }

            if (canBuy) {
                sfx.buy.play();
                up.level++;
                // Логика улучшений
                if (up.id === 'gpu') state.clickPower += 0.00002 * state.multiplier;
                if (up.id === 'cooler') state.coolingEfficiency += 0.05;
                if (up.id === 'ssd') state.dataPerClick += 0.1 * state.multiplier;
                if (up.id === 'botnet') state.autoDataPerSecond += 5 * state.multiplier;
                if (up.id === 'proxy') state.traceLevelDecay += 0.01; // Новая переменная для уменьшения слежки
                if (up.id === 'ai_core') state.multiplier *= 2;

                up.costBTC = Math.floor(up.costBTC * 1.5 * 1000000) / 1000000; // Удорожание
                up.costData = Math.floor(up.costData * 1.5);

                renderShop(currentTab); // Перерисовываем текущую вкладку
                updateUI();
                saveGame();
            } else {
                // Можно добавить визуальный или звуковой сигнал, что недостаточно средств
            }
        }

        // Обновление интерфейса
        function updateUI() {
            document.getElementById('btc-val').innerText = state.btc.toFixed(6);
            document.getElementById('data-val').innerText = state.data.toFixed(2) + " GB";
            document.getElementById('temp-display').innerText = Math.floor(state.temperature);
            document.getElementById('temp-bar').style.width = state.temperature + "%";

            if (state.temperature >= 90) {
                document.getElementById('system-status').style.color = var(--warning-red);
                document.getElementById('system-status').innerText = "КРИТИЧЕСКИЙ ПЕРЕГРЕВ! СКОРОСТЬ ВЗЛОМА СНИЖЕНА!";
            } else if (state.temperature >= 70) {
                document.getElementById('system-status').style.color = var(--warning-red);
                document.getElementById('system-status').innerText = "ВНИМАНИЕ: СИСТЕМА ГРЕЕТСЯ!";
            } else {
                document.getElementById('system-status').style.color = var(--terminal-text);
                document.getElementById('system-status').innerText = "Система стабильна.";
            }

            // Проверка ачивок
            if (state.btc >= 1 && !state.achievements.btcMillionaire.unlocked) {
                unlockAchievement('btcMillionaire');
            }
            if (state.data >= 1000 && !state.achievements.dataHoarder.unlocked) {
                unlockAchievement('dataHoarder');
            }
            if (state.temperature >= 90 && !state.achievements.overclocked.unlocked) {
                unlockAchievement('overclocked');
            }
        }

        let currentTab = 'hardware'; // Текущая активная вкладка магазина
        function renderShop(category) {
            currentTab = category;
            const container = document.getElementById('shop-container');
            container.innerHTML = ''; // Очищаем магазин
            
            state.upgrades[category].forEach((up, index) => {
                const costBTC = up.costBTC > 0 ? `${up.costBTC.toFixed(6)} BTC` : '';
                const costData = up.costData > 0 ? `${up.costData.toFixed(0)} GB` : '';
                const costDisplay = [costBTC, costData].filter(Boolean).join(' / ');

                const canBuy = (up.costBTC === 0 || state.btc >= up.costBTC) && (up.costData === 0 || state.data >= up.costData);

                container.innerHTML += `
                    <div class="upgrade-card">
                        <div class="upgrade-info">
                            <h4>${up.name} [LVL ${up.level}]</h4>
                            <p>${up.desc}</p>
                        </div>
                        <button class="buy-btn" ${canBuy ? '' : 'disabled'} onclick="buyUpgrade('${category}', ${index})">
                            ${costDisplay}
                        </button>
                    </div>
                `;
            });

            // Обновление активных кнопок вкладок
            document.querySelectorAll('.tab-btn').forEach(btn => {
                if (btn.dataset.tab === category) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        // Механика Отчивок
        function unlockAchievement(id) {
            if (!state.achievements[id].unlocked) {
                state.achievements[id].unlocked = true;
                sfx.alert.play(); // Звук получения ачивки
                alert(`ДОСТИЖЕНИЕ РАЗБЛОКИРОВАНО: ${state.achievements[id].name}`);
                saveGame();
            }
        }

        function showAchievements() {
            const panel = document.getElementById('achievements-panel');
            const list = document.getElementById('achievements-list');
            list.innerHTML = '';
            for (const id in state.achievements) {
                const ach = state.achievements[id];
                list.innerHTML += `
                    <div class="achievement-item ${ach.unlocked ? 'unlocked' : ''}">
                        ${ach.unlocked ? '✅' : '⬜'} <span>${ach.name}: ${ach.desc}</span>
                    </div>
                `;
            }
            panel.style.display = 'block';
        }

        function hideAchievements() {
            document.getElementById('achievements-panel').style.display = 'none';
        }

        function checkAchievements(type) {
            if (type === 'hack' && !state.achievements.firstHack.unlocked) {
                unlockAchievement('firstHack');
            }
            // Другие проверки ачивок
        }

        // Циклы игры
        setInterval(() => {
            // Пассивная добыча данных
            state.data += state.autoDataPerSecond / 10;

            // Остывание системы
            state.temperature = Math.max(0, state.temperature - state.coolingEfficiency);

            // Снижение уровня слежки
            state.traceLevel = Math.max(0, state.traceLevel - (state.traceLevelDecay || 0));

            // Обновление курса крипты (для примера - рандомное изменение)
            state.exchangeRate = Math.max(0.5, Math.min(2.0, state.exchangeRate + (Math.random() - 0.5) * 0.01));
            document.getElementById('exchange-rate').innerText = state.exchangeRate.toFixed(2);


            updateUI();
        }, 100); // 10 раз в секунду

        // Автосохранение раз в 10 секунд
        setInterval(saveGame, 10000);

        function resetGame() {
            if (confirm("ВНИМАНИЕ! ВСЕ ДАННЫЕ БУДУТ УДАЛЕНЫ. ПРОДОЛЖИТЬ?")) {
                localStorage.clear();
                location.reload(); // Перезагружаем страницу для полного сброса
            }
        }

        // Инициализация
        loadGame();
        renderShop('hardware'); // Показываем вкладку "ЖЕЛЕЗО" по умолчанию

        // Добавляем обработчики для кнопок вкладок
        document.querySelectorAll('.tab-btn').forEach(button => {
            button.addEventListener('click', () => {
                if (button.dataset.tab) {
                    renderShop(button.dataset.tab);
                }
            });
        });

        // Генерация фонового кода Matrix
        function generateMatrixBackground() {
            const chars = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>/?`~';
            let code = '';
            const screenHeight = window.innerHeight;
            const charHeight = 10; // Размер шрифта
            const numLines = Math.ceil(screenHeight / charHeight);
            const numCols = Math.ceil(window.innerWidth / 6); // Примерно 6px на символ

            for (let i = 0; i < numLines * numCols; i++) {
                code += chars[Math.floor(Math.random() * chars.length)] + (Math.random() < 0.005 ? '\n' : ' ');
            }
            document.getElementById('matrix-bg').innerText = code;
        }
        setInterval(generateMatrixBackground, 100); // Обновляем фон каждые 100мс
        generateMatrixBackground(); // И сразу генерируем при загрузке

    </script>

</body>
</html>
