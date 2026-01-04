class ListNode<T> {
    public value: T
    public next: ListNode<T> | null

    constructor(data: T) {
        this.value = data
        this.next = null
    }
}

class LinkedList<T> {
    private head: ListNode<T> | null
    private tail: ListNode<T> | null
    private size: number

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    insertAtFirst(val: T): void {
        const newNode = new ListNode(val)
        newNode.next = this.head
        this.head = newNode

        if (this.size === 0) {
            this.tail = newNode
        }
        this.size++
    }

    insertAtLast(val: T): void {
        const newNode = new ListNode(val)
        if (!this.tail) {
            this.insertAtFirst(val)
            return
        }
        this.tail.next = newNode
        this.tail = newNode
        this.size++
    }

    insertAtIndex(val: T, index: number): void {
        if (index < 0 || index > this.size) return

        if (index === 0) {
            this.insertAtFirst(val)
            return
        }
        let current = this.head as ListNode<T>

        for (let i = 0; i < index - 1; i++) {
            current = current.next as ListNode<T>
        }
        const newNode = new ListNode(val)
        newNode.next = current.next
        current.next = newNode

        // Update tail
        if (newNode.next === null) {
            this.tail = newNode
        }

        this.size++
    }

    removeHead() {
        if (!this.head) {
            return null
        }
        const removedData = this.head.value
        this.head = this.head.next
        this.size--
        return removedData
    }
    removeTail(): T | undefined {
        if (this.size <= 1) {
            this.removeHead()
            return
        }

        let secondLast = this.getNode(this.size - 2)
        const removedData = this.tail!.value

        this.tail = secondLast
        this.tail.next = null
        this.size--

        return removedData
    }

    getNode(index: number): ListNode<T> {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds")
        }
        let current = this.head!

        for (let i = 0; i < index; i++) {
            current = current.next!
        }
        return current
    }

    printList() {
        let current = this.head
        let listString = ""

        while (current) {
            listString += current.value + (current.next ? " -> " : "")
            current = current.next
        }
        console.log(listString)
    }

    reverseList() {
        let prev = null
        let curr = this.head
        let nextNode = null

        while(curr) {
            nextNode = curr.next
            curr.next = prev
            
            prev = curr
            curr = nextNode
        }
        this.tail = this.head
        this.head = prev
    }
}

const list = new LinkedList<string>()
list.insertAtFirst("A")
list.insertAtFirst("B")
list.insertAtLast("Z")
// list.insertAtIndex('JK', 1)
// console.log(list.removeHead())
list.reverseList()
console.log(list)
list.printList()
