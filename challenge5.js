// LOOPS Objective 
// In this challenge, we're going to use loops to help us do some simple math. Check out the Tutorial tab to learn more.

// Task 
// Given an integer, print its first  multiples. Each multiple  (where ) should be printed on a new line in the form: n x i = result.

function main() {
    var n = parseInt(readLine());
    var text = "";
    
 for (var i = 1; i <= 10; i++){
  
result = n * i;
     
     console.log(n + " x " +  i  + " = " + result);
 }
   
}