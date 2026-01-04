class ListNode<T> {
    public value: T
    public next: ListNode<T> | null
    public prev: ListNode<T> | null
    constructor(value: T) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

export class DoublyLinkedList<T> {
    private head: ListNode<T> | null
    private tail: ListNode<T> | null
    private size: number

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    public insertAtHead(value: T): void {
        const newNode = new ListNode(value);
        newNode.next = this.head;
        //If the list is NOT empty, the old head must point back to the new node
        if (this.head != null) {
            this.head.prev = newNode;
        }

        this.head = newNode;
        // newNode.prev remains null, which is correct for the head
        if (!this.tail) {
            this.tail = newNode
        }
        this.size++
    }

    public printListForward(): void {
        let curr = this.head;
        let res = "List (Forward): ";

        while (curr) {
            res += curr.value + " -> ";
            curr = curr.next;
        }

        console.log(res + "END");
    }


    public printListBackward(): void {
        let current = this.tail;
        let res = "List (Backward): ";

        while (current) {
            res += current.value + " <-> ";
            current = current.prev;
        }

        console.log(res + "START");
    }
}

const Dlist = new DoublyLinkedList<number>()

Dlist.insertAtHead(233)
Dlist.insertAtHead(443)
Dlist.printListForward()
Dlist.printListBackward()
