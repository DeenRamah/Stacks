function reverseString(str) {
  const stack = new ArrayStack();
  for (let char of str) {
    stack.push(char);
  }
  let reversed = "";
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
}

console.log(reverseString("hello")); // "olleh"
