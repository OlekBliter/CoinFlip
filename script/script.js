let heads = 0;
let tails = 0;

function updateStats(){
    document.getElementById("orel").textContent = 'Heads - ' + heads;
    document.getElementById("reshka").textContent = 'Tails - ' + tails;
}
function disBtn(){
    document.getElementById("flip").disabled = true;
    setTimeout(function(){
        document.getElementById("flip").disabled = false;
    },3500);
}
function flip(){
let random = Math.floor(Math.random() * 10)
document.querySelector(".coin").style.animation = "none";
    if(random%2==0){
        setTimeout(function(){
            document.querySelector(".coin").style.animation = "spin-heads 3.5s forwards";
        }, 250);
        heads++;
    }
    else{
        setTimeout(function(){
            document.querySelector(".coin").style.animation = "spin-tails 3.5s forwards";
        }, 250);
        tails++;
    }
    setTimeout(updateStats, 3500);
    disBtn();
    console.log(random)
};
function reset(){
    document.querySelector(".coin").style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
};