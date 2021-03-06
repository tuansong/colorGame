var square = document.getElementsByClassName("square");
var mainColor;
var reset = document.getElementById("reset");
var colors;
var intro = document.getElementById("gameIntro");
var messages = ["Try Again!", "Almost there", "Too close! Try again", "Not correct, don't give up", "Again :D"];

// Generating a random color
function getRandomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + b + ", " + g + ")";
}

function getMessage() {
    var message = Math.floor(Math.random() * messages.length);
    return messages[message];
}
// Setup new game
function createColor(num){
    arr=[];
    for(let i = 0; i<num; i++){
        arr.push(getRandomColor());
    }
    return arr;
}
colors = createColor(6);

// Assign guessingColor by random method of colors array
function guessingColor(){
    var x = Math.floor(Math.random() * 6);
    return colors[x];
}

mainColor = guessingColor();

//Display all color 
document.getElementById("guessColor").textContent = mainColor;
//Add clicking event
function setupSquare(){
        for (let i = 0; i < colors.length; i++){
                square[i].style.backgroundColor = colors[i];
                square[i].addEventListener("click", function(){
                    var selectedColor = this.style.backgroundColor;
                    if(selectedColor == mainColor){
                          intro.textContent = "Congrat! You're the winner. Click to play again";
                          for (let a = 0; a < colors.length; a++){
                              square[a].style.backgroundColor = mainColor;
                              square[a].classList.remove("wrongSquare");
                          }
                      }
                    else {
                        this.classList.add("wrongSquare");
                        intro.textContent = getMessage();
                     }
                });
            }

        }



function restarGame(){
    colors = createColor(6);
    mainColor = guessingColor();
    document.getElementById("guessColor").textContent = mainColor;
    setupSquare();
    intro.textContent = "Click to start a new game";
    for(let i =0; i<colors.length; i++){
        square[i].classList.remove("wrongSquare");
    }
}

reset.addEventListener("click",restarGame);
