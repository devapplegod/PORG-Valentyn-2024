<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Valentyn</title>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css?v=19">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
<body>
    <div id="container">
        <h1>PORG.FUN</h1>
        <h2 id="subtitle">Už jsme obdrželi __ valentýnek. <br>Napiš zprávu, vyber, komu ji chceš poslat, a my ji na valentýna doručíme:</h2>
        <h3></h3>
        
        <div class="input-group">
          <select class="třída-input" id="class-dropdown" onchange="updatePeopleDropdown()">
            <option value="" disabled selected>Třída</option>
            <option value="Prima">Prima</option>
            <option value="Sekunda">Sekunda</option>
            <option value="Tercie">Tercie</option>
            <option value="Kvarta">Kvarta</option>
            <option value="Kvinta">Kvinta</option>
            <option value="Sexta">Sexta</option>
            <option value="Septima">Septima</option>
            <option value="Oktáva">Oktáva</option>
          </select>

          <select class="jméno-input" id="name-dropdown">
            <option value="" disabled selected>Jméno</option>
          </select>
        </div>
    
        <textarea class="message-input" id="message-input" placeholder="Zadej milostnou zprávu ;)"></textarea>
    
        <button id="send-button">Odeslat</button>
    </div>
    <div class="footer-text">
      <p>by josé</p>
    </div>
    <script src="index.js?v=19"></script>
</body>
</html>