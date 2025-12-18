class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertAtHead(data) {
        const node = new Node(data)
        node.next = this.head

        this.head = node
        this.size++
    }

    printList() {
        let current = this.head; 
        let listString = "";

        while (current) {
            listString += current.data + (current.next ? " -> " : "");
            current = current.next; 
        }
        console.log(listString);
    }

    removeHead() {
        if(!this.head) {
            return null
        }
        const removedData = this.head.data
        this.head = this.head.next
        this.size--
        return removedData
    }

    reverseList() {
        let previous = null
        let current = this.head
        let nextNodeTemp = null
        
        while (current != null) {
            nextNodeTemp = current.next
            current.next = previous

            previous = current
            current = nextNodeTemp
        }
        this.head = previous
    }
    
    reverseWithRecursion() {
        this.head = this.reverseRecursive(this.head)
    }
    
    reverseRecursive(head) {
        if(head == null || head.next == null) {
            return head
        }
        const newHead = this.reverseRecursive(head.next)


        head.next.next = head
        head.next = null

        return newHead
    }
}

const list = new LinkedList()
list.insertAtHead('A')
list.insertAtHead('B')
list.insertAtHead('C')
// list.removeHead()
// list.reverseList()
list.reverseWithRecursion()
console.log(list)

list.printList()