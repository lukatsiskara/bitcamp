document.addEventListener('DOMContentLoaded', () => {


//let prompt = require('prompt');
//const prompt = require("prompt");
// inputs: billAmount, tipRate
// outputs: tipAmount, totalAmount = tipAmount + billAmount
let englishWord;
let georgianMeaning;

let addWordButton = document.getElementById("add-word");

addWordButton.addEventListener('click' , function() {
    let englishWordInput = document.getElementById("bill-amount");
    let georgianMeaningInput = document.getElementById("tip-rate");
    englishWord = englishWordInput.value;
    georgianMeaning = georgianMeaningInput.value;
    let dictionaryWord = englishWord + " - " + georgianMeaning;
    const card = document.createElement('word');  //ცვლადი თითოეული ახალი ბარათისთვის
    card.textContent = dictionaryWord; 
    card.classList.add("word");
    const board = document.querySelector('.grid');
    board.appendChild(card);
    alert("hello "+ dictionaryWord);
    
});


/**
 * 
 * 
 * 
 * 
 */
})