// cache the DOM
const EnterUsername_form = document.querySelector('.EnterUsername')
const solo_div = document.getElementById("solo");
const findGame_div = document.getElementById("findGame");
const createGame_div = document.getElementById("createGame");
const enterCode_form = document.getElementById("enterCode");

// listen for plays
function main() {
    EnterUsername_form.addEventListener('submit', function () {
        console.log("username entered");
    })

    solo_div.addEventListener('click', function () {
        console.log("solo game");
    })
    
    findGame_div.addEventListener('click', function () {
        console.log("find game");
    })

    createGame_div.addEventListener('click', function () {
        console.log("create game");
    })

    enterCode_form.addEventListener('submit', function () {
        console.log("code entered");
    })
}

main();