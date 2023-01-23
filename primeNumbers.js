// check if a number is prime
function prime(num){
    let result 
    if (num > 1 && Number.isInteger(num)){
        for(i=2; i<num; i++){
            if (num % i == 0){
                result = 'not prime';
                break;
            }else{
                result = 'prime'
            }
        }}
        else {
            result= 'not prime'
        }
    console.log(result)
  }
  

prime(1)