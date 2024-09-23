class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peak() {
    if (!this.isEmpty()) {
      return this.items[0];
    }

    return null;
  }

  print() {
    console.log(this.items.toString());
  }
}

const myQueue = new Queue();

console.log(myQueue.isEmpty());
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.dequeue();
console.log(myQueue.peak());

myQueue.print();
