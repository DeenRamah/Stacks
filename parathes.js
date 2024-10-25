function isBalanced(expression) {
  const stack = new ArrayStack();
  for (let char of expression) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}

console.log(isBalanced("(())")); // true
console.log(isBalanced("(()"));  // false
