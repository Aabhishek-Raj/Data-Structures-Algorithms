class Queue {
    constructor(){
        this.items = []
    }
    pop(val){
        this.items.push(val)
    }
    pop(){
        this.items.shift()
    }
}



class ObjQ {
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(value){
        this.items[this.rear] = value
        this.rear ++
    }
    dequeue(){
        delete this.items[this.front]
        this.front --
    }
    print(){
        console.log(this.items);
    }
}

const o = new ObjQ

o.enqueue(34)
o.enqueue(94)
o.enqueue(59)
o.dequeue()

o.print()
