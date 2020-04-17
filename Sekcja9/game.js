// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const gameSummary = {
    numbers: 0,
    wins: 0,
    loses: 0,
    draws: 0
}

const game = {
    playerHand: '',
    aiHand: ''
}

const hands = [...document.querySelectorAll('.select img')];

//pierwsza funckja

function handSelection() {
    game.playerHand = this.dataset.option
    hands.forEach(hand => hand.style.boxShadow = '')
    this.style.boxShadow = '0 0 0 4px cadetblue';
}

function aiChoice() {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHand;
}

function checkResult(player, ai) {
    if (player == ai) {
        return 'draw'
    } else if ((player === 'papier' && ai === 'kamień') || (player === 'kamien' && ai === 'nożyczki') || (player === 'nożyczki' && ai === 'papier')) {
        return 'win'
    } else {
        return 'loss'
    }
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Wygrales ty gnojku";
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
    } else if (result === 'draw') {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis pizdeczko";
        document.querySelector('[data-summary="who-win"]').style.color = 'yellow';
    } else {
        document.querySelector('p.losses span').textContent = ++gameSummary.loses;
        document.querySelector('[data-summary="who-win"]').textContent = "Przejebales co poradze";
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
    game.playerHand = '';
}

//funkcja sterujaca

function startGame() {
    if (!game.playerHand) return alert('wybierz opcje');
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
}

hands.forEach(hand => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame);