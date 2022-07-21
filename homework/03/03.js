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
        var odCheckBtn1 = document.getElementById('odCheckBtn1');
        odCheckBtn1.style.backgroundColor = "#103c82";
        var bgClOdr1 = document.getElementById('order01');
        bgClOdr1.style.backgroundColor = "#edf3ff";
    }
    else{
        var odCheckBtn1 = document.getElementById('odCheckBtn1');
        odCheckBtn1.style.backgroundColor = "#ffffff";
        var bgClOdr1 = document.getElementById('order01');
        bgClOdr1.style.backgroundColor = "#ffffff";
    }
}
var checkOd02 = 1;
function order02Hover(){
    checkOd02 += 1;
    if(checkOd02 % 2 == 0){
        var odCheckBtn2 = document.getElementById('odCheckBtn2');
        odCheckBtn2.style.backgroundColor = "#103c82";
        var bgClOdr2 = document.getElementById('order02');
        bgClOdr2.style.backgroundColor = "#edf3ff";
    }
    else{
        var odCheckBtn2 = document.getElementById('odCheckBtn2');
        odCheckBtn2.style.backgroundColor = "#ffffff";
        var bgClOdr2 = document.getElementById('order02');
        bgClOdr2.style.backgroundColor = "#ffffff";
    }
}
var checkOd03 = 3;
function order03Hover(){
    checkOd03 += 1;
    if(checkOd03 % 2 == 0){
        var odCheckBtn3 = document.getElementById('odCheckBtn3');
        odCheckBtn3.style.backgroundColor = "#103c82";
        var bgClOdr3 = document.getElementById('order03');
        bgClOdr3.style.backgroundColor = "#edf3ff";
    }
    else{
        var odCheckBtn3 = document.getElementById('odCheckBtn3');
        odCheckBtn3.style.backgroundColor = "#ffffff";
        var bgClOdr3 = document.getElementById('order03');
        bgClOdr3.style.backgroundColor = "#ffffff";
    }
}
var checkOd04 = 1;
function order04Hover(){
    checkOd04 += 1;
    if(checkOd04 % 2 == 0){
        var odCheckBtn4 = document.getElementById('odCheckBtn4');
        odCheckBtn4.style.backgroundColor = "#103c82";
        var bgClOdr4 = document.getElementById('order04');
        bgClOdr4.style.backgroundColor = "#edf3ff";
    }
    else{
        var odCheckBtn4 = document.getElementById('odCheckBtn4');
        odCheckBtn4.style.backgroundColor = "#ffffff";
        var bgClOdr4 = document.getElementById('order04');
        bgClOdr4.style.backgroundColor = "#ffffff";
    }
}
var checkOd05 = 1;
function order05Hover(){
    checkOd05 += 1;
    if(checkOd05 % 2 == 0){
        var odCheckBtn5 = document.getElementById('odCheckBtn5');
        odCheckBtn5.style.backgroundColor = "#103c82";
        var bgClOdr5 = document.getElementById('order05');
        bgClOdr5.style.backgroundColor = "#edf3ff";
    }
    else{
        var odCheckBtn5 = document.getElementById('odCheckBtn5');
        odCheckBtn5.style.backgroundColor = "#ffffff";
        var bgClOdr5 = document.getElementById('order05');
        bgClOdr5.style.backgroundColor = "#ffffff";
    }
}
var checkOdAllClick = 1;
function odAllClick(){
    checkOdAllClick += 1;
    if(checkOdAllClick % 2 == 0){
        checkOd01 = 0;
        checkOd02 = 0;
        checkOd03 = 0;
        checkOd04 = 0;
        checkOd05 = 0;
        var odAll = document.getElementById('odAll');
        odAll.style.backgroundColor = "#103c82";
        var odCheckBtn1 = document.getElementById('odCheckBtn1');
        odCheckBtn1.style.backgroundColor = "#103c82";
        var bgClOdr1 = document.getElementById('order01');
        bgClOdr1.style.backgroundColor = "#edf3ff";
        var odCheckBtn2 = document.getElementById('odCheckBtn2');
        odCheckBtn2.style.backgroundColor = "#103c82";
        var bgClOdr2 = document.getElementById('order02');
        bgClOdr2.style.backgroundColor = "#edf3ff";
        var odCheckBtn3 = document.getElementById('odCheckBtn3');
        odCheckBtn3.style.backgroundColor = "#103c82";
        var bgClOdr3 = document.getElementById('order03');
        bgClOdr3.style.backgroundColor = "#edf3ff";
        var odCheckBtn4 = document.getElementById('odCheckBtn4');
        odCheckBtn4.style.backgroundColor = "#103c82";
        var bgClOdr4 = document.getElementById('order04');
        bgClOdr4.style.backgroundColor = "#edf3ff";
        var odCheckBtn5 = document.getElementById('odCheckBtn5');
        odCheckBtn5.style.backgroundColor = "#103c82";
        var bgClOdr5 = document.getElementById('order05');
        bgClOdr5.style.backgroundColor = "#edf3ff";
    }
    else{
        checkOd01 = 1;
        checkOd02 = 1;
        checkOd03 = 1;
        checkOd04 = 1;
        checkOd05 = 1;
        var odAll = document.getElementById('odAll');
        odAll.style.backgroundColor = "#ffffff";
        var odCheckBtn1 = document.getElementById('odCheckBtn1');
        odCheckBtn1.style.backgroundColor = "#ffffff";
        var bgClOdr1 = document.getElementById('order01');
        bgClOdr1.style.backgroundColor = "#ffffff";
        var odCheckBtn2 = document.getElementById('odCheckBtn2');
        odCheckBtn2.style.backgroundColor = "#ffffff";
        var bgClOdr2 = document.getElementById('order02');
        bgClOdr2.style.backgroundColor = "#ffffff";
        var odCheckBtn3 = document.getElementById('odCheckBtn3');
        odCheckBtn3.style.backgroundColor = "#ffffff";
        var bgClOdr3 = document.getElementById('order03');
        bgClOdr3.style.backgroundColor = "#ffffff";
        var odCheckBtn4 = document.getElementById('odCheckBtn4');
        odCheckBtn4.style.backgroundColor = "#ffffff";
        var bgClOdr4 = document.getElementById('order04');
        bgClOdr4.style.backgroundColor = "#ffffff";
        var odCheckBtn5 = document.getElementById('odCheckBtn5');
        odCheckBtn5.style.backgroundColor = "#ffffff";
        var bgClOdr5 = document.getElementById('order05');
        bgClOdr5.style.backgroundColor = "#ffffff";
    }
}

function user(){
    var pageOrder = document.getElementById("page-oder");
    pageOrder.style.display = "none";
    var pageUser = document.getElementById("page-user");
    pageUser.style.display = "block";

    var orders = document.getElementById("orders");
    orders.style.border = "2px solid white";
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
    user.style.border = "2px solid white";
    user.style.backgroundColor = "white";
}