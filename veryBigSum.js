function aVeryBigSum(n, ar) {
    
    for (var i = 0, sum = 0; i < ar.length; sum += ar[i++]);
    return sum;
}

/* 
Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
Input Format
The first line of the input consists of an integer . 
The next line contains  space-separated integers contained in the array.
Output Format
Print the integer sum of the elements in the array.
*/