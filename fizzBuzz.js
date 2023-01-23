// A function should write the numbers from 1 to n. 
// Instead of any multiplier of 3, output is Fizz. 
// Instead of multiplers of 5, output is Buzz.
// If they happen at the same time the output is FizzBuzz

function fizzBuzz (n) {
    let array = []
 for(i=1; i<=n; i++){
    if( i%3 == 0 && i%5 == 0 ){
        array.push('FizzBuzz')
    }
    else if( i%5 == 0 ){
        array.push( 'Buzz')
    }else if ( i%3 == 0 ){
        array.push( 'Fizz')
    }
    else {
        array.push(i)
    }
 }
console.log(array)
}
fizzBuzz(20)