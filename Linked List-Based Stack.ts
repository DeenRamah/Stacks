class Node<T>{
  value: T;
  next: Node<T> | null = null;

  constructor(value: T){
    this.value = value;
  }
}

class LinkedListStack<T>{
  private head: Node<T> | null = null;
  private count: number = 0;

  //Push a new item onto the stack

  push(item: T): void{
    const newNode = new Node(item);
    newNode.next = this.head;
    this.head = newNode;
    this.count++;
  }

  //Remove and return the top item from the stack
  pop():T | undefined{
    if(this.head == null){
      return undefined;
    }

    const value = this.head.value;
    this.head = this.head.value;
    this.count --;
    return value;
  }

  //Retunr the item from the stack without removing it
  peek(): T | undefined{
    return this.head?.value;
  }

  //check if the stack is empty
  isEmpty(): boolean{
    return this.head === null;
  }

  size(): number{
    return this.count;
  }

  //clear all items from the stack

  clear(): void {
    this.head = null;
    this.count =0;
  }
}
