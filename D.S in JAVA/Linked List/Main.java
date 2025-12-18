public class Main{
    public static void main(String[] args) {

        // Singly Linked List ==>

        SinglyLinkedList list = new SinglyLinkedList();
        list.insetAtHead(29);
        list.insetAtHead(59);
        list.insetAtHead(24);
        // list.deleteHead();
        // list.reverseList();
        // list.reverseWithRecursion();
        // list.printList();

        // Doubly Linked List ==>

        DoublyLinkedList doublyList = new DoublyLinkedList();
        
        System.out.println("--- 1. Initial Insertion Test (Head & End) ---");
        doublyList.insertAtHead(20);
        doublyList.insertAtHead(10);
        doublyList.insertAtEnd(30);
        doublyList.insertAtEnd(40); // List: 10 <-> 20 <-> 30 <-> 40
        doublyList.printListForward(); 

        System.out.println("\n--- 2. Insertion After Key ---");
        doublyList.insertAfterKey(20, 25); // Insert 25 after 20
        doublyList.insertAfterKey(40, 50); // Insert 50 after 40 (New Tail)
        doublyList.printListForward(); // Expected: 10 <-> 20 <-> 25 <-> 30 <-> 40 <-> 50 <-> NULL

        System.out.println("\n--- 3. Deletion Test (Head) ---");
        System.out.println("Deleted Head: " + doublyList.deleteHead()); // Deletes 10
        doublyList.printListForward(); // Expected: 20 <-> 25 <-> 30 <-> 40 <-> 50 <-> NULL

        System.out.println("\n--- 4. Deletion Test (Tail) ---");
        System.out.println("Deleted Tail: " + doublyList.deleteTail()); // Deletes 50
        doublyList.printListForward(); // Expected: 20 <-> 25 <-> 30 <-> 40 <-> NULL
        
        System.out.println("\n--- 5. Deletion By Key ---");
        System.out.println("Deleted Key (25): " + doublyList.deleteByKey(25)); // Deletes 25
        doublyList.printListForward(); // Expected: 20 <-> 30 <-> 40 <-> NULL
        
        System.out.println("Deleted Key (40 - Tail): " + doublyList.deleteByKey(40)); // Deletes 40
        doublyList.printListForward(); // Expected: 20 <-> 30 <-> NULL
        
        System.out.println("Deleted Key (20 - Head): " + doublyList.deleteByKey(20)); // Deletes 20
        doublyList.printListForward(); // Expected: 30 <-> NULL
        
        System.out.println("\n--- 6. Deletion on Remaining Node ---");
        System.out.println("Deleted Key (30): " + doublyList.deleteByKey(30)); // Deletes 30
        doublyList.printListForward(); // Expected: NULL (Empty)
        
        System.out.println("\n--- 7. Deletion on Empty List ---");
        System.out.println("Deleted Head: " + doublyList.deleteHead()); // Handles Empty case
    }
}
