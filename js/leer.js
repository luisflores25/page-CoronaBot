// var i = 0
// var mas = $('#more')
// var boton = document.getElementById('read')

// function read() {
//     if (!i) {
//         mas.slideDown()
//         boton.innerHTML = "LOAD LESS";
//         i = 1;
//     }
//     else {
//         mas.slideUp()
//         boton.innerHTML = "LOAD MORE"
//         i = 0;
//     }
// }

var a = 0
var n1 = document.getElementById('text1')
var n2 = document.getElementById('text2')



//window.onload = n1.hide(); n2.hide();
n1.hidden = true
n2.hidden = true

console.log(n1)

function yeah(n) {
    console.log(n)
    switch (n) {
         case 1:
            if (a == 0) {
                n1.hidden = false;
                document.getElementById('btn1').innerHTML = "MOSTRAR MENOS";
                a = 1;
            }
            else {
                n1.hidden = true;
                document.getElementById('btn1').innerHTML = "LEER MÁS";
                a = 0;
            }
            break;

        case 2:
            if (a == 0) {
                n2.hidden = false;
                document.getElementById('btn2').innerHTML = "MOSTRAR MENOS";
                a = 1;
            }
            else {
                n2.hidden = true;
                document.getElementById('btn2').innerHTML = "LEER MÁS";
                a = 0;
            }
            break;
    }
 }