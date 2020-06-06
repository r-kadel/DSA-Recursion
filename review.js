// - Input: `"Hello there, how are you? Can you tell me how to get to
// the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

function wordCount(str) {
  var punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`?~()]/g, '');
  var finalString = punctuationless.replace(/\s{2,}/g, ' ');
  let arr = finalString.toLowerCase().split(' ');
  let totalsObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!totalsObj[arr[i]]) {
      totalsObj[arr[i]] = 1;
    } else {
      totalsObj[arr[i]] += 1;
    }
  }
  console.log(totalsObj);
}

// wordCount(
//   'Hello there, how are you? Can you tell me how to get to the nearest Starbucks?'
// );

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToHead = function (value) {
  const newNode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
};

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

const LL = new LinkedList();
const node = new Node();

LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeFromHead = function () {
  if (!this.head) return null;
  const val = this.head.value
  this.head = this.head.next;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return val
};

LL.addToHead(10);
LL.addToHead(5);
LL.addToHead(5);
LL.addToHead(1);
LL.addToHead(5);
LL.addToHead(1);



//add indexOf take a value and return all index of value in array
// [3,5,8,3] => [0,3]

LinkedList.prototype.indexOf = function(searchTerm) {
  let currentNode = this.head;
  const results = [];
  let counter = 0;
  
  while(currentNode) {
    if (currentNode.value === searchTerm) {
      results.push(counter);
    }
    currentNode = currentNode.next;
    counter++ ;
  }

  return results;
}

console.log(LL.indexOf(5));
