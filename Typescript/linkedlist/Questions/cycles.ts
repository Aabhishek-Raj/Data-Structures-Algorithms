import { LinkedList, ListNode } from "../LLsingly";

function detectCycle<T>(list: LinkedList<T>): ListNode<T> | null {
    let current = list.getHead()
    const visited = new Set<ListNode<T>>()

    while (current !== null) {
        if (visited.has(current)) {
            return current
        }
        visited.add(current)
        current = current.next
    }

    return null
}

// Fast and slow pointer 
function hasCycle<T>(head: ListNode<T>): boolean {
    let slow = head
    let fast = head

    while (fast !== null && fast.next != null) {
        slow = slow.next!
        fast = fast.next.next!
        if (slow === fast) {
            return true
        }
    }
    return false
};

// find the lenght of cycle
function lengthOfCycle<T>(head: ListNode<T>): number {
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next!
        fast = fast.next.next!

        if (slow === fast) {
            let meetingNode = slow

            let current = meetingNode
            let length = 0

            do {
                current = current.next!
                length++
            } while (current !== meetingNode)

            return length
        }
    }
    return 0
}

// 142. Linked List Cycle II





const ll = new LinkedList<string>()
ll.insertAtFirst("A")
ll.insertAtFirst("B")
ll.insertAtLast("Z")

const cycleNode = detectCycle(ll)

if (cycleNode) {
    console.log("Cycle detected at:", cycleNode.value)
} else {
    console.log("No cycle")
}
