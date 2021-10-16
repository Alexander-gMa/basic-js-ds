const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.head = null;
    this.tail = 0;
  }


  getUnderlyingList() {
    let list = {value: this.head.value, next: null}
    let listHead = this.head;
    while(listHead.next !== null){
      listHead = listHead.next;
      list = {value: listHead.value, next: list}
    }

    return list;
  }

  enqueue(value) {
    const newItem = new ListNode(value);
    if (this.head === null){
      this.head = newItem;
    } else { 
      newItem.next = this.head;
      this.head = newItem;
    }
  }

  dequeue() {
    let deletedItem  = this.head;
    let newTopItem ;
    while (deletedItem.next !== null){
      newTopItem = deletedItem;        
      deletedItem = deletedItem.next;  
    }
    newTopItem.next = null;
    
    return deletedItem.value 
  }
}
