const Node = require('./node');
const List = require('./list');

function LList(array) {
  this.defArray = array;
  this.root = null;
  this.init(array);
}

LList.prototype = Object.create(List.prototype);
LList.prototype.constructor = LList;

LList.prototype.init = function(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    this.addStart(array[i]);
  }
};

LList.prototype.size = function() {
  if (this.root) {
    let size = 1;
    let current = this.root;

    while (current.next) {
      current = current.next;
      size += 1;
    }
    return size;
  }
  return 'Linked list is empty';
};

LList.prototype.addStart = function(element) {
  const node = new Node(element);
  node.next = this.root;
  this.root = node;
  return this.size();
};

LList.prototype.addEnd = function(element) {
  const node = new Node(element);
  let current = this.root;
  while (current.next) {
    current = current.next;
  }
  current.next = node;
  return this.size();
};

LList.prototype.addPosition = function(index, element) {
  if (this.root) {
    let i = 0;
    let current = this.root;

    if (index === 0) {
      this.addStart(element);
    } else if (index < this.size() && index >= 0) {
      while (index - i > 1) {
        current = current.next;
        i += 1;
      }
      const node = new Node(element);
      node.next = current.next;
      current.next = node;
    } else {
      return `Error! Index ${index} is not in range`;
    }
  }
};

LList.prototype.get = function(index) {
  if (index < 0 || index > this.size()) {
    return `Error! Index ${index} is not in range`;
  }
  let element = 0;
  if (index === 0) {
    element = this.root.val;
  } else {
    let current = this.root;
    let i = 0;

    while (i < index) {
      i += 1;
      current = current.next;
    }
    element = current.val;
  }
  return element;
};

LList.prototype.set = function(index, element) {
  if (index < 0 || index >= this.size()) {
    return `Error! Index ${index} is not available`;
  }
  let current = this.root;
  let i = 0;

  while (i < this.size()) {
    if (i === index) {
      current.val = element;
      break;
    }
    current = current.next;
    i += 1;
  }
};

LList.prototype.delStart = function() {
  const delElement = this.root.val;
  this.root = this.root.next;
  return delElement;
};

LList.prototype.delEnd = function() {
  let current = this.root;
  let delElement = 0;
  let previous = null;

  while (current.next) {
    previous = current;
    current = current.next;
  }
  previous.next = null;
  delElement = current.val;
  return delElement;
};

LList.prototype.delPosition = function(position) {
  if (position < 0 || position > this.size()) {
    return `Error! Position ${position} is not in range`;
  }
  let current = this.root;
  let delElement = 0;
  if (position === 0) {
    return this.delStart();
  }
  if (position === this.size() - 1) {
    return this.delEnd();
  }
  for (let i = 0; i < position - 1; i++) {
    current = current.next;
  }
  delElement = current.next.val;
  current.next = current.next.next;
  return delElement;
};

LList.prototype.toString = function() {
  if (this.root) {
    let string = '';
    let current = this.root;

    while (current) {
      string += current.val;
      current = current.next;
    }
    return string;
  }
  return 'Linked list is empty';
};

LList.prototype.toArray = function() {
  if (this.root) {
    const array = [];
    let current = this.root;
    let i = 0;

    while (current) {
      array[i] = current.val;
      current = current.next;
      i += 1;
    }
    return array;
  }
  return 'Linked list is empty';
};

LList.prototype.min = function() {
  if (this.root) {
    let minElement = this.root.val;
    let current = this.root;
    let i = 0;

    while (i < this.size()) {
      if (minElement > current.val) {
        minElement = current.val;
      }
      current = current.next;
      i += 1;
    }
    return minElement;
  }
  return 'Linked list is empty';
};

LList.prototype.max = function() {
  if (this.root) {
    let maxElement = this.root.val;
    let current = this.root;
    let i = 0;

    while (i < this.size()) {
      if (maxElement < current.val) {
        maxElement = current.val;
      }
      current = current.next;
      i += 1;
    }
    return maxElement;
  }
  return 'Linked list is empty';
};

LList.prototype.minIndex = function() {
  if (this.root) {
    let indexMinEl = 0;
    for (let i = 1; i < this.size(); i++) {
      if (this.get(i) < this.get(indexMinEl)) {
        indexMinEl = i;
      }
    }
    return indexMinEl;
  }
  return 'Linked list is empty';
};

LList.prototype.maxIndex = function() {
  if (this.root) {
    let indexMaxEl = 0;
    for (let i = 1; i < this.size(); i++) {
      if (this.get(i) > this.get(indexMaxEl)) {
        indexMaxEl = i;
      }
    }
    return indexMaxEl;
  }
  return 'Linked list is empty';
};

LList.prototype.sort = function() {
  const newNode = new Node(this.min());
  let node = newNode.next;
  this.delPosition(this.minIndex());

  while (this.root) {
    node = new Node(this.min());
    let nodeForSort = newNode;
    this.delPosition(this.minIndex());

    while (nodeForSort.next) {
      nodeForSort = nodeForSort.next;
    }
    nodeForSort.next = new Node(node.val);
  }
  this.root = newNode;
};

LList.prototype.reverse = function() {
  let current = this.root;
  this.root = null;

  while (current.next) {
    this.addStart(current.val);
    current = current.next;
  }
  this.addStart(current.val);
};

LList.prototype.halfReverse = function() {
  const length = this.size();
  let previous = null;
  let current = this.root;
  let next = null;
  let i = 0;

  while (i < Math.floor(length / 2) && current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i += 1;
  }

  this.root = previous;
  previous = null;
  next = null;

  if (length % 2 === 1) {
    this.addEnd(current.val);
    current = current.next;
  }

  while (i < length && current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i += 1;
  }

  while (previous) {
    this.addEnd(previous.val);
    previous = previous.next;
  }
};

LList.prototype.clear = function() {
  this.root = null;
  this.init(this.defArray);
};

module.exports = LList;
