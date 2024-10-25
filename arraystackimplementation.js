class ArrayStack {
  constructor() {
    this.stack = [];
  }

  // Add an item to the top of the stack
  push(item) {
    this.stack.push(item);
  }

  // Remove and return the top item of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.stack.pop();
  }

  // Return the top item of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.stack[this.stack.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.stack.length;
  }

  // Clear all items from the stack
  clear() {
    this.stack = [];
  }
}

// Example usage:
const arrayStack = new ArrayStack();
arrayStack.push(10);
arrayStack.push(20);
console.log(arrayStack.pop()); // 20
console.log(arrayStack.peek()); // 10
console.log(arrayStack.isEmpty()); // false
