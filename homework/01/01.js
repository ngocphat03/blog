var calculation ="";
function cl(){
    calculation = "";
    document.getElementById("out").innerHTML = 0;
}
function negative(){
    nega = calculation; 
    nega = nega * -1;
    calculation = nega;
    document.getElementById("out").innerHTML = calculation;
}
function percent(perin){
    per = calculation;
    per = per * 0.01;
    calculation = per;
    document.getElementById("out").innerHTML = calculation;
}
 function doc(){
    calculation += ".";
    document.getElementById("out").innerHTML = calculation;
}
function num(x){
    var text = x.toString();
    calculation = calculation + text;
    document.getElementById("out").innerHTML = calculation;
}
function cal(pt){
    calculation1 = calculation;
    calculation1 += pt;
    calculation = "";
}
function res(){
    calculationAll = calculation1 + calculation;
    var result = eval(calculationAll);
    document.getElementById("out").innerHTML = result;
    calculation = result;
}