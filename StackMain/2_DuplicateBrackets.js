const duplicateBrackets = (str) => {
  let stack = [];
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (ch == '+' || ch == '-' || ch == '' || ch == '/' || ch == '*' || ch == '(') {
      stack.push(ch)
    } else if (ch == ')') {
      if (stack.length > 0 && stack[stack.length - 1] == '(') {
        ans = 1;
        break;
      } else {
        while (stack[stack.length - 1] != '(') {
          stack.pop();
        }
        stack.pop()
      }
    }
  }

  return ans;
}

// Submitted code on interview bit
duplicateBrackets("(a+(a+b))")