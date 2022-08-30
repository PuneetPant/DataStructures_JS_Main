const infixConversions = (str) => {
  let post = [];
  let pre = [];
  let op = [];

  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);

    if (ch == '(') {
      op.push(ch);
    } else if (ch == ')') {
      while (op.length > 0 && op[op.length - 1] != '(') {

        let operator = op.pop();
        // post evaluation
        let pov2 = post.pop();
        let pov1 = post.pop();
        let poExp = operator + pov1 + pov2;
        post.push(poExp)
        // pre evluation
        let prv2 = pre.pop();
        let prv1 = pre.pop();
        let prExp = prv1 + prv2 + operator;
        pre.push(prExp)
      }
      op.pop();
    } else if (ch == '+' || ch == '-' || ch == '*' || ch == '/') {

    } else {
      post.push(ch);
      pre.push(ch)
    }
  }
}
const precendence = (operator) => {
  if (operator == '+' || operator == '-') {
    return 1
  } else if (operator == '*' || operator == '/') {
    return 2
  }
}

const operation = (v2, v1, operator) => {
  if (operator == '+') {
    return v1 + v2
  } else if (operator == '-') {
    return v1 - v2
  } else if (operator == '*') {
    return v1 * v2;
  } else if (operator == '/') {
    return v1 / v2
  }
}




const ans = infixConversions("2+6*4/8-3")