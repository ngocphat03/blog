//Bat dau voi viec x di truoc (chan x di truoc, le o di)
var soThuTu = 0;
//Khai bao cac truong hop co the thang
var truongHop1, truongHop2, truongHop3, truongHop4, truongHop5, truongHop6, truongHop7, truongHop8 = ' ';


var box1X = true;
function box1(){
    if (box1X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box1XO").innerHTML = 'X'; 
            box1X = false; 
        }
        else{
            document.getElementById("box1XO").innerHTML = 'O'; 
            box1X = false;
            truongHop1 += TH1;
        }
        soThuTu += 1;
    }
    else{}
}
var box2X = true;
function box2(){
    if (box2X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box2XO").innerHTML = 'X'; 
            box2X = false; 
        }
        else{
            document.getElementById("box2XO").innerHTML = 'O'; 
            box2X = false;
        }
        soThuTu += 1;
    }
    else{}
}
var box3X = true;
function box3(){
    if (box3X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box3XO").innerHTML = 'X'; 
            box3X = false; 
        }
        else{
            document.getElementById("box3XO").innerHTML = 'O'; 
            box3X = false;
        }
        soThuTu += 1;
    }
    else{}
}
var box4X = true;
function box4(){
    if (box4X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box4XO").innerHTML = 'X'; 
            box4X = false; 
        }
        else{
            document.getElementById("box4XO").innerHTML = 'O'; 
            box4X = false;
        }
        soThuTu += 1;
    }
    else{}
}
var box5X = true;
function box5(){
    if (box5X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box5XO").innerHTML = 'X'; 
            box5X = false; 
        }
        else{
            document.getElementById("box5XO").innerHTML = 'O'; 
            box5X = false;
        }
        soThuTu += 1;
    }
    else{}
}
var box6X = true;
function box6(){
    if (box6X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box6XO").innerHTML = 'X'; 
            box6X = false; 
        }
        else{
            document.getElementById("box6XO").innerHTML = 'O'; 
            box6X = false;
        }
        soThuTu += 1;
    }
    else{}
}
var box7X = true;
function box7(){
    if (box7X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box7XO").innerHTML = 'X'; 
            box7X = false; 
        }
        else{
            document.getElementById("box7XO").innerHTML = 'O'; 
            box7X = false;
        }
        soThuTu += 1;
    }
    else{}
}
var box8X = true;
function box8(){
    if (box8X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box8XO").innerHTML = 'X'; 
            box8X = false; 
        }
        else{
            document.getElementById("box8XO").innerHTML = 'O'; 
            box8X = false;
        }
        soThuTu += 1;
    }
    else{}
}
var box9X = true;
function box9(){
    if (box9X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box9XO").innerHTML = 'X'; 
            box9X = false; 
        }
        else{
            document.getElementById("box9XO").innerHTML = 'O'; 
            box9X = false;
        }
        soThuTu += 1;
    }
    else{}
}

// //reset
function reset(){
    soThuTu = 0;
    document.getElementById("box1XO").innerHTML = '';
    document.getElementById("box2XO").innerHTML = '';
    document.getElementById("box3XO").innerHTML = '';
    document.getElementById("box4XO").innerHTML = '';
    document.getElementById("box5XO").innerHTML = '';
    document.getElementById("box6XO").innerHTML = '';
    document.getElementById("box7XO").innerHTML = '';
    document.getElementById("box8XO").innerHTML = '';
    document.getElementById("box9XO").innerHTML = '';
    box1X = true;
    box2X = true;
    box3X = true;
    box4X = true;
    box5X = true;
    box6X = true;
    box7X = true;
    box8X = true;
    box9X = true;
}

// //check
function check(){
// Khai bao các biến để tính xem đã đúng chưa
    // var number1 = document.getElementById('box1XO'); 
    // alert(truongHop1);   
    var number111 = document.getElementById('BOX1');
    alert(number111);
}