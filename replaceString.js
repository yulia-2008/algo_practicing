 // Write function that takes a string argument
 // and replace each letter in the string for the next letter in alphabet (hello -> ifmmp)

function replace(string){
    let newArray = []
    let alphabetArray = []
    let capString = string.toUpperCase()

    // fill out alphabetArray
    for (i=65; i<=90; i++){ 
        alphabetArray.push(String.fromCharCode(i))
    }

    // itterating string, find matching letter in alpabetArray and replacing it for a new letter
    for (i=0; i<=capString.length-1; i++){
        let ind = alphabetArray.findIndex(ind => ind == capString[i])
        newArray.push(alphabetArray[ind+1])   
    }

    newArray.join('') // converting [] to string without commas
    console.log(newArray.join(''))
}
replace('hello')