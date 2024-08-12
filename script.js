function distribute() {
    const content = document.getElementById('inputList').value;
    const cashTarget = parseInt(document.getElementById('cashAmount').value, 10);
    const cardTarget = parseInt(document.getElementById('cardAmount').value, 10);
    
    if (isNaN(cashTarget) || isNaN(cardTarget)) {
        alert("Пожалуйста, введите корректные суммы для наличных и безналичных расчетов.");
        return;
    }
    
    const lines = content.split('\n').map(line => line.trim()).filter(line => line !== '');
    
    // Отображаем исходный список
    document.getElementById('original').innerHTML = `<ul>${lines.map(line => `<li>${line}</li>`).join('')}</ul>`;
    
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
    
    const result = `
        <h2>Наличные</h2>
        <ul>${cashItems.map(item => `<li>${item}</li>`).join('')}</ul>
        <p>Итоговая сумма наличных: ${cashSum}₽</p>
        
        <h2>Безнал</h2>
        <ul>${cardItems.map(item => `<li>${item}</li>`).join('')}</ul>
        <p>Итоговая сумма безнала: ${cardSum}₽</p>
    `;
    
    if (Math.abs(cashSum - cashTarget) > 0.01 || Math.abs(cardSum - cardTarget) > 0.01) {
        result += `<p style="color: red;">Предупреждение: Некоторая сумма не распределена точно.</p>`;
    }
    
    document.getElementById('result').innerHTML = result;
}
