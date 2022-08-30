const infixEvaluation = (str) => {
  let opnds = [];
  let oprts = []
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (ch == '(') {
      oprts.push(ch);
    } else if (!isNaN(ch - '0')) { // it is an operand
      opnds.push(ch - '0');
    } else if (ch == ')') {
      while (oprts.length > 0 && oprts[oprts.length - 1] != '(') {
        let operator = oprts.pop()
        let v2 = opnds.pop();
        let v1 = opnds.pop();
        let value = operation(v2, v1, operator)
        opnds.push(value)
      }
      oprts.length > 0 ? oprts.pop() : '';

    } else if (ch == '+' || ch == '-' || ch == '*' || ch == '/') {
      while (oprts.length > 0 && oprts[oprts.length - 1] != '(' && precendence(ch) <= precendence(oprts[oprts.length - 1])) {
        let operator = oprts.pop()
        let v2 = opnds.pop();
        let v1 = opnds.pop();
        let value = operation(v2, v1, operator)
        opnds.push(value)
      }
      oprts.push(ch)
    }
  }

  while (oprts.length > 0) {
    let operator = oprts.pop()
    let v2 = opnds.pop();
    let v1 = opnds.pop();
    let value = operation(v2, v1, operator)
    opnds.push(value)
  }

  console.log(opnds)
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

const ans = infixEvaluation("2+6*4/8-3")