
function createGame(player1, scoreboard, player2) {
    return `
    <li>
        <img src="./assets/img/logo-${player1}.png"
        alt="Logo do ${player1}">
        <strong>${scoreboard}</strong>
        <img src="./assets/img/logo-${player2}.png"
        alt="Logo do ${player2}">
    </li>
`
}

function createCard(date, day, hour, games) {
    return `
    <div class="card">
    <h2>${date}
    <span>${hour}</span>
    <span>${day}</span>
    </h2>
        <ul>
            ${games}
        </ul>
    </div>
`
}

document.querySelector('#cards').innerHTML = `
        ${createCard('20/01', '18:00', 'Sábado', createGame('botafogo-sp', '0 x 1', 'santos'))}
        ${createCard('25/01', '19:30', 'Quinta', createGame('santos', '3 x 1', 'ponte-preta'))}
        ${createCard('28/01', '18:00', 'Domingo', createGame('palmeiras', '2 x 1', 'santos'))}
        ${createCard('31/01', '21:35', 'Quarta', createGame('agua-santa', '0 x 1', 'santos'))}
        ${createCard('04/02', '18:00', 'Domingo', createGame('santos', '2 x 0', 'guarani'))}
        ${createCard('07/02', '19:30', 'Quarta', createGame('santos', '1 x 0', 'corinthians'))}
        ${createCard('11/02', '18:00', 'Domingo', createGame('santos', '2 x 2', 'mirassol'))}
`