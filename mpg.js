/*
Malek Mkaddem
Calorie Calculator Lab#3
This program will calculate the total calories and fat percentage based on 3 entries.
*/
"use strict";
    //alert("Yay ! Connected :)")
// assigning selector and error msg  
const sel = selector => document.querySelector(selector);
const getErrorMsg = (lbl) => `sel{lbl} is not correct!The number you have typed must be positive`;


const focusAndSelect = selector => {
    const elem = sel(selector);
    elem.select();
    elem.focus();
    
};
// this function is to make clear button delete (reset) all 5 boxes.
 const clearbox = () => {
      //  alert("Connected")
     sel("#fatgrams").value = ("");
     sel("#carbgrams").value = ("");
     sel("#proteingrams").value = ("");
     sel("#totalcalories").value = ("");
     sel("#fatpercentage").value = ("");
     
 }
 // values entries
const processEntries = () => {
    const fatgrams = parseFloat(sel("#fatgrams").value);
    const carbgrams = parseFloat(sel("#carbgrams").value);
    const proteingrams = parseFloat(sel("#proteingrams").value);
// Check and alert for user entry of positive numbers only 
    if (isNaN(fatgrams) || fatgrams <= 0) {
        alert(getErrorMsg("Fat Grams"));
        focusAndSelect("#fatgrams");
    } else if (isNaN(carbgrams) || carbgrams <= 0) {
        alert(getErrorMsg("Carb Grams"));
        focusAndSelect("#carbgrams");
    } else if (isNaN(proteingrams) || proteingrams <= 0) {
        alert(getErrorMsg("Protein Grams"));
        focusAndSelect("#proteingrams");
    } else {
        // Give the results for totalcalories and fatpercentage
        sel("#totalcalories").value = ((fatgrams*9) + carbgrams*4 + proteingrams*4).toFixed(2);
        sel("#fatpercentage").value =((fatgrams*9*100)/(fatgrams*9 + carbgrams*4 + proteingrams*4)).toFixed(2);       
    }
};
// giving clear and claculate life and focus text on fatgram box after error .
document.addEventListener("DOMContentLoaded", () => {
    sel("#calculate").addEventListener("click", processEntries);
    sel("#clear").addEventListener("click", clearbox);
    sel("#fatgrams").focus();
    
});
