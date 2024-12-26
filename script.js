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
