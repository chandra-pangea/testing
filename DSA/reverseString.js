function reverseString(str) {
    let reversedString=""
    for (let i = str.length-1; i >=0; i -= 1){
        reversedString+=str[i]
    }
    return reversedString
}

console.log(reverseString("ABCDE"));