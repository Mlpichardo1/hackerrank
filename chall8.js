function processData(input) {
    var arr = input.split('\n');
    var phoneBook = {};
    var move = [];

    for (var i = 1; i < arr.length; i++) {
        // var check = new RegExp(/\d/g);
        // var digit = check.test(arr[i]);
        
        if (/\d/g.test(arr[i])) {

            var compile = arr[i].split(' ');
            var name = compile[0];
            var number = compile[1];
        phoneBook [name] = [number];
 
    } else  {
        move.push(arr[i]);
        // console.log("Not found");
    } 
} 
    for (i = 0; i < move.length; i++) {
     
     if (phoneBook[move[i]]) {
        console.log(move[i] + "=" + phoneBook[move[i]]);
} else {
    console.log('Not found');
}
}
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
