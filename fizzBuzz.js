// A function should write the numbers from 1 to n. 
// Instead of any multiplier of 3, output is Fizz. 
// Instead of multiplers of 5, output is Buzz.
// If they happen at the same time the output is FizzBuzz

function fizzBuzz (n) {
 for(i=1; i<=n; i++){
    if( i%3 == 0 && i%5 == 0 ){
        console.log('FizzBuzz')
    }
    else if( i%5 == 0 ){
        console.log( 'Buzz')
    }else if ( i%3 == 0 ){
        console.log( 'Fizz')
    }
    else {
        console.log(i)
    }
 }
}
fizzBuzz(20)