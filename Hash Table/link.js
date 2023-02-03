class HashTable {
    constructor(size) {
        this.buckets = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.lenght; i++) {
            total += charCodeAt(i)
        }
        return total % this.size
    }

    insert(key, value) {
        let index = hash(key)
        if (!this.buckets[index]) {
            this.buckets[index] = new LinkedList()
        }
        this.buckets[index].insertLast(key, value)
    }
    get(key) {
        let index = this.hash(key)
        if (!this.buckets[index]) return null
        let currentNode = this.buckets[index].head
        while(currentNode){
            if(currentNode.value.key === key){
                return currentNode.value.value
            }
            currentNode = currentNode.next
        }
        return null
    }

    display() {
        for(i=0; i<this.buckets.length; i++){
            if(this.buckets[i]){
                console.log(i, this.buckets[i   ])
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class HashTable {
    constructor() {
        this.head = null
        this.tail = null
    }

    insertLast(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
        }
        this.tail = newNode
    }
}