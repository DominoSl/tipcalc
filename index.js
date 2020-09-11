// function tipvalue() {
//     let tv = parseInt(document.getElementById('bill').value, 10) * parseInt(document.getElementById('tip').value, 10) /100;
//     console.log(tv);
// }

// function total() {
//     let tot = parseInt(document.getElementById('bill').value, 10) + tv;
//     console.log(tv);
// }

// document.getElementById('bill').addEventListener('change', function(){
//     document.getElementById('tip').innerHTML = 1056;
    // return eval(document.getElementById('bill').value / document.getElementById('number'));
// }, false)

let bill = parseInt(document.getElementById('bill'), 10);
let tip = parseInt(document.getElementById('tip'), 10);
let number = parseInt(document.getElementById('number'), 10);
function qw() {
    document.getElementById('tipf').innerHTML = bill;
} 

// document.getElementById('bill').addEventListener('change', result(), false)
// document.getElementById('tip').addEventListener('change', result(), false)
// document.getElementById('number').addEventListener('change', result(), false)


// function result() {
//     var resTip = eval(document.getElementById('bill').value * (document.getElementById('bill').value /100));
//     var tipPer = eval(resTip / document.getElementById('number').value);
//     var resTot = eval(document.getElementById('bill').value + resTip);
//     document.getElementById('tipf').innerHTML = tipPer;
//     document.getElementById('total').innerHTML = resTot;
// }