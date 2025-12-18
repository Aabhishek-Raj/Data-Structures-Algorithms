import java.util.HashMap;

public class LRUCache {
    
    // 1. Core Data Structures
    private HashMap<Integer, DLinkedNode> cache = new HashMap<>();
    private int capacity;
    private int size;

    // 2. Dummy Head and Tail for O(1) operations
    // head is always the MRU (Most Recently Used)
    // tail is always the LRU (Least Recently Used)
    private DLinkedNode head;
    private DLinkedNode tail;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        
        // Initialize dummy nodes
        head = new DLinkedNode();
        tail = new DLinkedNode();
        
        // Link the dummy nodes together
        head.next = tail;
        tail.prev = head;
    }

    // ====================================================================
    // 3. Core Helper Methods (O(1))
    // ====================================================================

    // Moves an existing node to the MRU position (right after the dummy head)
    private void moveToHead(DLinkedNode node) {
        // Step 1: Remove the node from its current position
        removeNode(node);
        // Step 2: Add it right after the head
        addNode(node);
    }

    // Removes a given node from the DLL
    private void removeNode(DLinkedNode node) {
        DLinkedNode prev = node.prev;
        DLinkedNode next = node.next;
        
        prev.next = next;
        next.prev = prev;
    }

    // Adds a new node right after the dummy head (MRU position)
    private void addNode(DLinkedNode node) {
        node.prev = head;
        node.next = head.next;
        
        head.next.prev = node;
        head.next = node;
    }

    // Removes the LRU node (the one right before the dummy tail)
    private DLinkedNode popTail() {
        DLinkedNode res = tail.prev;
        removeNode(res);
        return res;
    }

    // ====================================================================
    // 4. Public API Methods
    // ====================================================================

    /**
     * Gets the value from the cache.
     * Time Complexity: O(1)
     */
    public int get(int key) {
        DLinkedNode node = cache.get(key);

        if (node == null) {
            return -1; // Not found
        }

        // Move the accessed node to the MRU position
        moveToHead(node);
        return node.value;
    }

    /**
     * Puts a key-value pair into the cache.
     * Time Complexity: O(1)
     */
    public void put(int key, int value) {
        DLinkedNode node = cache.get(key);

        if (node != null) {
            // Case 1: Key already exists (Cache Hit)
            node.value = value;
            moveToHead(node); // Update value and move to MRU
        } else {
            // Case 2: Key is new (Cache Miss)
            DLinkedNode newNode = new DLinkedNode(key, value);
            
            // Add to the front of DLL and to the HashMap
            addNode(newNode);
            cache.put(key, newNode);
            size++;

            // Check Capacity
            if (size > capacity) {
                // Remove the LRU node (which is right before the dummy tail)
                DLinkedNode tailNode = popTail();
                cache.remove(tailNode.key); // Remove from HashMap
                size--;
            }
        }
    }
}