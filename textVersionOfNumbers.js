// write function that returns the text version of the number.
// Exp: 310 -> three hundred ten.
// Accepting numbers between zero and one million (exclusive)

function numberToText (num) {
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
      else if(i<=reverse.length-6){   // pushes last number to million array
        million.push(reverse[i])
      }
    }

   console.log( "h",hundrets)
   console.log('t', thousants)
   console.log('m', million)
   
}
numberToText(1234567)
