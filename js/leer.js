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
var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')



//window.onload = n1.slideUp(); n2.slideUp();



function yeah(n) {
    switch (n) {
        case 1:
            if (!a) {
                n1.slideDown();
                document.getElementById('btn').innerHTML = "READ LESS";
                a = 1;
            }
            else {
                n1.slideUp();
                document.getElementById('btn').innerHTML = "READ MORE";
                a = 0;
            }
            break;

        case 2:
            if (!a) {
                n2.slideDown();
                document.getElementById('btn2').innerHTML = "READ LESS";
                a = 1;
            }
            else {
                n2.slideUp();
                document.getElementById('btn2').innerHTML = "READ MORE";
                a = 0;
            }
            break;
    }
}