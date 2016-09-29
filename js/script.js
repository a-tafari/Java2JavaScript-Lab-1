" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello world";

}

function oneToTen(){
  var int = "***Output***";
  for(var i=1 ; i<=10 ; i++ ){
    int += "<br>"+ i;

}
display.innerHTML = int;
}
function oddNumbers(){
  var int = "***Output***";
  for(var i=1 ; i<=20 ; i+=2 ){
    int += "<br>"+ i;

}
display.innerHTML = int;
}
function SqrNumbers(){
  var int = "***Output***";
  for(var i=1 ; i<=10 ; i++ ){
    int += "<br>"+ i*i;

}
display.innerHTML = int;
}
function randNumber(){
  var int = "***Output***";
  for(var i=1 ; i<=4 ; i++ ){
    int += "<br>" +Math.floor(Math.random() * 100);

}
display.innerHTML = int;
}
function evenNumber(number){
  var int = "***Output***";
  for(var i=2 ; i<=number ; i+=2 ){
    int += "<br>"+ i;

}
display.innerHTML = int;
}
function powers(number){
  var int = "***Output***";
  for(var i=1 ; i<=number ; i++ ){
    int += "<br>"+ Math.pow(2,i);

}
display.innerHTML = int;
}


function areWeThereYet(){
  var response = true;
  while(response){
    var response= prompt("Are we there yet?");
    if(response.toLowerCase()==="yes"){
      display.innerHTML = " GOOD!";
      response= false;
    }
  }

}
function triangle(){
  var int = "***Output***";
  tri = "*";
  for(var i=0 ; i<=5 ; i++ ){
  display.innerHTML += tri.repeat(i)+ "<br>";
}
}

function tableSquare(){
  var int= "***Output***"+"<br>"+" A4x4tablesquare"+"<br> ";
  var row = "";
  for(var i=1 ; i<=4 ; i++ ){
    for(var j=1 ; j<=4 ; j++ ){
      row += " | "+i*j+" |"
    }
    row+="<br>"
  }

  display.innerHTML = row;
}

function tableSquares(number){
  var int = "***Output***"+"<br>"+" A4x4tablesquare"+"<br> ";
  var row = "";
  for(var i=1 ; i<=number ; i++ ){
    for(var j=1 ; j<=number ; j++ ){
      row+=  "|" +i*j+"|" ;
    }
    row+="<br>"
  }

  display.innerHTML = row;
}
