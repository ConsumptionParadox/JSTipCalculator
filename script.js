//Accessing our input boxes and storing them

const amount = document.getElementById('amount');
const guests = document.getElementById('guest');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');

//function that calculates total 

calculate = () => {
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2); //returns two decimal places only

    //reset fields
    amount.value = ''
    guests.value = ''
    quality.value = ''
    //making sure input fields were not empty upon calculate:
    if(tip === 'NaN'){
        tipAmount.innerHTML = 'Tip $0 each';
        showTipAmount();
    }
    else{
        tipAmount.innerHTML = 'Tip $' + tip + ' each';
        showTipAmount()
    }
}

showTipAmount = () =>{
    let x = tipAmount;
    x.className = 'show';
    //show for 3 seconds
    setTimeout(function(){x.className = x.className.replace('show', '');}, 3000);
}