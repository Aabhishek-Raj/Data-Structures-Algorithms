public class DoublyLinkedList {
    
    private Node head;

    public DoublyLinkedList() {
        this.head = null;
    }

    public class Node {
        public int data;
        public Node next;
        public Node prev;

        public Node(int data) {
            this.data = data;
            this.next = null;
            this.prev = null;
        }
    }

    /**
     * Inserts a new node at the beginning of the list (Head).
     * Time Complexity: O(1)
     */
    public void insertAtHead(int data) {
        Node newNode = new Node(data);
        
        // 1. New node's next points to the current head
        newNode.next = this.head;
        
        // 2. If the list is NOT empty, the old head must point back to the new node
        if (this.head != null) {
            this.head.prev = newNode;
        }

        // 3. Update the list's head to the new node
        this.head = newNode;
        // newNode.prev remains null, which is correct for the head
    }

    /**
     * Inserts a new node at the end of the list (Tail).
     * Time Complexity: O(n) due to traversal. Can be O(1) if a 'tail' pointer is maintained.
     */
    public void insertAtEnd(int data) {
        Node newNode = new Node(data);
        
        // Case 1: List is empty
        if (this.head == null) {
            this.head = newNode;
            return;
        }

        // Case 2: List is not empty, traverse to the last node
        Node current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        
        // 'current' is now the last node (the tail)
        
        // 1. Link current (old tail) to newNode
        current.next = newNode;
        
        // 2. Link newNode back to current
        newNode.prev = current;
        
        // newNode.next remains null, which is correct for the new tail
    }

    /**
     * Inserts a new node after a specific node that contains the given 'key'.
     * Time Complexity: O(n)
     */
    public void insertAfterKey(int key, int data) {
        Node current = this.head;
        
        // 1. Find the node with the given key (prevNode)
        while (current != null && current.data != key) {
            current = current.next;
        }
        
        Node prevNode = current;

        // If the key was not found
        if (prevNode == null) {
            System.out.println("Node with key " + key + " not found.");
            return;
        }
        
        // If the node found is the tail, use insertAtEnd logic (optional optimization)
        if (prevNode.next == null) {
            insertAtEnd(data);
            return;
        }
        
        // 2. Create the new node
        Node newNode = new Node(data);
        
        // 3. Adjust pointers (4 operations)
        newNode.next = prevNode.next;
        prevNode.next.prev = newNode; // Node after prevNode points back to newNode
        prevNode.next = newNode;
        newNode.prev = prevNode;
    }

    // ====================================================================
    // -------------------------- DELETION METHODS --------------------------
    // ====================================================================

    /**
     * Deletes the node at the beginning of the list (Head).
     * Time Complexity: O(1)
     */
    public int deleteHead() {
        if (head == null) {
            System.out.println("List is Empty");
            return -1;
        }

        int deleted = this.head.data;
        
        // 1. Move the head pointer to the next node
        this.head = this.head.next;

        // 2. If the list is NOT empty after deletion, the new head's 'prev' must be null
        if (this.head != null) {
            this.head.prev = null;
        }

        return deleted;
    }

    /**
     * Deletes the node at the end of the list (Tail).
     * Time Complexity: O(n)
     */
    public int deleteTail() {
        if (head == null) {
            System.out.println("List is Empty");
            return -1;
        }
        
        // Case 1: Only one node in the list
        if (head.next == null) {
            int deleted = head.data;
            head = null;
            return deleted;
        }

        // Case 2: Traverse to the second-to-last node
        Node current = head;
        while (current.next.next != null) {
            current = current.next;
        }
        
        // 'current' is the new tail (second-to-last node)
        int deleted = current.next.data;
        
        // 1. Set the new tail's 'next' to null
        current.next = null;
        // The old tail is now disconnected and will be garbage collected
        
        return deleted;
    }

    /**
     * Deletes the first node found with the specified data value (key).
     * Time Complexity: O(n)
     */
    public int deleteByKey(int key) {
        Node current = this.head;
        
        // 1. Find the node to be deleted (delNode)
        while (current != null && current.data != key) {
            current = current.next;
        }

        Node delNode = current;
        
        // If key was not found
        if (delNode == null) {
            System.out.println("Node with key " + key + " not found for deletion.");
            return -1;
        }
        
        // Case A: Deleting the Head
        if (delNode == this.head) {
            return deleteHead();
        }

        // Case B: General or Deleting the Tail
        
        // 2. Link the previous node to the next node
        if (delNode.prev != null) {
            delNode.prev.next = delNode.next;
        }
        
        // 3. Link the next node back to the previous node (handles tail if delNode.next is null)
        if (delNode.next != null) {
            delNode.next.prev = delNode.prev;
        }
        
        return delNode.data;
    }

    // ====================================================================
    // ---------------------------- UTILITIES -----------------------------
    // ====================================================================

    /**
     * Prints the list from head to tail.
     */
    public void printListForward() {
        Node current = this.head;
        System.out.print("List (Forward): ");
        if (current == null) {
            System.out.println("NULL");
            return;
        }
        while (current != null) {
            System.out.print(current.data + " <-> ");
            current = current.next;
        }
        System.out.println("NULL");
    }

}
