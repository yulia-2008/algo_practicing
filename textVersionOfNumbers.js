// write function that returns the text version of the number.
// Exp: 310 -> three hundred ten.
// Accepting numbers between zero and one million (exclusive)

function numberToText (num) {
    let ones=['', 'one', 'two', 'three', 'four', 'five', 'six',
             'seven', 'eight', 'nine']
    let teens = ['ten',' eleven', 'twelve', 'thirteen','fourteen',
              'fifteen', ' sixteen', 'seventeen', 'eighteen', 'nineteen']
    let tens=['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    let hundreds=[]
    let thousands=[]
    let million=[]
    let reverse = num.toString()

    for(i=0; i<=reverse.length-1; i++){
      if (i>=reverse.length-3){    //pushes 3 last numbers to hundreds array
        hundreds.push(reverse[i])
      }
      else if(i<=reverse.length-3 && i>=reverse.length-6){  // pushes 3 next numbers to thousands array
        thousands.push(reverse[i])
      }
      else if(i<=reverse.length-6){   // pushes 3 first numbers to million array
        million.push(reverse[i])
      }
    } 

    // if (hundreds.length == 3 && hundreds[0] == 0){      
    //     hundreds[0] = ones[hundreds[0]]
        
    // }
    // if (hundreds.length == 3 && hundreds[0] == 1){      // single hundreds case
    //     hundreds[0] = ones[hundreds[0]] + '' + 'hundred'
    // } 
    // if (hundreds.length == 3){                          // multiple hundreds case
    //     hundreds[0] = ones[hundreds[0]] + '' + 'hundreds'
    // }

    // if (hundreds.length == 2){
    //     hundreds[0]
    // }


    for(i=0; i<=hundreds.length-1; i++){   // switching hundreds array for words

           // switching index 0 (hundreds)
        if(i == hundreds.length-3 && hundreds[i] == 0){         // 0 hundreds case
            hundreds[i] = ones[hundreds[i]]
        }
        else if(i== hundreds.length-3  && hundreds[i] == 1){     // single hundreds case
            hundreds[i] = ones[hundreds[i]] + '' + 'hundred'    
        }
        else if (i == hundreds.length-3){                       // multiple hundreds case
            hundreds[i] = ones[hundreds[i]] + '' + 'hundreds'    
        } 
            // switching index 1 (tens)
        else if( i == hundreds.length-2 && hundreds[i] != 1){    // switching 20,30,...
            hundreds[i] = tens[hundreds[i]]                      // skiping 10 to 19
        }
        // else if (i == hundreds.length-1 && hundreds[i-1] ==1){        
        //     hundreds[i-1] = tens[hundreds[i-1]]                 // '1' switching for ""
        //     //hundreds[i] =  ones[hundreds[i+10]]
        //     //.log('test', ones[hundreds[i] ] ) 
        //     //console.log('test1', ones[hundred[i+10]])
        //                      
        // }    
             // switching index 2 (ones)
        else if (i == hundreds.length-1 && hundreds[i-1] !=1){       // switching ones if no '1' before
            hundreds[i] = ones[hundreds[i]]
        }
        else if (i == hundreds.length-1){             // case if previous (index 1) is '1' 
            hundreds[i-1] = tens[hundreds[i-1]]       // switching '1' for "" 
            hundreds[i] =  teens[hundreds[i]]         // switching index 2 for 'teen'
        }
    }

   console.log( "h",hundreds)
   console.log('t', thousands)
   console.log('m', million) 
}
numberToText(1234511)
