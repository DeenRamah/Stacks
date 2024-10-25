class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Add an item to the top of the stack
  push(item) {
    const newNode = new Node(item);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  // Remove and return the top item of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }

  // Return the top item of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.top.value;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Return the size of the stack
  getSize() {
    return this.size;
  }

  // Clear all items from the stack
  clear() {
    this.top = null;
    this.size = 0;
  }
}

// Example usage:
const linkedListStack = new LinkedListStack();
linkedListStack.push(10);
linkedListStack.push(20);
console.log(linkedListStack.pop()); // 20
console.log(linkedListStack.peek()); // 10
console.log(linkedListStack.isEmpty()); // false
