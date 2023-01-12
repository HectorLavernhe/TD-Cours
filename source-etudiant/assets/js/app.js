let countdownDate = new Date("2023-05-15");
//création de variable pour un test de confettis
// let test = 5000
//création des variables
let daysElem = document.querySelector("#days span");
let hoursElem = document.querySelector("#hours span");
let minutesElem = document.querySelector("#minutes span");
let secondsElem = document.querySelector("#seconds span");
let timerId = 0; 

//création de la fonction
function startCountdown(){
    let date = new Date();
    let diff = countdownDate - date //test -= 1000 pour tester les confettis
    let dayGlobal = Math.floor(diff/24/3600/1000);
    let hoursGlobal = Math.floor(diff/3600/1000);
    let minutesGlobal = Math.floor(diff/60/1000);
    let secondsGlobal = Math.floor(diff/1000);
    let daysCounter = dayGlobal;
    console.log(daysCounter)
    let hoursCounter = hoursGlobal - (dayGlobal * 24)
    console.log(hoursCounter)
    let minutesCounter = minutesGlobal - (hoursGlobal * 60)
    console.log(minutesCounter)
    let secondsCounter = secondsGlobal - (minutesGlobal * 60)
    console.log(secondsCounter)
    // Afficher les informations dans le web
    daysElem.textContent = daysCounter
    hoursElem.textContent = hoursCounter
    minutesElem.textContent = minutesCounter
    secondsElem.textContent = secondsCounter
    if(diff < 1){
        endCountDown();
    }
}

let interval1 = setInterval(() => {
    startCountdown();
}, 1000);

function endCountDown(){
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
    clearInterval(interval1);
}

