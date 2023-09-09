var timer=60;
var hitnum;
var score = 0;

function increaseScore(){
    score+=10;
    document.querySelector("#box3").innerHTML = score
}
function makeBubble(){
    var clutter = " "
    
    for(var i =1 ; i<=96 ; i++){
        var num = Math.floor(Math.random()*10)
        clutter += `<div id="bubble">${num}</div>`
    }
    document.querySelector("#mid").innerHTML = clutter
}
function runTimer(){
        var interval = setInterval(function () {
            if(timer>0){
                timer--;
                document.querySelector("#box2").textContent = timer
            }
            else{
                clearInterval(interval)
                document.querySelector("#mid").innerHTML = ` <h1>SCORE : ${score}</h1><h1> GAME OVER </h1>`
                
            }
        },1000)
    
    }
function getHit(){
    hitnum = Math.floor(Math.random()*10)
    document.querySelector("#box1").innerHTML = hitnum
}
document.querySelector("#mid").addEventListener("click", function(details) {
    var num = Number(details.target.innerHTML)
    if(num === hitnum){
        increaseScore();
        makeBubble();
        getHit();
    }
})

getHit();
makeBubble()
runTimer()
