class LinkedListNode<T> {
    value: T
    next: LinkedListNode<T> | null
    prev: LinkedListNode<T> | null

    constructor(val: T){
        this.value = val
        this.next = null
        this.prev = null
    }
}

export default LinkedListNode
