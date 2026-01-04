class ListNode<T> {
    public value: T
    public next: ListNode<T> | null

    constructor(val: T) {
        this.value = val
        this.next = null
    }
}

export class CircularLL<T> {
    private head: ListNode<T> | null
    private tail: ListNode<T> | null

    constructor() {
        this.head = null
        this.tail = null
    }

    public insert(val: T): void {
        const newNode = new ListNode(val)
        // First node
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            newNode.next = newNode   //circular link
            return
        }

        // Insert at end
        newNode.next = this.head
        this.tail!.next = newNode
        this.tail = newNode
    }

    delete(val: T): void {
        if (!this.head || !this.tail) {
            return
        }

        let current = this.head
        let prev = this.tail

        do {
            // node to delete found
            if (current.value === val) {

                // only one node
                if (current === this.head && current === this.tail) {
                    this.head = null
                    this.tail = null
                    return
                }

                if (current === this.head) {
                    this.head = this.head.next
                    this.tail.next = this.head
                }
                else if (current === this.tail) {
                    this.tail = prev
                    this.tail.next = this.head
                }
                // deleting middle node
                else {
                    prev.next = current.next
                }
                return
            }
            prev = current
            current = current.next!
        } while (current !== this.head)
    }

    display() {
        if (!this.head) {
            console.log("List is empty")
            return
        }

        let current = this.head
        let result = ""

        do {
            result += current.value + ' -> '
            current = current.next!
        } while (current !== this.head)

        result += "(back to head)"
        console.log(result)
    }
}

const CList = new CircularLL<number>()
CList.insert(33)
CList.insert(23)
CList.insert(13)
CList.insert(43)

CList.delete(23)

CList.display()