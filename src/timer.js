let startingminutes = 1;//  minutes

let time = startingminutes*60;  // total time we have in seconds 

//Getting html element where we want to show time
let timer = document.querySelector(".time");


//setinterval for countdown clock
let mytime = setInterval(function(){

let minute = Math.floor(time/60);
let second = time%60;

// when timer reaches to zero
if(minute==0 && second==0){
  submit();  // calling submit function
 
}

minute = minute < 10? '0'+minute:minute;
second = second < 10? '0'+second:second;


timer.innerHTML = `${minute}:${second}`;
time--;
},1000);