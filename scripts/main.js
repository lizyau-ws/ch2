function bg1() {
	document.body.style.backgroundColor="rgb(22, 22, 22)"
}

function bg2() {
	document.body.style.backgroundColor="rgba(16, 16, 70)"
}

function bg3() {
	document.body.style.backgroundColor="#251c25"
}

function bg4() {
	document.body.style.backgroundColor="rgb(22, 32, 22)"
}

function bg5() {
	document.body.style.backgroundColor="#3b210b"
}

function bg6() {
	document.body.style.backgroundColor="rgb(51, 27, 51)"
}


function currentTime() {
    var today = new Date(); 

    var days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var yyyy = today.getFullYear();
    var mm = today.getMonth()+1; 
    var dd = today.getDate();
   
    document.getElementById("day").innerHTML = yyyy + " - " + mm + " - " + dd + " " + days[today.getDay()];


    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec; /* adding time to the div */
      var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */

    var greet;
    if (hour < 12){
      greet = "Good Morning! Wake up now :D"
    } else if (hour < 17){
      greet = "Good Afternoon. Have a cup of coffee :)?"
    } else {
      greet = "Good Evening, don't forget to rest early :)"
    }
  
    document.getElementById("helloGreet").innerHTML = greet;
  }
  
  function updateTime(number) {
    if (number < 10) {
      return "0" + number;
    }
    else {
      return number;
    }
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */


