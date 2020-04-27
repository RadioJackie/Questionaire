var answer = document.querySelector("#card");
var rightAns = document.querySelector("[name=A1]");
var wrongAns = document.querySelector("[name=A2]");
var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");



       var rightCounter = 0
       var wrongCounter = 0

function getAnswer(){

    if(selectedAns == rightAns){
        document.querySelector("[name=A1]").innerHTML = "Right!"
        alert("Right!")
    }
    else { wrong 
        alert("Wrong!")
    }
    
}

rightAns.addEventListener("click", getAnswer)


        
  

function prepareRead() {
    var timeLeft = 90;
  
    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
        speedRead();
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }


 
    

/*
write a code that will make the question change
have a popup for when someone awnsers
get the timer to work

*/


/*
rightAns.addEventListener("click", getAnswer); {

function rightAns(){

}
}
*/
//Timer




   