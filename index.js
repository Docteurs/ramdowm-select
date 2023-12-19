const users = [
    { id: 1, nom: "Dupont", prenom: "Jean", tel: "111-111-1111" },
    { id: 2, nom: "Martin", prenom: "Sophie", tel: "222-222-2222" },
    { id: 3, nom: "Lefevre", prenom: "Luc", tel: "333-333-3333" },
    { id: 4, nom: "Leroy", prenom: "Emma", tel: "444-444-4444" },
    { id: 5, nom: "Garcia", prenom: "Thomas", tel: "555-555-5555" }
];

const cardsContainer = document.getElementById('cards-container');
let i = 0;
users.forEach((user, index) => {
    i++;
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = `card${i}`;
    card.textContent = `${user.nom} ${user.prenom}`;
    cardsContainer.appendChild(card);
});

const modifBlue = document.getElementById('cards-container');
for (let i = 0; i < modifBlue.children.length; i++) {
    let changeStyle = modifBlue.children[i];
    setTimeout(() => {
        changeStyle.style.backgroundColor = 'blue';
        setTimeout(() => {
            changeStyle.style.backgroundColor = 'white';
        }, 500);
    }, i * 1000);
}

setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * users.length);
    const winnerCard = document.getElementById(`card${randomIndex + 1}`);
    winnerCard.classList.add('winner');
    winnerCard.style.backgroundColor = 'blue';
}, modifBlue.children.length * 1000);