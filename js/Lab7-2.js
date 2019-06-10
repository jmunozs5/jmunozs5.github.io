//Input
	
let day = new Date().getDay(); 
let month = new Date().getMonth();
let holiday = new Date().getDate();

//Processing

if ((day == 6) || (day == 0) || (month == 1 && holiday == 1) || (month == 7 && holiday == 4) || (month == 12 && holiday == 25)){result = "Sleep in";}
else {result = "Get up!";}
	
//Output
document.getElementById ("sleepclock").innerHTML = result