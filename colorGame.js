var square = document.getElementsByClassName("square");
var guessingColor;
var reset = document.getElementById("reset");
var colors;

// Generating a random color
function getRandomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + b + ", " + g + ")";
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

guessingColor = guessingColor();

//Display all color 
document.getElementById("guessColor").textContent = guessingColor;
//Add clicking event
for (let i = 0; i < colors.length; i++){
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function(){
        var selectedColor = this.style.backgroundColor;
        if(selectedColor == guessingColor){
              alert("You win");
          }
        else {
            this.classList.add("wrongSquare");
         }
    });
}

// function reload() {
//     colors = createColor(6);
//     guessingColor = guessingColor();
// }

//reset.addEventListener("click",reload());

// var square = document.querySelectorAll(".square");

// for (var i = 0; i<color.length; i++){
//     square[i].style.backgroundColor = color[i];
//     square[i].addEventListener("click", function(){
//         var guess = this.style.backgroundColor;
//         if (guess === correctColor){
//             alert("Correct");
//         }
//         else {
//             alert("Wrong");
//             this.classList.add("wrongSquare");
//         }
//     })
// }


