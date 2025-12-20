function isRotation(s1, s2) {
    if (s1.length !== s2.length) return false;

    return (s1 + s1).includes(s2);
}


// s1 = "abcd"
// s1+s1 = "abcdabcd"

// Possible rotations:
// abcd
// bcda
// cdab
// dabc
