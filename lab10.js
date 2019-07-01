function doInputOutput(){
    let fa =parseInt(document.getElementById("f").value);
    let mi =parseInt(document.getElementById("m").value);
    let output = windChill(fa, mi);
    document.getElementById("submit").innerHTML = output;}
    
    function windChill(temp, speed){
        let farenheit = "";
        if (temp <= 50 && speed >= 3){
            farenheit = (35.74 + 0.6215*temp - 35.75* Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed(2);}
        else {farenheit = "N/A";}
        return farenheit;}
    