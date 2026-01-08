export class ListNode<T> {
    value: T
    next: ListNode<T> | null = null

    constructor(value: T) {
        this.value = value
    }
}

// 148. Sort List
//  (Merge Sort)
function sortList<T>(head: ListNode<T> | null): ListNode<T> | null {
    if (!head || !head.next) return head

    const mid = getMid(head)

    const rightHead = mid.next
    mid.next = null   // split list

    const left = sortList(head)
    const right = sortList(rightHead)

    return merge(left, right)
}

function getMid<T>(head: ListNode<T>): ListNode<T> {
    let slow = head
    let fast = head

    while (fast.next && fast.next.next) {
        slow = slow.next!
        fast = fast.next.next
    }
    return slow
}

function merge<T>(l1: ListNode<T> | null, l2: ListNode<T> | null): ListNode<T> | null {

    const newHeadPointer = new ListNode<T>(l1!.value) // value doesn’t matter
    let tail = newHeadPointer

    while (l1 !== null && l2 !== null) {
        if (l1.value <= l2.value) {
            tail.next = l1
            l1 = l1.next
        } else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    }

    tail.next = l1 || l2
    return newHeadPointer.next
}


//  (Bubble Sort)

function bubbleSort(){
    
}