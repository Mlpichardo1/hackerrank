process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function processData(input) {
    //Enter your code here
    var evens = [];
    var odds = [];
    
  for (var i = 0; i < input.length; i++) {
    if(i % 2 === 0) { // index is even
        evens.push(input[i]);
    } else {
        odds.push(input[i]);    
    }
  }
    var out = evens.join("") + " " + odds.join("");

    return out;
}

function main() {
  var N = parseInt(readLine());
  var statement = "";
  for (var i = 1; i <= N; i++) {

    var input = readLine();
    statement = processData(input);
    console.log(statement);
  }
}