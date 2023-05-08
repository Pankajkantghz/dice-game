var randomNumber1=Math.floor(Math.random()*6)+1;//creating 1-6 random numbers
var randomImage1="images/dice"+randomNumber1+".png";//1-6 random images 
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);//make chage at src 
  
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
//based upon above winner is decided by following below relations
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";
} else {
  document.querySelector("h1").innerHTML="draw";
}