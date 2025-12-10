function isAnagram(s1, s2) {
    return s1.sort().toLowercase()==s2.sort().toLowercase()
}

console.log(isAnagram("absd", "asbd"));