class Stack {
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    print(){
        console.log(this.items.toString());
    }
    pop(){
        this.items.pop()
    }
    peek(){
         return this.items[this.items.length -1]
    }
}
const sta = new Stack


sta.push(100)
sta.push(10)
sta.push(15)
console.log(sta.peek());


sta.print()




push(v){
    const node = new Node(v)
    if (!this.first){
        this.first = node
        this.last = node
    }else{
        let temp 
    }
}



class Node {
    constructor(value){
        this.value = value 
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
    }
    push(val){
        const node = new Node(val)
        if(!this.top){
            this.top = node
        }
        node.next = this.top
        this.top = node
    }

    pop(){
        const node = new Node(val)
        if(!this.top){
            return null
        }
        let remove = this.top
        remove.next = this.top
    }
}


class Queue {
    constructor(){
        this.frond = null
        this.rear = null
    }
    dequeue(va){
        const node = new Node()
        if(!this.frond){
            
        }
    }
}