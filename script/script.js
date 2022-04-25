let heads = 0;
        let tails = 0;
        let ribs = 0;

function updateStats(){
    document.getElementById("orel").textContent = 'Heads - ' + heads;
    document.getElementById("reshka").textContent = 'Tails - ' + tails;
    document.getElementById("rebro").textContent = 'Ribs - ' + ribs;
}
function disBtn(){
    document.getElementById("flip").disabled = true;
    setTimeout(function(){
        document.getElementById("flip").disabled = false;
    },3500);
}
function flip(){
let random = Math.floor(Math.random() * 1000000)
document.querySelector(".coin").style.animation = "none";
    if(random%2==0){
        setTimeout(function(){
            document.querySelector(".coin").style.animation = "spin-heads 3s forwards";
        }, 250);
        heads++;
    }else if(random == 9){
        setTimeout(function(){
            document.querySelector(".coin").style.animation = "spin-ribs 2.5s forwards";
        }, 250);
        ribs++;
    }
    else{
        setTimeout(function(){
            document.querySelector(".coin").style.animation = "spin-tails 3s forwards";
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