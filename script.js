var selectedAns = document.querySelector("#card");
var rightAns = document.getElementById("A");
var wrongAns = document.getElementById("B");
var wrongAns2 = document.getElementById("C");
var wrongAns3 = document.getElementById("D");
var card = document.getElementById("Container")
var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");
var demoEl = document.getElementById("demo")

var rightCounter = 0
var wrongCounter = 0


function getAnswer() {

    if (this.value == "Correct") {
        document.getElementById("A")
        alert("Right!")
    }
    else  {
        
        alert("Wrong!")
    }
    }

rightAns.addEventListener("click", getAnswer)
wrongAns.addEventListener("click", getAnswer)
wrongAns2.addEventListener("click", getAnswer)
wrongAns3.addEventListener("click", getAnswer)

/*
var wrongAns = ["B", "C", "D"]; {
    wrongAns.addEventListener("click", getAnswer)

}
*/
seconds = 90;
var timerEl = setInterval(function () {

})

if (seconds < 0) {
    clearInterval(timerEl);
    document.getElementById("demo").innerHTML = "Time";
}
seconds = (seconds - 1, 1000);




