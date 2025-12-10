function isPalindrome(str) {
    let n=str.length
    for (let i = 0; i<n; i += 1){
        if (str[i] !== str[n - i - 1]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome("ABA"));