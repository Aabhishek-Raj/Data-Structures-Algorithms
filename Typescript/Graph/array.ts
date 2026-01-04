export class Graph {

    adjacencyList: {[key: string]: string[]}

    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex: string): void {
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1: string, vertex2: string): void {
        if(!this.adjacencyList[vertex1] ){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)

    }

    removeEdge(vertex1: string, vertex2: string): void {
        this.adjacencyList[vertex1].filter(each => each !== vertex2)
        this.adjacencyList[vertex2].filter(each => each !== vertex1)
    }

    removeVertex(vertex: string): void {
        if (!this.adjacencyList[vertex]){
            return
        }
        for (let adjacencyVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacencyVertex)
        }

        delete this.adjacencyList[vertex]
    }

    hasEdge(vertex1: string, vertex2: string): boolean {
        return (
            this.adjacencyList[vertex1].includes(vertex2) && this.adjacencyList[vertex2].includes(vertex1)
        )
    }

    display(): void {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + '--> ' + [...this.adjacencyList[vertex]])
        }
    }
}


const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge('A', 'C')
console.log(graph)
graph.display()