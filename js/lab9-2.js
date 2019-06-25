let table = document.getElementById("templeData");
let x = parseInt(table.rows[1].cells[1].innerHTML);
for (var i = 2; i < 7; i++) {
  if (parseInt(table.rows[i].cells[1].innerHTML) < x) {x = table.rows[i].cells[1].innerHTML;
let tab = table.rows[i].cells[0].innerHTML;
let output = tab;
document.getElementById("output").innerHTML = output;}
}