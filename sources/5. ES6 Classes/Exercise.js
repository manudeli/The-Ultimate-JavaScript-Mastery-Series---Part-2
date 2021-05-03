const _items = new WeakMap();

class Stack {
  constructor(items = []) {
    _items.set(this, items);
  }

  peek() {
    this.ifEmptyStack("Peek method not worked, cause empty Stack");
    return _items.get(this)[this.count - 1];
  }

  pop() {
    this.ifEmptyStack("Pop method not worked, cause empty Stack");
    return _items.get(this).pop();
  }

  push(item) {
    _items.get(this).push(item);
  }

  get count() {
    return _items.get(this).length;
  }

  ifEmptyStack(errorMessage) {
    if (this.count <= 0) throw new Error(errorMessage);
  }
}

const stack = new Stack();
console.log(stack);
stack.push("hi");
console.log(stack._items); // can't access Private member, _items
console.log(stack.count);
console.log(stack.peek());
console.log(stack.count);
console.log(stack.pop());
console.log(stack.count);

// Error handling
console.log(stack.pop());
console.log(stack.peek());
