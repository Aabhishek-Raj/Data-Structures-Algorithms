class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    } 

    hash(key) {
        let total = 0 
        for (i =0 ; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        const Index = this.hash(key)
        // this.table[Index] = value
        const bucket = this.table[Index]
        if(!bucket){
            this.table[Index] = [[key, value]]
        } else {
            let sameKeyValue = this.table[Index].find(item => item[0] === key)
            if (sameKeyValue) {
                sameKeyValue[1] = value
            } else {
                bucket.push([key, value])
            }

        }
    }
    
    get(key){
        const Index = this.hash(key)
        // return this.table[Index]
        const bucket = this.table[Index]
    }

    remove(key){
        const Index = this.hash(key)
        this.table[Index] = undefined
    }

    display(){
        for(i=0; i < this.table.length; i++) {
            if(this.table[i]) return console.log(i, this.table[i])

        }
    }
}

const Table = new HashTable(50)