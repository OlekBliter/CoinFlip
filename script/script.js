//change Mode

let mode = 0

function changeMode(){   
    document.querySelector('.changeMode').style.animation = 'none'
    if(mode==0){      
        mode++
        document.querySelector('.changeMode').style.animation = 'changeModeAnimationDark 1s forwards'
        document.querySelector('.wrap').style.backgroundImage = 'linear-gradient(90deg, rgb(59, 18, 97), rgb(128, 68, 128))'
        document.querySelector('#card1').style.background = 'rgb(141, 141, 141)'
        document.querySelector('#card2').style.background = 'rgb(141, 141, 141))'
        document.querySelector('#card3').style.background = 'rgb(141, 141, 141)'
        document.querySelector('*').style.color = 'white'
        document.querySelector('.shopTxt').style.color = 'white'
        document.querySelector('.achTxt').style.color = 'white'
        document.querySelector('.achievements').style.background = 'rgb(128, 68, 128)'
        document.querySelector('.shop').style.background = 'rgb(128, 68, 128)'
        document.querySelector('#flip').style.background = 'blueviolet'
        document.querySelector('#flip').style.border = '1.5px solid blueviolet'
        document.querySelector('#reset').style.background = 'rgb(141, 141, 141)'
        document.querySelector('#reset').style.border = '1.5px solid blueviolet'
        document.querySelector('#reset').style.color = 'blueviolet'
    }else{
        mode--
        document.querySelector('.changeMode').style.animation = 'changeModeAnimationLight 1s forwards'
        document.querySelector('.wrap').style.backgroundImage = 'linear-gradient(90deg, rgb(44, 211, 44), white)'
        document.querySelector('#card1').style.background = 'white'
        document.querySelector('#card2').style.background = 'white'
        document.querySelector('#card3').style.background = 'white'
        document.querySelector('*').style.color = 'black'
        document.querySelector('.shopTxt').style.color = 'black'
        document.querySelector('.achTxt').style.color = 'black'
        document.querySelector('.achievements').style.background = 'rgb(40, 209, 40)'
        document.querySelector('.shop').style.background = 'rgb(40, 209, 40)'
        document.querySelector('#flip').style.background = 'green'
        document.querySelector('#flip').style.border = '1.5px solid green'
        document.querySelector('#reset').style.background = 'aliceblue'
        document.querySelector('#reset').style.border = '1.5px solid green'
        document.querySelector('#reset').style.color = 'green'
    }
}

// main js

let heads = 0;
let tails = 0;
let ribs = 0;
let money = 0;

function updateStats(){
    document.getElementById("orel").textContent = 'Heads - ' + heads;
    document.getElementById("reshka").textContent = 'Tails - ' + tails;
    document.getElementById("rebro").textContent = 'Ribs - ' + ribs;
}
function updateMoney(){
    document.getElementById("money-count").textContent = '- ' + money;
}
function disBtn(){
    document.getElementById("flip").disabled = true;
    setTimeout(function(){
        document.getElementById("flip").disabled = false;
    },3500);
}
function flip(){
let random = Math.floor(Math.random() * 10000)
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
    money++;
    setTimeout(updateMoney, 500) 
    setTimeout(head1time, 3600) 
    setTimeout(tail1time, 3600) 
    setTimeout(rib1time, 3600) 
    setTimeout(head100times, 3600) 
    setTimeout(tail100times, 3600) 
    console.log(random)
};
function reset(){
    document.querySelector(".coin").style.animation = "none";
    heads = 0;
    tails = 0;
    ribs = 0;
    updateStats();
};



let z = 10001;

function ret(){
    document.getElementById('card1').style.zIndex = z+1;
    z++
}


//achievements js

function achievements(){
    document.getElementById('card3').style.zIndex = z+1;
    z++
}
let headTime1 = true;
let tailTime1 = true;
let ribTime1 = true;
let headTimes100 = true;
let tailTimes100 = true;

    function head1time() {
        if(headTime1==true && heads==1){
            alert('The coin stood on the Head. Congratulations!')
            headTime1 = false
            document.querySelector('.obja1').style.filter = 'grayscale(0%)'
        }
    }
    function tail1time() {
        if(tailTime1==true && tails==1){
            alert('The coin stood on the Tail. Congratulations!')
            tailTime1 = false
            document.querySelector('.obja2').style.filter = 'grayscale(0%)'
        }
    }
    function rib1time() {
        if(ribTime1==true && ribs==1){
            alert('The coin stood on the Rib. Congratulations!')
            ribTime1 = false
            document.querySelector('.obja3').style.filter = 'grayscale(0%)'

            document.querySelector('.hh4').style.filter = "grayscale(0%)"
            document.querySelector('.tt4').style.filter = "grayscale(0%)"
            document.querySelector('.cost4').textContent = "Got"
            document.querySelector('.cost4').style.color = "yellowgreen"
        }
    }
    function head100times() {
        if(headTimes100==true && heads==100){
            alert('The coin stood on the Head 100 times. Congratulations!')
            headTimes100 = false
            document.querySelector('.obja4').style.filter = 'grayscale(0%)'

            document.querySelector('.hh5').style.filter = "grayscale(0%)"
            document.querySelector('.tt5').style.filter = "grayscale(0%)"
            document.querySelector('.cost5').textContent = "Got"
            document.querySelector('.cost5').style.color = "yellowgreen"
        }
    }
    function tail100times() {
        if(tailTimes100==true && tails==100){
            alert('The coin stood on the Tail 100 times. Congratulations!')
            tailTimes100 = false
            document.querySelector('.obja5').style.filter = 'grayscale(0%)'

            document.querySelector('.hh6').style.filter = "grayscale(0%)"
            document.querySelector('.tt6').style.filter = "grayscale(0%)"
            document.querySelector('.cost6').textContent = "Got"
            document.querySelector('.cost6').style.color = "yellowgreen"
        }
    }

//shop js


function shop(){
    document.getElementById('card2').style.zIndex = z+1;
    z++
}

let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let c3 = document.querySelector('.c3');
let c4 = document.querySelector('.c4');
let c5 = document.querySelector('.c5');
let c6 = document.querySelector('.c6');
let c7 = document.querySelector('.c7');
let c8 = document.querySelector('.c8');
let c9 = document.querySelector('.c9');

let c1b = true;
let c2b = true;
let c3b = true;
let c4b = true;
let c5b = true;
let c6b = true;
let c7b = true;
let c8b = true;
let c9b = true;


function chooseC1() {
    document.getElementById("mainHeads").src="img/skins/front6.png";
    document.getElementById("mainTails").src="img/skins/back6.png";
    ret()
}

function boughtC2() {
    if(c2b==true){
        let buy = confirm('Do you really want to buy it?')
        if(buy==true){
            if(money>=10){
                money=money-10
                document.querySelector('.hh2').style.filter = "grayscale(0%)"
                document.querySelector('.tt2').style.filter = "grayscale(0%)"
                document.querySelector('.cost2').textContent = "Got"
                document.querySelector('.cost2').style.color = "yellowgreen"
                updateMoney()
                c2b = false
            }else{
                alert('You dont have enough money')
            }
        }else{
            alert('OK')
        } 
    }else{
        document.getElementById("mainHeads").src="img/skins/front.png";
        document.getElementById("mainTails").src="img/skins/back.png";
        ret()
    }
}



function boughtC3() {
    if(c3b==true){
        let buy = confirm('Do you really want to buy it?')
        if(buy==true){
            if(money>=50){
                money=money-50
                document.querySelector('.hh3').style.filter = "grayscale(0%)"
                document.querySelector('.tt3').style.filter = "grayscale(0%)"
                document.querySelector('.cost3').textContent = "Got"
                document.querySelector('.cost3').style.color = "yellowgreen"
                updateMoney()
                c3b = false
            }else{
                alert('You dont have enough money')
            }
        }else{
            alert('OK')
        } 
    }else{
        document.getElementById("mainHeads").src="img/skins/front3.png";
        document.getElementById("mainTails").src="img/skins/back3.png";
        ret()
    }
}



function boughtC4(){
    if(ribTime1==false){
        document.getElementById("mainHeads").src="img/skins/front2.png";
        document.getElementById("mainTails").src="img/skins/back2.png";
        ret()
    }
}



function boughtC5(){
    if(headTimes100==false){
        document.getElementById("mainHeads").src="img/skins/front1.png";
        document.getElementById("mainTails").src="img/skins/back1.png";
        ret()
    }
}



function boughtC6(){
    if(tailTimes100==false){
        document.getElementById("mainHeads").src="img/skins/front4.png";
        document.getElementById("mainTails").src="img/skins/back4.png";
        ret()
    }
}



function boughtC7() {
    if(c7b==true){
        let buy = confirm('Do you really want to buy it?')
        if(buy==true){
            if(money>=100){
                money=money-100
                document.querySelector('.hh7').style.filter = "grayscale(0%)"
                document.querySelector('.tt7').style.filter = "grayscale(0%)"
                document.querySelector('.cost7').textContent = "Got"
                document.querySelector('.cost7').style.color = "yellowgreen"
                updateMoney()
                c7b = false
            }else{
                alert('You dont have enough money')
            }
        }else{
            alert('OK')
        } 
    }else{
        document.getElementById("mainHeads").src="img/skins/front5.png";
        document.getElementById("mainTails").src="img/skins/back5.png";
        ret()
    }
}



function boughtC8() {
    if(c8b==true){
        let buy = confirm('Do you really want to buy it?')
        if(buy==true){
            if(money>=100){
                money=money-100
                document.querySelector('.hh8').style.filter = "grayscale(0%)"
                document.querySelector('.tt8').style.filter = "grayscale(0%)"
                document.querySelector('.cost8').textContent = "Got"
                document.querySelector('.cost8').style.color = "yellowgreen"
                updateMoney()
                c8b = false
            }else{
                alert('You dont have enough money')
            }
        }else{
            alert('OK')
        } 
    }else{
        document.getElementById("mainHeads").src="img/skins/front7.png";
        document.getElementById("mainTails").src="img/skins/back7.png";
        ret()
    }
}



function boughtC9() {
    if(c9b==true){
        let buy = confirm('Do you really want to buy it?')
        if(buy==true){
            if(money>=100){
                money=money-100
                document.querySelector('.hh9').style.filter = "grayscale(0%)"
                document.querySelector('.tt9').style.filter = "grayscale(0%)"
                document.querySelector('.cost9').textContent = "Got"
                document.querySelector('.cost9').style.color = "yellowgreen"
                updateMoney()
                c9b = false
            }else{
                alert('You dont have enough money')
            }
        }else{
            alert('OK')
        } 
    }else{
        document.getElementById("mainHeads").src="img/skins/front8.png";
        document.getElementById("mainTails").src="img/skins/back8.png";
        ret()
    }
}