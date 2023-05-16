const breadthFirstSearch = (graph: {[key: string]: string[]}, root: string): void => {
    const queue: string[] = []

    queue.push(root)

    while(queue.length > 0) {
        const current = queue.shift()
        console.log(current)

        for(let neighbor of graph[current!]){
            queue.push(neighbor)
        }
    }
}

const graph: {[key: string]: string[]} = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

breadthFirstSearch(graph, 'a')