function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}
// console.log(linearSearch([ -5, 2, 10, 4, 6], 10));


function binarySearch(arr, target){
    let leftIndex = arr[0]
    let rightIndex = arr.length

    while( leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(arr[middleIndex] === target ){
            return middleIndex
        }
            if(arr[middleIndex] > target){
                leftIndex = middleIndex +1
            }else{
                rightIndex = middleIndex -1
            }   
        }
        return -1
    }
// console.log(binarySearch([-5, 2, 4, 6, 10], 10));



//STACK ===>>

class Stack {
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}

const stack = new Stack()
// console.log(stack.isEmpty());


// stack.push(20)
// stack.push(10)
// stack.push(45)
// console.log(stack.size());
// stack.print()

// console.log(stack.pop());
// console.log(stack.peek());


///QUEUE ===>>

class Queue {
    constructor() {
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length === 0
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }

    // last(){
    //     return this.items[this.items.length-1]
    // }
}

const queue = new Queue
console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.size());
queue.print()

console.log(queue.dequeue());

console.log(queue.peek());

queue.print()



function binarySearch(){
    let first
}