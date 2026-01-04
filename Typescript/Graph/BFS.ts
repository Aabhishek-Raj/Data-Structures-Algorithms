const breadthFirstSearch = (graph: {[key: string]: string[]}, root: string): void => {
    const queue: string[] = []
    const visited = new Set()

    queue.push(root)
    visited.add(root)

    while(queue.length > 0) {
        const current = queue.shift()
        console.log(current)

        for(let neighbor of graph[current!]){
            if(!visited.has(neighbor)) {
                queue.push(neighbor)
                visited.add(neighbor)
            }
        }
    }
}

const graph: {[key: string]: string[]} = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e', 'c'],
    d: ['f'],
    e: [],
    f: []
}

breadthFirstSearch(graph, 'a')