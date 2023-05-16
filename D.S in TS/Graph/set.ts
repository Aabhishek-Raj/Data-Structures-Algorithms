class Graph {
    adjacencyList: {[key: string]: Set<string>}

    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex: string): void {
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set<string>()
        }
    }
    addEdge(vertex1: string, vertex2: string): void {
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        
        if (!this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2] 
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1: string, vertex2: string): void {
        // if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
        //     return
        // }

        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex: string): void {
        if(!this.adjacencyList[vertex]){
            return
        }
        for (let adjacencyVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
    }

    hasEdge(vertex1: string, vertex2: string): boolean {

        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }

    display(): void {
        for ( let vertex in this.adjacencyList) {
            console.log(vertex + ' --> ' + [...this.adjacencyList[vertex]] )
        }
    }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

// graph.display()

// graph.removeVertex('B')

graph.display()