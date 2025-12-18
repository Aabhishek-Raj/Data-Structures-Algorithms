
public class SinglyLinkedList {

    private Node head;

    public SinglyLinkedList() {
        this.head = null;
    }

    public void insetAtHead(int data) {

        Node newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;
    }

    public int deleteHead() {
        if (head == null) {
            System.out.println("List is Empty");
            return -1;
        }
        int deleted = this.head.data;

        this.head = this.head.next;

        return deleted;
    }

    public void printList() {
        Node current = head;
        System.out.print("List: ");

        while (current != null) {
            System.out.print(current.data + "-> ");
            current = current.next;
        }
        System.out.println("null");
    }

    public void reverseList() {
        Node nextNode = null;
        Node current = head;
        Node previous = null;

        while (current != null) {
            nextNode = current.next;
            current.next = previous;

            previous = current;
            current = nextNode;
        }
        head = previous;
    }

    public void reverseWithRecursion() {
        head = reverseRecursive(head);
    }

    public Node reverseRecursive(Node head) {
        if (head == null || head.next == null) {
            return head;
        }

        Node newHead = reverseRecursive(head.next);

        // Fix the links
        head.next.next = head;
        head.next = null;

        return newHead;
    }
}
