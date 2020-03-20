// find no is fizz, buzz or fizzBuzz for no 1 to 100
// if i is divisible by 3 print 'Fizz'
// if i is divisible by 5 print 'Buzz'
// if i is divisible by 3 & 5 print 'FizzBuzz'

function fizzBuzz(i){
    var str = '';
    if( i%3 == 0 && i%5 == 0 ){
        str = 'FizzBuzz'
    } else if ( i%3 == 0 ){
        str = 'Fizz'
    } else if( i%5 == 0){
        str = 'Buzz'
    } else {
        str = i;
    }
    console.log(str)
}


for(var i=1; i<=100; i++){
    fizzBuzz(i)
}