//let prompt = require('prompt');
//const prompt = require("prompt");
// inputs: billAmount, tipRate
// outputs: tipAmount, totalAmount = tipAmount + billAmount
let billAmount = 0;
let tipRate = 0;
let tipAmount = 0;
let totalAmount = 0;

let calculateButton = document.getElementById("calculate");

calculateButton.addEventListener('click' , function() {
    let billAmountInput = document.getElementById("bill-amount");
    let tipRateInput = document.getElementById("tip-rate");
    billAmount = parseInt(billAmountInput.value);
    tipRate = parseInt(tipRateInput.value);
    tipAmount = billAmount * tipRate/100;
    totalAmount = billAmount + tipAmount;
    let tipResult = document.getElementById("tip-result");
    let totalResult = document.getElementById("total-result");
    tipResult.innerHTML = tipAmount;
    totalResult.innerHTML = totalAmount;
    //alert("hello "+ billAmount + tipRate);
    alert("hello "+ tipResult.innerHTML + totalResult.innerHTML);
});