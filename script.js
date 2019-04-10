/* Module 5 Project Script File */
var score = 0;

function myFunction() {
  var txt;
  var question = prompt("What year did JavaScript come out?");
  if (question == "1995") {
    txt = "You have answered correctly";
    score = score+100;
}
  
else{
    txt = "You have answered incorrectly";
}
  document.getElementById("demo").innerHTML = txt;
  document.getElementById("score").innerHTML = score;
}
    
    
    
function myFunction1() {
  var txt;
  var question1 = prompt("What year did JQuery come out?");
  if (question1 == ("2006")) {
    txt = "You have answered correctly";
    score = score+100;
  }
else{
    txt = "You have answered incorrectly";
}
  document.getElementById("demo1").innerHTML = txt;
  document.getElementById("score").innerHTML = score;
}

function myFunction2() {
  var txt;
  var question2 = prompt("What year did Bootsrap come out?");
  if (question2 == ("2011")) {
    txt = "You have answered correctly";
    score = score+100;
  }
else{
    txt = "You have answered incorrectly";
}
  document.getElementById("demo2").innerHTML = txt;
  document.getElementById("score").innerHTML = score;
}

function myFunction3() {
  var txt;
  var question3 = prompt("What does JS stand for?");
  if (question3 == ("JavaScript")) {
    txt = "You have answered correctly";
    score = score+200;
  }
else{
    txt = "You have answered incorrectly";
}
  document.getElementById("demo3").innerHTML = txt;
  document.getElementById("score").innerHTML = score;
}

function myFunction4() {
  var txt;
  var question4 = prompt("What was JQuery originally called?");
  if (question4 == ("JSelect")) {
    txt = "You have answered correctly";
    score = score+200;
  }
else{
    txt = "You have answered incorrectly";
}
  document.getElementById("demo4").innerHTML = txt;
  document.getElementById("score").innerHTML = score;
}

function myFunction5() {
  var txt;
  var question5 = prompt("What amount does the Bootsrap grid go up to?");
  if (question5 == ("12")) {
    txt = "You have answered correctly";
    score = score+200;
  }
else{
    txt = "You have answered incorrectly";
}
  document.getElementById("demo5").innerHTML = txt;
  document.getElementById("score").innerHTML = score;
}

function myFunction6() {
  var txt;
  var question6 = prompt("Is JavaScript an untyped language?");
  if (question6 == ("Yes")) {
    txt = "You have answered correctly";
    score = score+300;
  }
else{
    txt = "You have answered incorrectly";
}
  document.getElementById("demo6").innerHTML = txt;
  document.getElementById("score").innerHTML = score;
}

function myFunction7() {
  var txt;
  var question7 = prompt("Where did JQuery launch at?");
  if (question7 == ("New York City")) {
    txt = "You have answered correctly";
    score = score+300;
  }
else{
    txt = "You have answered incorrectly";
}
  document.getElementById("demo7").innerHTML = txt;
  document.getElementById("score").innerHTML = score;
}

function myFunction8() {
  var txt;
  var question8 = prompt("Is Bootsrap Responsive?");
  if (question8 == ("Yes")) {
    txt = "You have answered correctly";
    score = score+300;
  }
else{
    txt = "You have answered incorrectly";
}
  document.getElementById("demo8").innerHTML = txt;
  document.getElementById("score").innerHTML = score;
}