const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const isreset = document.querySelector("#reset");
const set = document.querySelector("#set");
let x = 0, y = 0;
let winningscore;
let over = false;
set.addEventListener('change', function () {
    winningscore = parseInt(this.value);
    reset();
})

score1.addEventListener('click', function () {
    if (!over) {
        x++;
        if (x === winningscore) {
            over = true;
            player1.classList.add('has-text-success');
            player2.classList.add('has-text-danger');
        }
        player1.textContent = x;
    }
})
score2.addEventListener('click', function () {
    if (!over) {
        y++;
        if (y === winningscore) {
            over = true;
            player2.classList.add('has-text-success');
            player1.classList.add('has-text-danger');
        }
        player2.textContent = y;
    }
})
isreset.addEventListener('click', reset)
function reset() {
    over = false;
    x = 0, y = 0;
    player1.textContent = 0;
    player2.textContent = 0;
    player1.classList.remove('has-text-success', 'has-text-danger');
    player2.classList.remove('has-text-success', 'has-text-danger');
}
const fakerequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.6) {
                resolve("done data here");
            }
            reject("request error");
        }, 3000)
    })
}
fakerequest('/dogs/1')
    .then((data) => {
        console.log("done with request", data)
    })
    .catch((err) => {
        console.log("oh no! ", err);
    })
