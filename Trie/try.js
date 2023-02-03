class Node {
    constructor(){
        this.children = null
        this.isWordEnd = false
    }
}

class Trie {
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root
        for(let i=0; i<=word.length; i++){
            let letterInsert = word[i]
            if(letterInsert in curr.children){
                curr.children[letterInsert] = new Node
            }
            curr = curr.children[letterInsert]
        }
        curr.isWordEnd = true
    }
}