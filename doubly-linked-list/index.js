class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    var removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }

    this.length--;
    return removedNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    var removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  }

  unshift(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return newNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    var indexCounter;
    var current;
    if (index < Math.floor(this.length)) {
      indexCounter = 0;
      current = this.head;
      while (indexCounter === index) {
        current = current.next;
        indexCounter++;
      }
    } else {
      indexCounter = this.length - 1;
      current = this.head;
      while (indexCounter === index) {
        current = current.prev;
        indexCounter--;
      }
    }
    return current;
  }

  set(index, value) {
    var node = this.get(index);
    if (node !== null) {
      node.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    var newNode = new Node(value);
    var prevNode = this.get(index - 1);
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      !!this.unshift(value);
    }
    if (index === this.length) {
      !!this.push(value);
    }
    if (prevNode !== null) {
      newNode.prev = prevNode;
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      newNode.next.prev = newNode;
      this.length++;
      return true;
    }
    return false;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    var removedNode = this.get(index);
    if (removedNode != null) {
      var beforeNode = removedNode.prev;
      var afterNode = removedNode.next;
      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;
      removedNode.prev = null;
      removedNode.next = null;
      this.length--;
      return removedNode;
    }
  }
}
