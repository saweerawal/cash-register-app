var billAmount = document.querySelector("#bill-amount");
var cashAmount = document.querySelector("#cash-amount");
var checkBtn   = document.querySelector("#check-btn");
var nextBtn    = document.querySelector("#next-btn");
var table      = document.querySelector(".change-table");
var notesValue = document.querySelectorAll(".notes-value");
var cashLabel  = document.querySelector("#cash-label")
var error      = document.querySelector("#error");

function initializeDefaultValue(){
    checkBtn.style.display   = "none";
    table.style.display      = "none";
    cashAmount.style.display = "none";
    cashLabel.style.display  = "none";
    error.style.display      = "none";
}

function updateNextValue(){
    error.style.display      = "none";
    nextBtn.style.display    = "none"; 
    checkBtn.style.display   = "block";
    cashAmount.style.display = "block";
    cashLabel.style.display  = "block";
}

function updateCheckValue(){
    error.style.display      = "none";
    nextBtn.style.display    = "none"; 
    checkBtn.style.display   = "block";
    cashAmount.style.display = "block";
    cashLabel.style.display  = "block";
    table.style.display      = "block";

}

initializeDefaultValue();

const notes= [2000, 500, 100, 20, 10, 5, 1];

nextBtn.addEventListener("click", function takeNextInput()  {
    if(billAmount.value > 0){
        updateNextValue();
    }
    else{
        if(Number.isInteger(parseInt(billAmount.value))){
            showError("Invalid Bill Amount");    
        }
        else{
            showError("Bill Amount should be Integral Value");
            
        }
        
    }
    
})

checkBtn.addEventListener("click", function checkNotes()  {
    var finalValue = cashAmount.value - billAmount.value; 
    if(finalValue >= 0){
        updateCheckValue();
        for(var index=0;index<notes.length;index++){
            notesValue[index].innerText = "";
            var result = Math.trunc(finalValue / notes[index]);
            if(result > 0){notesValue[index].innerText = result;}          
            finalValue = finalValue % notes[index];
        }
    }
    else{

        showError("Do you want to wash dishes?");     
    }
    
})

function showError(errormessage){
    table.style.display = "none";
    error.style.display = "block";
    error.innerText     = errormessage;
}

