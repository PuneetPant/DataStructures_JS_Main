const balancedBrackets = () => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);

    if (ch == '(') {
      stack.push(ch);
    } else if (ch == ')') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        // show that it is not balanced
        return 0;
      }
    }
  }

  if (stack.length > 0) {
    return 0;
  } else {
    return 1;
  }
}

balancedBrackets("(()")

