class MinHeap {
    constuctor(){
        this.heap = []
        this.size = 0
    }

    hasParantIndex(index){
        return this.getParentIndex >= 0 

    }

    insert(value){
        this.heap[this.size] = value
        this.size += 1
        this.heapfyUp()
    }

    heapfyUp(){
        let index = this.size - 1
        while(this.hasParantIndex(index))
        
    }
}


