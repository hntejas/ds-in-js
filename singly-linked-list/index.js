class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    } else {
      var current = this.head;
      var pre = current;

      while (current.next) {
        pre = current;
        current = current.next;
      }

      this.tail = pre;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    var removedNode = this.head;
    this.head = this.head.next;
    this.length--;

    return removedNode;
  }

  unshift(val) {
    var node = new Node(val);

    if (!head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    var counter = 0;
    var current = this.head;

    while (counter != index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, value) {
    var currentNode = this.get(index);

    if (!currentNode) return false;

    currentNode.val = value;

    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      return !!this.unshift(value);
    }

    if (index === this.length) {
      return !!this.push(value);
    }

    var newNode = new Node(value);
    var preNode = this.get(index - 1);
    newNode.next = preNode.next;
    preNode.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var prevNode = this.get(index - 1);
    var removedValue = prevNode.next.val;
    prevNode.next = prevNode.next.next;

    return removedValue;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var prev = null;
    var next;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}
