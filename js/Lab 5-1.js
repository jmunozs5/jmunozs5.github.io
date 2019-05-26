function volume(){ 
    //INPUT
    let x = document.getElementById('r').value
    let y = document.getElementById('h').value
    //PROCESS
    let output = Math.PI * Math.pow(x, 2) * y
    let volumedecimals = (output.toFixed(2))*1000
        //OUTPUT
    document.getElementById('output').innerHTML = volumedecimals
        }