export class Graph<T> {

    private adjList: Map<T, T[]> = new Map()

    addVertex(vertex: T): void {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, [])
        }
    }

    addEdge(v1: T, v2: T): void {
        this.addVertex(v1)
        this.addVertex(v2)

        this.adjList.get(v1)!.push(v2)
        this.adjList.get(v2)!.push(v1) // remove for directed graph
    }

    print(): void {
        for (const [vertex, neighbours] of this.adjList) {
            console.log(vertex + ' -> ' + neighbours.join(", "))
        }
    }

    // BFS: Visit neighbors first, then their neighbors
    // BFS uses: Queue → FIFO & Visited Set → avoid cycles
    bfs(start: T) {
        const visited = new Set<T>()
        const queue: T[] = []

        queue.push(start)
        visited.add(start)

        while (queue.length > 0) {
            const vertex = queue.shift()!

            console.log(vertex)
            for (const neighbour of this.adjList.get(vertex) || []) {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            }
        }
    }

    dfs(start: T): void {
        const visited = new Set<T>()
        this.dfsRecursive(start, visited)
    }

    private dfsRecursive(node: T, visited: Set<T>): void {
        visited.add(node)
        console.log(node)

        for (const neighbour of this.adjList.get(node) ||  []) {
            if(!visited.has(neighbour)) {
                this.dfsRecursive(neighbour, visited)
            }
        }
    }

    dfsIterative(start: T) {
        const visited = new Set<T>()
        const stack: T[] = [start]

        while(stack.length > 0) {
            const node = stack.pop()!

            if(!visited.has(node)) {
                visited.add(start)
                console.log(start)
            }
        }

        for(const neighbour of this.adjList.get(start) || []) {
            stack.push(neighbour)
        }

    }

}


const graph = new Graph<string>()

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")

graph.print()
graph.bfs("A")  
