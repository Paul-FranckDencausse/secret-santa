
# Secret Santa

Ce projet est une application web simple pour organiser un Secret Santa. Les participants peuvent entrer leurs noms, et l'application attribuera aléatoirement un Secret Santa pour chacun d'eux.

## Fonctionnalités

- Ajouter des participants
- Afficher la liste des participants
- Attribuer les Secret Santa de façon aléatoire
- Assurer qu'aucun participant ne s'attribue à lui-même

## Technologies utilisées

- HTML
- CSS
- JavaScript

## Utilisation

### Ajouter des participants

1. Entrez un nom dans le champ de texte.
2. Cliquez sur "Add Participant" pour ajouter le nom à la liste des participants.
3. Répétez les étapes 1 et 2 pour ajouter tous les participants.

### Attribuer Secret Santa

1. Une fois que tous les participants sont ajoutés, cliquez sur "Assign Secret Santa".
2. Les attributions de Secret Santa seront affichées sous la liste des participants.

## Exemple de code

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secret Santa</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Secret Santa</h1>
    <div id="form-container">
        <input type="text" id="name" placeholder="Enter name">
        <button onclick="addParticipant()">Add Participant</button>
    </div>
    <ul id="participants-list"></ul>
    <button id="assign-button" onclick="assignSecretSanta()">Assign Secret Santa</button>
    <ul id="result-list"></ul>
    <script src="script.js"></script>
</body>
</html>
```

### CSS (styles.css)
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    text-align: center;
    padding: 20px;
}

h1 {
    color: #333;
}

#form-container {
    margin-bottom: 20px;
}

#participants-list, #result-list {
    list-style-type: none;
    padding: 0;
}

#participants-list li, #result-list li {
    background-color: #fff;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    margin: 10px 0;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}
```

### JavaScript (script.js)
```javascript
const participants = [];

function addParticipant() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    if (name && !participants.includes(name)) {
        participants.push(name);
        updateParticipantsList();
        nameInput.value = '';
    }
}

function updateParticipantsList() {
    const participantsList = document.getElementById('participants-list');
    participantsList.innerHTML = '';
    participants.forEach(participant => {
        const li = document.createElement('li');
        li.textContent = participant;
        participantsList.appendChild(li);
    });
}

function assignSecretSanta() {
    if (participants.length < 2) {
        alert('Add at least 2 participants.');
        return;
    }

    let recipients = participants.slice();
    const result = [];

    participants.forEach(participant => {
        let recipientIndex = Math.floor(Math.random() * recipients.length);

        while (recipients[recipientIndex] === participant) {
            recipientIndex = Math.floor(Math.random() * recipients.length);
        }

        result.push({ giver: participant, receiver: recipients[recipientIndex] });
        recipients.splice(recipientIndex, 1);
    });

    updateResultList(result);
}

function updateResultList(result) {
    const resultList = document.getElementById('result-list');
    resultList.innerHTML = '';
    result.forEach(pair => {
        const li = document.createElement('li');
        li.textContent = `${pair.giver} will give a gift to ${pair.receiver}`;
        resultList.appendChild(li);
    });
}
```

## Contribuer

1. Fork le repository
2. Crée une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

