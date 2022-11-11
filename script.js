'use strict'
const btnTip = document.querySelector('.form__btn--tip');
const inputTipAmount = document.querySelector('.form__input--tip-amount');
const inputPercentAmount = document.querySelector('.form__input--percent-amount');
const inputPeopleAmount = document.querySelector('.form__input--people-amount');
const totalTip = document.querySelector('.total');
const totalTipText = document.querySelector('.total-text');
const results = document.querySelector('.results-opinion');
const reset = document.querySelector('.reset');
const tori = document.querySelector('.tori');

btnTip.addEventListener('click', function(e) {
    e.preventDefault();
    const totalAmount = inputTipAmount.value * (inputPercentAmount.value * 0.01) / inputPeopleAmount.value;
    const roundedTotalAmount = totalAmount.toFixed(2);
    
    totalTip.textContent = `$${+roundedTotalAmount}`;

    if(inputTipAmount.value <= 0 || inputPercentAmount.value <= 0 || inputPeopleAmount.value <= 0) {
        
        alert("NOOOOOOOOO YOU BROKE IT NOOOO");
    }
        else if(inputPercentAmount.value < 15 ) {
        results.textContent = "pay more bruh";
    } else if (inputPercentAmount.value >= 15 && inputPercentAmount.value < 20) {
        results.textContent = "good amount";

    } else {
        results.textContent = "YOU SO NICE EEEEE";
    }

    if(inputTipAmount.value > 0 && inputPercentAmount.value > 0 && inputPeopleAmount.value > 0) {
        totalTip.style.opacity = 100;
        totalTipText.style.opacity = 100;
        results.style.opacity = 100;
        reset.style.opacity = 100;
        tori.style.opacity = 100;
    
        inputTipAmount.value = inputPercentAmount.value = '';
        inputPeopleAmount.value = '1';
        inputTipAmount.blur();
        inputPercentAmount.blur();
        inputPeopleAmount.blur();
    }
   
    
});

tori.addEventListener('click', function(e) {
    e.preventDefault();
    totalTip.style.opacity = 0;
    totalTipText.style.opacity = 0;
    results.style.opacity = 0;
    reset.style.opacity = 0;
    tori.style.opacity = 0;
});

console.log(typeof inputTipAmount)
console.log(inputTipAmount.value + inputPercentAmount.value);