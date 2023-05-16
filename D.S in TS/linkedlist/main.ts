import LinkedListNode from "./model";
import { defaultEquals, EqualsFunction } from "./utils";

interface List<T> {
    head: LinkedListNode<T>
    tail: LinkedListNode<T>
    size: number
}

class LinkedList<T> implements Iterable<T> {
    private list: List<T> | undefined

    constructor() {
        this.list = undefined
    }

    size(): number {
        if(this.list) return this.list.size

        return 0
    }

    isEmpty(): boolean {
        return !this.list
    }

    //INSERTION ==>>

    addFront(val: T): void {
        const newNode = new LinkedListNode(val)

        if(this.list) {
            this.list.head.prev = newNode
            newNode.next = this.list.head

            this.list.head = newNode
            this.list.size += 1
        } else {
            this.list = {
                head: newNode,
                tail: newNode,
                size: 1
            }
        }
    }

    addBack(val: T): void {
        const newNode = new LinkedListNode(val)

        if(this.list){
            this.list.head.next = newNode
            newNode.prev = this.list.tail

            this.list.tail = newNode
            this.list.size += 1
        } else {
            this.list = {
                head: newNode,
                tail: newNode,
                size: 1
            }
        }
    }

    addAt(i: number, val: T): void {
        if(i==0) {
            this.addFront(val)
            return
        }

        if(i == this.size()) {
            this.addBack(val)
            return
        }
        
        if (i < 0 || i>= this.size() || !this.list) {
            throw new Error('error occured')
        }

        let curr = this.list.head
        for (let j = 0; j < i - 1; j++) {
            curr = curr.next!
        }

        const newNode = new LinkedListNode(val)

        curr.next!.prev = newNode
        newNode.next = curr.next

        newNode.prev = curr
        curr.next = newNode
        this.list.size += 1

    }

    peekFront(): T {
        if (!this.list) throw new Error('empty error')

        return this.list.head.value
    }

    peekBack(): T {
        if(!this.list) throw new Error('empty error')

            return this.list.tail.value
    }

    get(i: number): T {
        if(i < 0 || i >= this.size() || !this.list) {
            throw new Error('out of bound error')
        }

        let j = 0
        let curr = this.list.head
        while(j < i) {
            curr = curr.next!
            j++
        }
        return curr.value
    }
    
    indexOf(value: T, equalsFunction?: EqualsFunction<T>): number {
        if(!this.list) return -1

        const equalsF = equalsFunction || defaultEquals

        let i = 0
        let curr = this.list.head

        while(!equalsF(curr.value, value)) {
            curr = curr.next!
            i+= 1
        }
        return i
    }

    
}