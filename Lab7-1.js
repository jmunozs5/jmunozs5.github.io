//Input
let dayOfWeek = new Date().getDay();
function totalamount() {let bp = parseFloat(document.getElementById("price").value);

//Process
if ((bp > 50) && (dayOfWeek == 2 || dayOfWeek == 3)){subtotal = bp*.90;}
else {subtotal = bp;}
											
//Output
let price = subtotal*1.06;
document.getElementById("submit").innerHTML = price.toFixed(2);}