var time = require('../modules/timeFormat');
process.stdin.setEncoding('utf-8');

console.log('Write number of seconds: ');
process.stdin.on('readable', function() {    
    var input = process.stdin.read();    
    if(input !== null) {
        var instruction = parseInt(input.trim());
        if(Number.isInteger(instruction) === true) {                     
            var result = time.time(instruction);
            console.log(result);
        } else {
            console.log('Not an integer! Write correct number.');
        }         
    }
});