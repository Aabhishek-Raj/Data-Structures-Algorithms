class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.addVertex[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
         this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
         this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacencyVertex in this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacencyVertex)
        }

        delete this.adjacencyList[vertex ]
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].includes(vertex2) && 
            this.adjacencyList[vertex2].includes(vertex1 )
        )
    }

    display() {
        for(let vertex in this.adjacencyList) {
            console.log(vertex + '->' + [...this.adjacencyList[vertex]])
        }
    }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

graph.display()

console.log(graph.hasEdge('A', 'B'))

graph.removeVertex( 'B')

graph.display()