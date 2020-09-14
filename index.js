// Calculation:
function result() {
  let bill = document.getElementById("bill").value;
  let tip = (parseInt(document.getElementById("tip").value, 10) * bill) / 100;
  let number = document.getElementById("number").value;
  let tipper = tip / number;
  let total = bill - -tip;
  let totalper = total / number;
  document.getElementById("tipf").innerHTML = "$" + tipper;
  document.getElementById("total").innerHTML = "$" + totalper;
}

//Buttons

document.getElementById("tm").addEventListener(
  "click",
  () => {
    document.getElementById("tip").value =
      parseInt(document.getElementById("tip").value, 10) - 1 + "%";
    result();
  },
  false
);

document.getElementById("tp").addEventListener(
  "click",
  () => {
    document.getElementById("tip").value =
      parseInt(document.getElementById("tip").value, 10) + 1 + "%";
    result();
  },
  false
);

document.getElementById("nm").addEventListener(
  "click",
  () => {
    document.getElementById("number").value =
      parseInt(document.getElementById("number").value, 10) - 1;
    result();
  },
  false
);

document.getElementById("np").addEventListener(
  "click",
  () => {
    document.getElementById("number").value =
      parseInt(document.getElementById("number").value, 10) + 1;
    result();
  },
  false
);
