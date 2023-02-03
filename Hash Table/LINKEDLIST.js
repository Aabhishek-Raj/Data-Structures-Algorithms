class HashTable {
    constructor(size) {
      this.buckets = new Array(size);
      this.numBuckets = this.buckets.length;
    }
  
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      let bucket = total % this.numBuckets;
      return bucket;
    }
  
    insert(key, value) {
      let index = this.hash(key);
      if (!this.buckets[index]) {
        this.buckets[index] = new LinkedList();
      }
      this.buckets[index].insertLast({ key, value });
    }
  
    get(key) {  
      let index = this.hash(key);
      if (!this.buckets[index]) return null;
      let currentNode = this.buckets[index].head;
      while (currentNode) {
        if (currentNode.value.key === key) {
          return currentNode.value.value; 
        }
        currentNode = currentNode.next;
      }
      return null;
    }

    display(){
        for(let i=0; i<this.buckets.length; i++){
          if(this.buckets[i]){
            console.log(i, this.buckets[i])
          }
        }
    }
  }
  
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    insertLast(value) {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }
      this.tail = newNode;
    }
  }
  
  const table = new HashTable(50)



  table.insert('name', 'Bruce')
  table.insert('age', '25')
  table.get('age')
  
  console.log(table.get('age'))
  // table.display()

  table.insert('mane', 'clark')
  table.insert('mnae', 'kralc')
  
  table.insert('name', 'Ecurb')
  
  // table.remove('name')
  // table.insert('mane', 'omnk')
  table.display()
  console.log(table.get('mane'))