var calculation ="";
function num(x){
    calculation += x;
}
function cal(pt){
    calculation += pt;
}
function res(){
    var result = eval(calculation);
    alert(calculation + "=" + result);
    calculation="";
}
// function display(){
//     document.getElementsByClassName("p").innerText = display;
// }
// alert(display);
// var button = document.getElementsByClassName('button');
// onclick.button{
//     alert("hmm");
// }
// var p = document
// function test{
//     document.getElementsById("output--text").innerHTML = "I'm god";
// }