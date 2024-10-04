const Linklist = require("./linklist");

class LinkListQueue {
  constructor() {
    this.queue = new Linklist();
  }

  enqueue(value) {
    this.queue.append(value);
  }

  dequeue() {
    return this.queue.removeFromFront();
  }

  peek() {
    return this.queue.head.value;
  }

  isEmpty() {
    return this.queue.isEmpty();
  }

  print() {
    return this.queue.print();
  }
}

const queue = new LinkListQueue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();

queue.dequeue();

console.log(queue.peek());

queue.print();
