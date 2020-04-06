/*********************************************************************************************************************
 * MINEFIELD
 * 
 * 1- The computer must generate 16 random numbers between 1 and 100 (prohibited numbers).
 * 2- Then the computer must ask the user to enter one number at a time, always between 1 and 100.
 * The user cannot repeatedly enter the same number.
 * 3- If the number is present in the list of generated numbers (prohibited numbers),
 * the game ends, otherwise it continues by asking the user for another number.
 * 4- The game ends when the player enters a "prohibited" number or reaches the
 * maximum possible number of allowed numbers.
 * 5- At the end of the game the software must communicate the score, 
 * i.e. the number of times the user has entered an allowed number.
 * 
 * EXTRA
 * At the beginning the software also requires a difficulty for the user who changes the range of random numbers:
 * - with difficulty 0 => between 1 and 100
 * - with difficulty 1 => between 1 and 80
 * - with difficulty 2 => between 1 and 50
 * 
 **********************************************************************************************************************/

// difficulty control

var difficulty = parseInt(prompt('Seleziona un livello di difficoltà: \n=> 0 \n=> 1 \n=> 2'));

switch (difficulty) {
    case 0: 
        maxNumber = 100;
        break;
    case 1:
        maxNumber = 80;
        break;
    case 2:
        maxNumber = 50;
        break;
    default:
        maxNumber = false;
}

// 16 random numbers from 1 to maxNumber

var cpuArray = [];

for (var i = 0; i < 16; i++) {
    var cpuNumber = getRandomNumber (1,maxNumber);
    cpuArray.push(cpuNumber);
}
console.log('I numeri scelti dal computer sono: ', cpuArray); // debug

// random number function
function getRandomNumber (min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var userArray = [];
var score = 0;
// maximum number of attempts 10
for ( var i = 0; i < 10; i++ ) {
    var userNumber = parseInt(prompt('Inserisci un numero da 1 a ' + maxNumber));

    //  validation
    
    while ( (userNumber < 1 || userNumber > maxNumber) || isNaN(userNumber) ) {
        userNumber = parseInt(prompt('Prego, scegli un numero da 1 a ' + maxNumber));
    }
     // check that the user does not enter the same number
    if (userArray.includes(userNumber) == true) {
    prompt('Hai già scelto questo numero, inserisci un altro!')
    } 

    // feedback
    console.log('Il numero scalto dall\'utente è: ', userNumber);
    console.log(userArray);

    if ( cpuArray.includes(userNumber) == true ) {
        console.log('Spiacente, hai perso\nHai calpestato una mina!');
        break;
    } else {
        score ++;
        userArray.push(userNumber);
    }
}

// users score
console.log('Il tuo punteggio è: ', score);

