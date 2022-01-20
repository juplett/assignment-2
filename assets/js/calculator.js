'use strict';



/*
links:
https://www.w3schools.com/js/js_classes.asp#:~:text=Class%20methods%20are%20created%20with,
add%20any%20number%20of%20methods.

https://www.w3schools.com/jsref/jsref_eval.asp
*/

const numBtn = document.getElementsByClassName('num');
const curAns = document.getElementById('cur-ans');
var calculation;

for  (const num of numBtn) {
    num.addEventListener('click', function() { 
        
        if(num.value === 'Clear') {
            calculation = curAns.innerText = "";
        }

         else if (num.value != "=" && num.value != "Clear") {
            calculation = curAns.innerText += num.value;
         }

        else if(num.value === '=') {
            calculation = curAns.innerText;
            calculation = eval("return " + calculation);
        }
     })
    }

    


