function calculatewage(){ 
    //INPUT
    let x = document.getElementById('w').value;
    let y = document.getElementById('h').value;
    //PROCESS
    let payment = (x*y)
    let Tax = payment*0.15
    let output= payment - Tax
    //OUTPUT
    document.getElementById('output').innerHTML = output
        }