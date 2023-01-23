// Check Whether a String is Palindrome or Not

function palindrom(string) { 
    let newString = string.replace(/\s/g, "")  // remove all white spaces
    let reversedString = newString.split("").reverse().join("")
    if (newString == reversedString) {
        console.log(true)
    } else {
        console.log(false)
    }
    
}
palindrom("ab b a ")