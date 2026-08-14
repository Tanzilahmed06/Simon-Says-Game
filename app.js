let gameseq = [];
let userseq = [];

let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (){
  if(started == false){
    console.log("Game stated");
    started = true;

    levelup()
  }
});
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function (){
    btn.classList.remove("flash");
  },250);
}
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function() {
    btn.classList.remove("userflash");

  }, 250);
}

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000);
  
}

function levelup(){
  userseq = [];
  level++;
  h2.innerText = `LEVEL ${level}`;
  let randindx = Math.floor(Math.random() * 4);
  let randcolor = btns[randindx];
  let randbtn = document.querySelector(`.${randcolor}`)
  gameseq.push(randcolor);
  console.log(gameseq);
  gameFlash(randbtn);
}
  
 function checkans(idx){
    if(userseq[idx] === gameseq[idx]){
      if(userseq.length == gameseq.length){
       setTimeout(levelup,1000);
      }
      
    
  }  else{
    h2.innerHTML = `GAME OVER !!! your score was<b>${level}
    <b/> press any key to restart`;
    document.querySelector("body").style.background ="red";
    setTimeout(function (){
      document.querySelector("body").style.background ="white";
    }, 150);
    reset();

  }
}
 function btnpress(){
  let btn = this;
  userFlash(btn);

 let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);

  checkans(userseq.length - 1);
 }
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
  btn.addEventListener("click",btnpress);

}
    
  function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;

  }