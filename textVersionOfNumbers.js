// Write a function that returns the text version of the number.
// Example: 310 --> three hundred ten.
// Accepting numbers between zero and one million (exclusive)

function numberToText (num) {
    let ones=['', 'one', 'two', 'three', 'four', 'five', 'six',
             'seven', 'eight', 'nine']
    let teens = ['ten','eleven', 'twelve', 'thirteen','fourteen',
              'fifteen', ' sixteen', 'seventeen', 'eighteen', 'nineteen']
    let tens=['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    let hundred=[]
    let thousand=[]
    let million=[]
    let reverse = num.toString()
      
    // splitting string with numbers into 3 arrays
    for(i=0; i<=reverse.length-1; i++){
      if (i>=reverse.length-3){    //pushes 3 last numbers to hundred array
        hundred.push(reverse[i])
      }
      else if(i<=reverse.length-3 && i>=reverse.length-6){  // pushes 3 next numbers to thousand array
        thousand.push(reverse[i])
      }
      else if(i<=reverse.length-6){   // pushes 3 first numbers to million array
        million.push(reverse[i])
      }
    } 

    function translate(array){
    // switching array elements ('12' --> "twelve")
        for(i=0; i<=hundred.length-1; i++){   
            // switching index 0 (hundreds)
            if(i == array.length-3 && array[i] == 0){           // 0 hundreds case
                array[i] = ones[array[i]]
            }
            else if (i == array.length-3){                       
                array[i] = ones[array[i]] + ' ' + 'hundred'    
            } 
            // switching index 1 (tens)
            else if( i == array.length-2 && array[i] != 1){    // switching 20,30,...
                array[i] = tens[array[i]]                      // skiping 10 to 19
            }
            // switching index 2 (ones)
            else if (i == array.length-1 && array[i-1] !=1){     // switching if previous (index 1) is not '1'
                array[i] = ones[array[i]]
            }
            else if (i == array.length-1){             // switching if previous (index 1) is '1' 
                array[i-1] = tens[array[i-1]]          // switching '1' for "" 
                array[i] =  teens[array[i]]           // switching index 2 for 'teen'
            }
        }
    }
    translate(hundred)
    translate(thousand)
    translate(million)

   // combining 3 arrays into string
   let string = million.concat('million', thousand, "thousand", hundred).toString()
   let result = string.replace(/,/g, " ") 

   console.log(result)
}

numberToText(12345678)  
// output :twelve million three hundred forty five thousand six hundred seventy eight
