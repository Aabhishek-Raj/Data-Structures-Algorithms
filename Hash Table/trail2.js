class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let count = 0
        for (let i = 0 ; i< key.length; i++){
            count += key.charCodeAt(i)
        }
        return count % this.size
    }
     

    insert(key, value) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if(this.table[index]){
            this.table[index] = [[key, value]]
        }
        const numExist = bucket.find(item[0] === key)
        if(numExist){
            
        }
    }

}