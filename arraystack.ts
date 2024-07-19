class Arraystack<T>{
  private items:T[] =[];
  //push a new item into the stack

  push (item: T):void{
    this.items.push(item);
  }

  //Remove and return the top from the stack
  pop(): T | undefined{
    return this.items.pop();
  }

  //Return the top item from the stack without removing it
  peek(): T | undefined{
    retunr this.items[this.items.length -1];
  }

  //checl if the stack is empty
  isEmpty(): boolean{
    retun this.items.length ===0;
  }

  size(): number{
    return this.items.legth;
  }
  clear():void{
    this.items =[];
  }
}
