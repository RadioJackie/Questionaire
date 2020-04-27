var answer = document.querySelector("#card");
var rightAns = document.querySelector("[name=A1]");
var wrongAns = document.querySelector("[name=A2]");
var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");
var demoEl = document.getElementById("demo")
var selectedAns 

       var rightCounter = 0
       var wrongCounter = 0


function getAnswer(){

    if(selectedAns == rightAns){
        document.querySelector("[name=A1]").innerHTML = "Right!"
        alert("Right!")
    }
    else {
        alert("Wrong!")

    }
    var wrongAns;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
} 
    
}

rightAns.addEventListener("click", getAnswer)
    var wrongAns = ["A2", "A2", "A2"];{
        wrongAns.addEventListener("click", getAnswer)

    }



        


    seconds = 90;
    var timerEl = setInterval(function() {
        
    })

    if(seconds<0){
        clearInterval(timerEl);
        document.getElementById("demo").innerHTML = "Time";
    }
seconds = (seconds-1,1000);




