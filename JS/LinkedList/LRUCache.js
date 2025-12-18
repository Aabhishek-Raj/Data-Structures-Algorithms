/**
 * A simple class for the Doubly Linked List Node
 */
class DLinkedNode {
    constructor(key, value) {
        this.key = key; // Storing the key is crucial for removing from the Map when popping the tail
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        
        // Use Map for O(1) key lookup. Map stores: key -> DLinkedNode object
        this.cache = new Map();
        
        // Create dummy Head (MRU) and Tail (LRU) nodes
        this.head = new DLinkedNode(0, 0); // Dummy node
        this.tail = new DLinkedNode(0, 0); // Dummy node
        
        // Link them initially
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // ====================================================================
    // CORE HELPER METHODS (DLL Operations)
    // ====================================================================

    // Add a new node right after the dummy head (MRU position)
    _addNode(node) {
        node.prev = this.head;
        node.next = this.head.next;
        
        this.head.next.prev = node;
        this.head.next = node;
    }

    // Remove a given node from the DLL
    _removeNode(node) {
        const prev = node.prev;
        const next = node.next;
        
        prev.next = next;
        next.prev = prev;
    }
    
    // Move an existing node to the MRU position
    _moveToHead(node) {
        this._removeNode(node);
        this._addNode(node);
    }
    
    // Remove and return the LRU node (the one right before the dummy tail)
    _popTail() {
        // The node right before the dummy tail is the LRU node
        const res = this.tail.prev;
        this._removeNode(res);
        return res;
    }

    // ====================================================================
    // PUBLIC API METHODS
    // ====================================================================

    /**
     * Gets the value of the key if the key exists.
     * Time Complexity: O(1)
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const node = this.cache.get(key);

        if (!node) {
            return -1; // Not found
        }

        // The node was accessed, so move it to the MRU position
        this._moveToHead(node);
        return node.value;
    }

    /**
     * Updates the value or adds a new entry.
     * Time Complexity: O(1)
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let node = this.cache.get(key);

        if (node) {
            // Case 1: Key already exists (Cache Hit)
            node.value = value; // Update the value
            this._moveToHead(node); // Move it to the MRU position
        } else {
            // Case 2: Key is new (Cache Miss)
            const newNode = new DLinkedNode(key, value);
            
            // Add to the front of DLL and to the Map
            this.cache.set(key, newNode);
            this._addNode(newNode);
            this.size++;

            // Check Capacity
            if (this.size > this.capacity) {
                // Remove the LRU node
                const tailNode = this._popTail();
                this.cache.delete(tailNode.key); // Remove from Map
                this.size--;
            }
        }
    }
}


// Example Usage:
const lruCache = new LRUCache(2); // Capacity is 2

lruCache.put(1, 10); // Cache: {1=10} (MRU: 1)
lruCache.put(2, 20); // Cache: {1=10, 2=20} (MRU: 2)
console.log("Get 1:", lruCache.get(1)); // Output: 10. Cache: {2=20, 1=10} (MRU: 1)

lruCache.put(3, 30); // Capacity exceeded, LRU (key 2) is evicted.
// Cache: {1=10, 3=30} (MRU: 3). Node 2 is gone.
console.log("Get 2:", lruCache.get(2)); // Output: -1

lruCache.put(4, 40); // Capacity exceeded, LRU (key 1) is evicted.
// Cache: {3=30, 4=40} (MRU: 4). Node 1 is gone.
console.log("Get 1:", lruCache.get(1)); // Output: -1
console.log("Get 3:", lruCache.get(3)); // Output: 30. Cache: {4=40, 3=30} (MRU: 3)