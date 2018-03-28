// Print the elements of array  in reverse order as a single line of space-separated numbers.

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    arr = arr.reverse();
console.log(arr.join(' '));
    
}