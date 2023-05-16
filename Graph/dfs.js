const depthFirst = (graph, root) => {
    const stack = []
    stack.push(root)

    while(stack.length > 0) {
        const curr = stack.pop()
        console.log(curr)
        for (let vertex of graph[curr]) {
            stack.push(vertex)
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

depthFirst(graph, 'c')