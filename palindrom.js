// Check Whether a String is Palindrome or Not

function palindrom(string) { 
    let newString = string.replace(/\s/g, "").toLowerCase()  // remove all white spaces
     //  newString = string.replace(/[^A-Z]/ig, "").toLowerCase() // will remove all other char exept a-z
    let reversedString = newString.split("").reverse().join("")
    if (newString == reversedString) {
        console.log(true)
    } else {
        console.log(false)
    }
    
}
palindrom("yooy. -2 ")