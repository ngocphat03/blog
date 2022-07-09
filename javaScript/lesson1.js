console.log('hmm')

const contener1 = document.getElementsByClassName('contener1');
contener1[0].style.backgroundColor = "blue";
contener1[0].style.color = "yellow";

const contener2 = document.getElementsByClassName('contener2');
contener2[0].style.backgroundColor = "yellow";
contener2[0].style.color = "blue";

const p = document.getElementsByTagName('p');
// p.style.text-align = 'center';


var change = document.getElementById('change');

change.onclick = () => {
    var a = Math.random();
    a *= 3;
    var a = Math.floor(a);

switch(a){
    case a = 0:
        contener1[0].style.backgroundColor = "yellow";
        contener1[0].style.color = "blue";

        contener2[0].style.backgroundColor = "blue";
        contener2[0].style.color = "yellow";
        break
    case a = 1:
        contener2[0].style.backgroundColor = "yellow";
        contener2[0].style.color = "blue";

        contener1[0].style.backgroundColor = "blue";
        contener1[0].style.color = "yellow";
        break;
    case a = 2:
        contener2[0].style.backgroundColor = "black";
        contener2[0].style.color = "white";

        contener1[0].style.backgroundColor = "white";
        contener1[0].style.color = "black";
}

    // var b = 10;
    // if(b % 2 == 0){
    //     contener1[0].style.backgroundColor = "yellow";
    //     contener1[0].style.color = "blue";

    //     contener2[0].style.backgroundColor = "blue";
    //     contener2[0].style.color = "yellow";
    // }
    // else{
    //     contener2[0].style.backgroundColor = "yellow";
    //     contener2[0].style.color = "blue";

    //     contener1[0].style.backgroundColor = "blue";
    //     contener1[0].style.color = "yellow";
    // }
    console.log(a);
    // contener1[0].style.backgroundColor = "yellow";
    // contener1[0].style.color = "blue";

    // contener2[0].style.backgroundColor = "blue";
    // contener2[0].style.color = "yellow";
}