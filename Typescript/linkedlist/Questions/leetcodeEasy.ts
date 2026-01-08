
import { LinkedList, ListNode } from "../LLsingly"


// 83. Remove Duplicates from Sorted List

const removeDuplicates = <T>(list: LinkedList<T>) => {

    let current = list.getHead()

    while(current !== null && current.next !== null) {
        if(current.value === current.next.value) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
}

const ll = new LinkedList<number>()

ll.insertAtFirst(1)
ll.insertAtLast(2)
ll.insertAtLast(2)
ll.insertAtLast(2)
ll.insertAtLast(2)
ll.insertAtLast(3)

removeDuplicates(ll)

// ll.printList()


// 21. Merge Two Sorted Lists
const mergeTwoLists = <T>(list1: ListNode<T> | null, list2: ListNode<T> | null): ListNode<T> | null => {

    if (!list1) return list2
    if (!list2) return list1

    let head: ListNode<T>

    if(list1.value <= list2.value) {
        head = list1
        list1 = list1.next
    } else {
        head = list2
        list2 = list2.next
    }

    let current = head

    while(list1 !== null && list2 !== null) {
        if(list1.value <= list2.value) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }
    current.next = list1 !== null ? list1 : list2

    return head
}

function mergeTwoLists2<T>(
    list1: ListNode<T> | null,
    list2: ListNode<T> | null
): ListNode<T> | null {

    const dummy = new ListNode<T | null>(null)
    let tail = dummy

    while (list1 !== null && list2 !== null) {
        if (list1.value! <= list2.value!) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }

    tail.next = list1 ?? list2

    return dummy.next as ListNode<T>
}

