const LinkList = require("./linklist");

class LinkListStack {
  constructor() {
    this.list = new LinkList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const stack = new LinkListStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
stack.pop();
stack.print();
