let gamesqe = [];
let usersqe = [];
let btns = ["yellow", "red", "purple", "blue"]; 
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started==false) {
        console.log("game is started");
        started = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash"); 
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelup() {
    level++;
    h2.innerText = `Level ${level}`;

    let randinx = Math.floor(Math.random() * btns.length); 
    let randcolor = btns[randinx]; 
    let randbtn = document.querySelector(`.${randcolor}`);

    gamesqe.push(randcolor);
    btnflash(randbtn);
}
