function distribute() {
    const content = document.getElementById('inputList').value;
    const cashTarget = parseInt(document.getElementById('cashAmount').value, 10);
    const cardTarget = parseInt(document.getElementById('cardAmount').value, 10);
    const errorMessageElement = document.getElementById('error-message');
    const consoleElement = document.getElementById('console');
    consoleElement.textContent = ''; // Очистка консоли
    errorMessageElement.textContent = ''; // Очистка предыдущего сообщения об ошибке
    
    logToConsole("Начало распределения товаров...");
    
    if (isNaN(cashTarget) || isNaN(cardTarget)) {
        errorMessageElement.textContent = "Пожалуйста, введите корректные суммы для наличных и безналичных расчетов.";
        logToConsole("Ошибка: некорректные суммы для наличных и/или безналичных расчетов.");
        return;
    }
    
    if (content.trim() === '') {
        errorMessageElement.textContent = "Список товаров не должен быть пустым.";
        logToConsole("Ошибка: список товаров пуст.");
        return;
    }
    
    const lines = content.split('\n').map(line => line.trim()).filter(line => line !== '');
    
    const cashItems = [];
    const cardItems = [];
    
    let cashSum = 0;
    let cardSum = 0;
    let hasError = false;
    
    logToConsole("Начинается распределение товаров по группам...");
    
    lines.forEach(line => {
        const match = line.match(/–\s*(\d+)₽/);
        if (match) {
            const price = parseInt(match[1], 10);
            logToConsole(`Обработано: ${line} с ценой ${price}₽`);
            
            if (cashSum + price <= cashTarget) {
                cashItems.push(line);
                cashSum += price;
                logToConsole(`Добавлено в наличные: ${line} (Текущая сумма: ${cashSum}₽)`);
            } else if (cardSum + price <= cardTarget) {
                cardItems.push(line);
                cardSum += price;
                logToConsole(`Добавлено в безнал: ${line} (Текущая сумма: ${cardSum}₽)`);
            } else {
                hasError = true;
                logToConsole(`Ошибка: не удалось распределить товар: ${line}`);
            }
        } else {
            hasError = true;
            logToConsole(`Ошибка: неверный формат строки: ${line}`);
        }
    });
    
    if (hasError) {
        errorMessageElement.textContent = "Не удалось корректно распределить все товары. Проверьте правильность списка или сумму.";
        logToConsole("Распределение завершено с ошибками.");
        return;
    }
    
    let resultText = `Наличные:\n${cashItems.join('\n')}\n\nИтоговая сумма наличных: ${cashSum}₽\n\n`;
    resultText += `Безнал:\n${cardItems.join('\n')}\n\nИтоговая сумма безнала: ${cardSum}₽\n`;
    
    if (Math.abs(cashSum - cashTarget) > 0.01 || Math.abs(cardSum - cardTarget) > 0.01) {
        resultText += `\nПредупреждение: Некоторая сумма не распределена точно.`;
        logToConsole("Предупреждение: распределение сумм не совсем точно.");
    }
    
    logToConsole("Распределение завершено успешно.");
    document.getElementById('result').value = resultText;
}

function logToConsole(message) {
    const consoleElement = document.getElementById('console');
    consoleElement.textContent += message + '\n';
    consoleElement.scrollTop = consoleElement.scrollHeight;
}