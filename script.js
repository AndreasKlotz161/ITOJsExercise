console.log(`Hallo`, 2 + 2);
function change() {
    if (document.getElementById(`demo`).innerHTML == `Hallo Welt!`){
        document.getElementById(`demo`).innerHTML = (`Hello Javascript`);
    }
    else {
        document.getElementById(`demo`).innerHTML = (`Hallo Welt!`);
    }
}
//calculator
var result = 0;
var operand = 0;
var operator = ``;
document.getElementById(`task`).innerHTML = `0`;
document.getElementById(`result`).innerHTML = result;
document.getElementById(`operand`).innerHTML = operand;
function concat(char){
    if (document.getElementById(`operand`).innerHTML == `0`){
        document.getElementById(`operand`).innerHTML = char;
    }
    else {
        document.getElementById(`operand`).innerHTML += char;
    }
}
function plus(){
    operator = `+`;
    result = parseFloat(document.getElementById(`operand`).innerHTML);
    document.getElementById(`operand`).innerHTML = `0`;
    document.getElementById(`task`).innerHTML = `${result} + `;
}
function minus(){
    operator = `-`;
    result = parseFloat(document.getElementById(`operand`).innerHTML);
    document.getElementById(`operand`).innerHTML = `0`;
    document.getElementById(`task`).innerHTML = `${result} - `;
}
function times(){
    operator = `*`;
    result = parseFloat(document.getElementById(`operand`).innerHTML);
    document.getElementById(`operand`).innerHTML = `0`;
    document.getElementById(`task`).innerHTML = `${result} * `;
}
function divide(){
    operator = `/`;
    result = parseFloat(document.getElementById(`operand`).innerHTML);
    document.getElementById(`operand`).innerHTML = `0`;
    document.getElementById(`task`).innerHTML = `${result} / `;
}
function calculate(){
    console.log(operator);
    operand = parseFloat(document.getElementById(`operand`).innerHTML);
    switch(operator){
        case `+`:
            result = result + operand;
            break;
        case `-`:
            result = result - operand;
            break;
        case `*`:
            result = result * operand;
            break;
        case `/`:
            if (operand == 0){
                alert(`Keine Division durch null erlaubt.`);
            }
            else{
                result = result / operand;
            }
            break;
    }
    console.log(result);
    document.getElementById(`task`).innerHTML += operand;
    document.getElementById(`operand`).innerHTML = `0`;
    document.getElementById(`result`).innerHTML = result;
    operand = 0;
    operator = ``;
}
function calculatorReset(){
    operator = ``;
    operand  = 0;
    result = 0;
    document.getElementById(`task`).innerHTML = `0`;
    document.getElementById(`operand`).innerHTML = `0`;
    document.getElementById(`result`).innerHTML = `0`;
    
}
// tictactoe
var haveWinner = false;
var player1 = true;
var grid = [[0,0,0],[0,0,0],[0,0,0]];
document.getElementById("display").style.color = `red`;
document.getElementById("display").innerHTML = `Rot ist dran`;
function setField(field){
    if (grid[parseInt(field[0])][parseInt(field[1])] == 0){
        if (player1 == true){
            document.getElementById(field).style.backgroundColor = `red`;
            document.getElementById(field).innerHTML = `<span>X</span>`;
            grid[parseInt(field[0])][parseInt(field[1])] = 1;
            document.getElementById("display").style.color = `green`;
            document.getElementById("display").innerHTML = `Grün ist dran`;
            player1 = false;
            checkTictactoe();
        }
        else {
            document.getElementById(field).style.backgroundColor = `green`;
            document.getElementById(field).innerHTML = `<span>O</span>`;
            grid[parseInt(field[0])][parseInt(field[1])] = 2;
            document.getElementById("display").style.color = `red`;
            document.getElementById("display").innerHTML = `Rot ist dran`;
            player1 = true;
            checkTictactoe();
        }
        // no Winner
        if( grid[0][0] != 0 && grid[0][1] != 0 && grid[0][2] != 0 &&
            grid[1][0] != 0 && grid[1][1] != 0 && grid[1][2] != 0 &&
            grid[2][0] != 0 && grid[2][1] != 0 && grid[2][2] != 0 && 
            haveWinner == false){
            displayWinner(0);
        }
    }
}
function checkTictactoe(){
        //check rows   
        for (i = 0; i < 3; i++){
            if (grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2] && grid[i][0] !== 0){
                displayWinner(grid[i][0]);
                haveWinner = true;
            }
        }
        //check columns
        for (i = 0; i < 3; i++){
            if (grid[0][i] == grid[1][i] && grid[1][i] == grid[2][i] && grid[0][i] !== 0){
                displayWinner(grid[0][i]);
                haveWinner = true;
            }
        }
        //check diagonal
        if(grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2] && grid[1][1] != 0){
            displayWinner(grid[0][0]);
            haveWinner = true;
        }
        if(grid[0][2] == grid[1][1] && grid[1][1]  == grid[2][0] && grid[1][1] != 0){
            displayWinner(grid[0][2]);
            haveWinner = true;
        }
    }
function tictactoeReset(){
    for (i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
            document.getElementById(`${i}${j}`).style.backgroundColor = `beige`;
        }
    }
    for (i = 0; i<3; i++){
        grid[i] = [0,0,0];
    }
    player1 = true;
    document.getElementById("display").style.color = `red`;
    document.getElementById("display").innerHTML = `Rot ist dran`;
}
function displayWinner(winner){
    if (winner == 1){
        document.getElementById("display").style.color = `red`;
        document.getElementById("display").innerHTML = `Rot gewinnt`;
    }
    if (winner == 2){
        document.getElementById("display").style.color = `green`;
        document.getElementById("display").innerHTML = `Grün gewinnt`;
    }
    if (winner == 0){
        document.getElementById("display").style.color = `black`;
        document.getElementById("display").innerHTML = `Keiner gewinnt`;
    }
    setInterval(function(){document.getElementById("display").innerHTML += '.';}, 250);
    setTimeout(function(){location.reload();}, 5000);
}
