function distribute() {
    const content = document.getElementById('inputList').value;
    const cashTarget = parseInt(document.getElementById('cashAmount').value, 10);
    const cardTarget = parseInt(document.getElementById('cardAmount').value, 10);
    
    if (isNaN(cashTarget) || isNaN(cardTarget)) {
        alert("Пожалуйста, введите корректные суммы для наличных и безналичных расчетов.");
        return;
    }
    
    const lines = content.split('\n').map(line => line.trim()).filter(line => line !== '');
    
    const cashItems = [];
    const cardItems = [];
    
    let cashSum = 0;
    let cardSum = 0;
    
    lines.forEach(line => {
        const match = line.match(/–\s*(\d+)₽/);
        if (match) {
            const price = parseInt(match[1], 10);
            
            if (cashSum + price <= cashTarget) {
                cashItems.push(line);
                cashSum += price;
            } else if (cardSum + price <= cardTarget) {
                cardItems.push(line);
                cardSum += price;
            } else {
                alert("Не хватает суммы для точного распределения.");
                return;
            }
        }
    });
    
    let resultText = `Наличные:\n${cashItems.join('\n')}\n\nИтоговая сумма наличных: ${cashSum}₽\n\n`;
    resultText += `Безнал:\n${cardItems.join('\n')}\n\nИтоговая сумма безнала: ${cardSum}₽\n`;
    
    if (Math.abs(cashSum - cashTarget) > 0.01 || Math.abs(cardSum - cardTarget) > 0.01) {
        resultText += `\nПредупреждение: Некоторая сумма не распределена точно.`;
    }
    
    document.getElementById('result').value = resultText;
}