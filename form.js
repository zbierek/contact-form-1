function validateForm(){
    let imie = document.getElementById('imie').value
    if(imie.length < 3 || (imie='undefined'))
console.log('prosze podac imie');
    }