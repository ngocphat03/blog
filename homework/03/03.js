// var allUser = document.getElementById('allUser');
var numberUser = 0;
var checkPP1 = 1;
var checkPP2 = 1;
var checkPP3 = 1;
var checkPP4 = 1;
var checkPP5 = 1;
function people1(){
    checkPP1 += 1;
    if(checkPP1 % 2 == 0){
        var people1 = document.getElementById('people1');
        numberUser += 1;
        document.getElementById("allUser").innerHTML = numberUser + ' users selected';
        people1.style.backgroundColor = "#edf3ff";
        var PP1Btn = document.getElementById('PP1Btn');
        PP1Btn.style.backgroundColor = "#103c82";
    
    }
    else{
        numberUser -= 1;
        var people1 = document.getElementById('people1');
        document.getElementById("allUser").innerHTML = numberUser + ' users selected';
        people1.style.backgroundColor = "#ffffff";
        var PP1Btn = document.getElementById('PP1Btn');
        PP1Btn.style.backgroundColor = "#ffffff";
    }
}
function people2(){
    checkPP2 += 1;
    if(checkPP2 % 2 == 0){
        var people2 = document.getElementById('people2');
        numberUser += 1;
        document.getElementById("allUser").innerHTML = numberUser + ' users selected';
        people2.style.backgroundColor = "#edf3ff";
        var PP2Btn = document.getElementById('PP2Btn');
        PP2Btn.style.backgroundColor = "#103c82";
    }
    else{
        numberUser -= 1;
        var people2 = document.getElementById('people2');
        document.getElementById("allUser").innerHTML = numberUser + ' users selected';
        people2.style.backgroundColor = "#ffffff";
        var PP2Btn = document.getElementById('PP2Btn');
        PP2Btn.style.backgroundColor = "#ffffff";
    }
}
function people3(){
    checkPP3 += 1;
    if(checkPP3 % 2 == 0){
        var people3 = document.getElementById('people3');
        numberUser += 1;
        document.getElementById("allUser").innerHTML = numberUser + ' users selected';
        people3.style.backgroundColor = "#edf3ff";
        var PP3Btn = document.getElementById('PP3Btn');
        PP3Btn.style.backgroundColor = "#103c82";
    }
    else{
        numberUser -= 1;
        var people3 = document.getElementById('people3');
        document.getElementById("allUser").innerHTML = numberUser + ' users selected';
        people3.style.backgroundColor = "#ffffff";
        var PP3Btn = document.getElementById('PP3Btn');
        PP3Btn.style.backgroundColor = "#ffffff";
    }
}
function people4(){
    checkPP4 += 1;
    if(checkPP4 % 2 == 0){
        var people4 = document.getElementById('people4');
        numberUser += 1;
        document.getElementById("allUser").innerHTML = numberUser + ' users selected';
        people4.style.backgroundColor = "#edf3ff";
        var PP4Btn = document.getElementById('PP4Btn');
        PP4Btn.style.backgroundColor = "#103c82";
    }
    else{
        numberUser -= 1;
        var people4 = document.getElementById('people4');
        document.getElementById("allUser").innerHTML = numberUser + ' users selected';
        people4.style.backgroundColor = "#ffffff";
        var PP4Btn = document.getElementById('PP4Btn');
        PP4Btn.style.backgroundColor = "#ffffff";
    }
}
function people5(){
    checkPP5 += 1;
    if(checkPP5 % 2 == 0){
        var people5 = document.getElementById('people5');
        numberUser += 1;
        document.getElementById("allUser").innerHTML = numberUser + ' users selected';
        people5.style.backgroundColor = "#edf3ff";
        var PP5Btn = document.getElementById('PP5Btn');
        PP5Btn.style.backgroundColor = "#103c82";
    }
    else{
        numberUser -= 1;
        var people5 = document.getElementById('people5');
        document.getElementById("allUser").innerHTML = numberUser + ' users selected';
        people5.style.backgroundColor = "#ffffff";
        var PP5Btn = document.getElementById('PP5Btn');
        PP5Btn.style.backgroundColor = "#ffffff";
    }
}
function reset(){
    numberUser = 0; 
    checkPP1 = 1;
    checkPP2 = 1;
    checkPP3 = 1;
    checkPP4 = 1;
    checkPP5 = 1;
    document.getElementById("allUser").innerHTML = numberUser + ' users selected';
    var people1 = document.getElementById('people1');
    people1.style.backgroundColor = "#ffffff";
    var PP1Btn = document.getElementById('PP1Btn');
    PP1Btn.style.backgroundColor = "#ffffff";
    
    var people2 = document.getElementById('people2');
    people2.style.backgroundColor = "#ffffff";
    var PP2Btn = document.getElementById('PP2Btn');
    PP2Btn.style.backgroundColor = "#ffffff";
    
    var people3 = document.getElementById('people3');
    people3.style.backgroundColor = "#ffffff";
    var PP3Btn = document.getElementById('PP3Btn');
    PP3Btn.style.backgroundColor = "#ffffff";
    
    var people4 = document.getElementById('people4');
    people4.style.backgroundColor = "#ffffff";
    var PP4Btn = document.getElementById('PP4Btn');
    PP4Btn.style.backgroundColor = "#ffffff";
    
    var people5 = document.getElementById('people5');
    people5.style.backgroundColor = "#ffffff";
    var PP5Btn = document.getElementById('PP5Btn');
    PP5Btn.style.backgroundColor = "#ffffff";
    
}


var checkOd01 = 1;
function order01Hover(){
    checkOd01 += 1;
    if(checkOd01 % 2 == 0){
        var orderButton01 = document.getElementById('orderButton01');
        orderButton01.style.display = "block";
    }
    else{
        var orderButton01 = document.getElementById('orderButton01');
        orderButton01.style.display = "none";
    }
}
var checkOd02 = 1;
function order02Hover(){
    checkOd02 += 1;
    if(checkOd02 % 2 == 0){
        var orderButton02 = document.getElementById('orderButton02');
        orderButton02.style.display = "block";
    }
    else{
        var orderButton02 = document.getElementById('orderButton02');
        orderButton02.style.display = "none";
    }
}
var checkOd03 = 1;
function order03Hover(){
    checkOd03 += 1;
    if(checkOd03 % 2 == 0){
        var orderButton03 = document.getElementById('orderButton03');
        orderButton03.style.display = "block";
    }
    else{
        var orderButton03 = document.getElementById('orderButton03');
        orderButton03.style.display = "none";
    }
}
var checkOd04 = 1;
function order04Hover(){
    checkOd04 += 1;
    if(checkOd04 % 2 == 0){
        var orderButton04 = document.getElementById('orderButton04');
        orderButton04.style.display = "block";
    }
    else{
        var orderButton04 = document.getElementById('orderButton04');
        orderButton04.style.display = "none";
    }
}
var checkOd05 = 1;
function order05Hover(){
    checkOd05 += 1;
    if(checkOd05 % 2 == 0){
        var orderButton05 = document.getElementById('orderButton05');
        orderButton05.style.display = "block";
    }
    else{
        var orderButton05 = document.getElementById('orderButton05');
        orderButton05.style.display = "none";
    }
}
function user(){
    var pageOrder = document.getElementById("page-oder");
    pageOrder.style.display = "none";
    var pageUser = document.getElementById("page-user");
    pageUser.style.display = "block";

    var orders = document.getElementById("orders");
    orders.style.border = "0";
    orders.style.backgroundColor = "white";
    var user = document.getElementById("user");
    user.style.border = "2px solid #c7d2e6";
    user.style.backgroundColor = "#f5f8ff";
}
function order(){
    var pageUser = document.getElementById("page-user");
    pageUser.style.display = "none";
    var pageOrder = document.getElementById("page-oder");
    pageOrder.style.display = "block";

    var orders = document.getElementById("orders");
    orders.style.border = "2px solid #c7d2e6";
    orders.style.backgroundColor = "#f5f8ff";
    
    var user = document.getElementById("user");
    user.style.border = "0";
    user.style.backgroundColor = "white";
}