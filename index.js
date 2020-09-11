
// Calculation:
function result() {
    let bill = document.getElementById('bill').value;
    let tip = parseInt(document.getElementById('tip').value, 10)* bill /100;
    let number = document.getElementById('number').value;
    let tipper = tip / number;
    let total= bill -(-tip);
    let totalper = total / number;
    document.getElementById('tipf').innerHTML = '$' + tipper;
    document.getElementById('total').innerHTML = '$' + totalper;
} 

//Buttons

document.getElementById('tm').addEventListener('click', function() {
    document.getElementById('tip').value =  parseInt(document.getElementById('tip').value, 10) - 1 + '%';
    result();
}, false)

document.getElementById('tp').addEventListener('click', function() {
    document.getElementById('tip').value =  parseInt(document.getElementById('tip').value, 10) + 1 + '%';
    result();
}, false)

document.getElementById('nm').addEventListener('click', function() {
    document.getElementById('number').value =  parseInt(document.getElementById('number').value, 10) - 1 ;
    result();
}, false)

document.getElementById('np').addEventListener('click', function() {
    document.getElementById('number').value =  parseInt(document.getElementById('number').value, 10) + 1;
    result();
}, false)




//Trash









//Eventlisteners

// document.getElementById('bill').addEventListener('change', result(), false)
// document.getElementById('tip').addEventListener('change', result(), false)
// document.getElementById('number').addEventListener('change', result(), false)



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


// function result() {
//     var resTip = eval(document.getElementById('bill').value * (document.getElementById('bill').value /100));
//     var tipPer = eval(resTip / document.getElementById('number').value);
//     var resTot = eval(document.getElementById('bill').value + resTip);
//     document.getElementById('tipf').innerHTML = tipPer;
//     document.getElementById('total').innerHTML = resTot;
// }