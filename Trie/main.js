class Node {
    constructor() {
        this.children = null
        this.iswordEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let curr = this.root
        for (let i = 0; i <= word.length; i++) {
            let letterToInsert = word[i]
            if(!letterToInsert in curr.children){
                curr.children[letterToInsert] = new Node()
            }
            curr = curr.children[letterToInsert]
        }
        curr.iswordEnd = true
    }

    contain(word){
        let curr = this.root
        for(let i = 0; i <= word.length; i++){
            let letterToFind = word[i]
            if(!letterToFind in curr.children){
                return false
            }
            curr = curr.children[letterToFind]
        }

        return curr.iswordEnd

    }
}