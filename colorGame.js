var color = [
    "red",
    "yellow",
    "green",
    "blue",
    "pink",
    "white",
]

var correctColor = "pink";

document.getElementById("guessColor").textContent = correctColor;

var square = document.querySelectorAll(".square");

for (var i = 0; i<color.length; i++){
    square[i].style.backgroundColor = color[i];
    square[i].addEventListener("click", function(){
        var guess = this.style.backgroundColor;
        if (guess === correctColor){
            alert("Correct");
        }
        else {
            alert("Wrong");
            this.classList.add("wrongSquare");
        }
    })
}


