const breadthFirst = (graph, root) => {
    const queue = []
    queue.push(root)

    while(queue.length > 0) {
        const curr = queue.pop()
        console.log(curr)
        for(let vertex of graph[curr]) {
            queue.push(vertex)
        }
    }
}   


const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

breadthFirst(graph, 'c')