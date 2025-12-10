function isValidBrackets(str) {
    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
  
    for (let char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }
        else if (char === ')' || char === ']' || char === '}') {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }
  
    return stack.length === 0;
}
  console.log(isValidBrackets("{[()]}"));
  console.log(isValidBrackets("([)]"));
  