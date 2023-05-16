class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(value){
        if(!this.adjacencyList[value]){
            this.adjacencyList[value] = new Set()
        }
    }

    addEdges(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]){
            return
        }

        for( let adjacenctVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjacenctVertex)
        }
        delete this.adjacencyList[vertex]
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + ' --> ' + [...this.adjacencyList[vertex]])
        }
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) && 
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

   
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdges('A', 'B')
graph.addEdges('B', 'C')

// graph.display()

// graph.removeVertex('B')

graph.display()

