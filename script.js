<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Распределение товаров</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        #result {
            margin-top: 20px;
        }
        textarea {
            width: 100%;
            height: 150px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Распределение товаров по наличному и безналичному расчету</h1>
    <button onclick="document.getElementById('fileInput').click()">Загрузить список</button>
    <input type="file" id="fileInput" style="display: none;" onchange="loadFile(event)">
    <textarea id="fileContent" placeholder="Содержимое файла будет здесь..."></textarea>
    <button onclick="distribute()">Распределить</button>
    
    <div id="result"></div>
    
    <script src="script.js"></script>
</body>
</html>