class minHeap {
    constructor(){
        this.heap = []
        this.size = 0
    }

    LeftChildIndex(index){
        return 2 * index +1
    }

    rightChildIndex(index){
        return 2 * index + 2
    }

    parentIndex(index){
        Math.floor((index-1) / 2)
    }

    hasLeft(index){
        return this.LeftChildIndex(index) < this.size
    }
    
    hasRight(index){
        return this.rightChildIndex(index) < this.size
    }

    hasParent(index){
        return this.parentIndex(index) >= 0
    }

    leftValue(index){
        return this.heap[this.LeftChildIndex(index)]
    }

    rightValue(index){
        return this.heap[this.rightChildIndex(index)]
    }

    parentValue(index){
        return this.heap[this.parentIndex(index)]
    }

    swap(index1, index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    insert(data){
        this.heap[this.size] = data
        this.size += 1
        this.heapifyUp(this.size-1)
    }
    heapifyUp(index){
        if(this.hasParent(index) && this.parentValue(index) > this.heap[this.size-1]){
            this.swap(this.parentIndex(index), index)
            this.heapifyUp(this.parentIndex)
        }
    }

    remove(){
        if(this.size === 0 ){
            return null
        } 
        let data = this.heap[0]
        this.heap[0] = this.heap[this.size-1]
        this.size -= 1
        this.heapifyDown()
    }

    heapifyDown(){
        let index = 0
        while(this.LeftChildIndex(index)){
            let smallIndex = this.LeftChildIndex(index)
            if(this.hasRight(index) && this.rightValue(index) < this.leftValue(index)){
                smallIndex = this.rightChildIndex(index)
            }
            if(this.heap[index] < this.heap[smallIndex]){
                break
            }else {
                this.swap(index, smallIndex)
                index = smallIndex
            }

        }
    }
}