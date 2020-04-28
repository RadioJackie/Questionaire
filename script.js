var selectedAns = document.getElementById("Question");
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
        rightCounter++
        document.getElementById("Question").innerHTML = "<p>The Right format for innerHTML is...</p>"
        alert("Right!")
        rightAns.innerHTML = ".interHTML = 'this'"
        wrongAns.innerHTML = "Interhtml = this"
        wrongAns2.innerHTML = "INTERhtml = 'this "
        wrongAns3.innerHTML = "INTERHTML this"
        rightAns.removeEventListener("click", getAnswer)
        wrongAns.removeEventListener("click", getAnswer)
        wrongAns2.removeEventListener("click", getAnswer)
        wrongAns3.removeEventListener("click", getAnswer)
        rightAns.addEventListener("click", getAnswer2)
        wrongAns.addEventListener("click", getAnswer2)
        wrongAns2.addEventListener("click", getAnswer2)
        wrongAns3.addEventListener("click", getAnswer2)
    }
    else {
        wrongCounter++
        alert("Wrong!")
        document.getElementById("Question").innerHTML = "<p>The Right format for innerHTML is...</p>"
        alert("Right!")
        rightAns.innerHTML = ".interHTML = 'this'"
        wrongAns.innerHTML = "Interhtml = this"
        wrongAns2.innerHTML = "INTERhtml = 'this "
        wrongAns3.innerHTML = "INTERHTML this"
        rightAns.removeEventListener("click", getAnswer)
        wrongAns.removeEventListener("click", getAnswer)
        wrongAns2.removeEventListener("click", getAnswer)
        wrongAns3.removeEventListener("click", getAnswer)
        rightAns.addEventListener("click", getAnswer2)
        wrongAns.addEventListener("click", getAnswer2)
        wrongAns2.addEventListener("click", getAnswer2)
        wrongAns3.addEventListener("click", getAnswer2)
    }
}

function getAnswer2() {

    if (this.value == "Correct") {
        document.getElementById("A")
        rightCounter++
        alert("Right!")
        document.getElementById("Question").innerHTML = "<p>What is a Boolean...</p>"

        rightAns.innerHTML = "A true false statement"
        wrongAns.innerHTML = "A type of exotic drink"
        wrongAns2.innerHTML = "A  Bootstrap site"
        wrongAns3.innerHTML = "A string"
        rightAns.removeEventListener("click", getAnswer2)
        wrongAns.removeEventListener("click", getAnswer2)
        wrongAns2.removeEventListener("click", getAnswer2)
        wrongAns3.removeEventListener("click", getAnswer2)
        rightAns.addEventListener("click", getAnswer3)
        wrongAns.addEventListener("click", getAnswer3)
        wrongAns2.addEventListener("click", getAnswer3)
        wrongAns3.addEventListener("click", getAnswer3)
    }
    else {
        wrongCounter++
        alert("Wrong!")
        document.getElementById("Question").innerHTML = "<p>The Right format for innerHTML is...</p>"

        rightAns.innerHTML = "A true false statement"
        wrongAns.innerHTML = "A type of exotic drink"
        wrongAns2.innerHTML = "A  Bootstrap site"
        wrongAns3.innerHTML = "A string"
        rightAns.removeEventListener("click", getAnswer2)
        wrongAns.removeEventListener("click", getAnswer2)
        wrongAns2.removeEventListener("click", getAnswer2)
        wrongAns3.removeEventListener("click", getAnswer2)
        rightAns.addEventListener("click", getAnswer3)
        wrongAns.addEventListener("click", getAnswer3)
        wrongAns2.addEventListener("click", getAnswer3)
        wrongAns3.addEventListener("click", getAnswer3)

    }

}

function getAnswer3() {

    if (this.value == "Correct") {
        document.getElementById("A")
        rightCounter++

        alert("Right!")

        totalCount()
    }
    else {
        wrongCounter++
        alert("Wrong!")



        totalCount()

    }
}

function totalCount() {
    card.innerHTML = "<p>Right =" + rightCounter + "</p> <br>" + "<p>Wrong = " + wrongCounter + "</p>"

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
seconds = 60;
var timerEl = setInterval(function () {
    if (seconds < 0) {
        card.innerHTML = "<p>Right =" + rightCounter + "</p> <br>" + "<p>Wrong = " + wrongCounter + "</p>"

        clearInterval(timerEl);
        document.getElementById("demo").innerHTML = "Time";
    }
    demoEl.innerHTML = seconds
    seconds = seconds - 1
}, 1000)






