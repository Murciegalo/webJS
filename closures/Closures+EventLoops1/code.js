// BASIC SAMPLES ON GLOBAL & LOCAL EXECUTIONS CONTEXTS AND CLOSURES
window.console.log('does');
//demonstration of how execution contexts work in their creation phase and its execution phase
// Demonstration
// 1. Try to log in the console the value of my buttons so:
for (var i = 0;  i < 3;  i++){
    document.getElementById(i).onclick = function(){
        console.log(i);
    }
}
// Result: It will always be 3
// First execution context applied & run by JS on creation & execution phase is the Loop which it will stop when i = 3;
// Next Execution context will run the 'onclick' function which lacks of 'i' arg so it will go up and take the value of i within for loop execution context.
// The output on this case it will always be : 3

// New EC for function(){console.log(i);} i = 3;
//-------------------------------------------------------------------------
// SOLUTION
for (var i = 0;  i < 3;  i++){
    document.getElementById(i).onclick = f(i);
}

// NEW LOCAL EXECUTION CONTEXT
function f (j){
  return function(){
    console.log(j);
  }
}
//Now we got a new execution context RETURN the i value each time onclick is run (as per loop for goes) getting the i value on every loop
